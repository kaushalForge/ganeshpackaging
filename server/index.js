require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const Product = require("./models/product");
const dbConnection = require("./utils/db");

const app = express();

// ---------- CONFIG ----------
const ADMIN_ID = process.env.ADMIN_ID;
const ADMIN_PASS = process.env.ADMIN_PASSWORD;
const FRONTEND_URL = process.env.FRONTEND_URL;
const COOKIE_NAME = "ganeshPackaging";
const COOKIE_MAX_AGE = 24 * 60 * 60 * 1000; // 1 day

// ---------- MIDDLEWARE ----------
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// ---------- CORS ----------
app.use(
  cors({
    origin: FRONTEND_URL,
    credentials: true,
  }),
);

// ---------- VIEW ENGINE ----------
app.set("view engine", "ejs");

// ---------- DATABASE ----------
dbConnection();

// ---------- COOKIE REFRESH MIDDLEWARE ----------
app.use((req, res, next) => {
  if (req.cookies[COOKIE_NAME] === "true") {
    res.cookie(COOKIE_NAME, "true", {
      httpOnly: true,
      maxAge: COOKIE_MAX_AGE,
    });
  }
  next();
});

// ---------- AUTH MIDDLEWARE ----------
function requireAdmin(req, res, next) {
  if (req.cookies[COOKIE_NAME] !== "true") return res.redirect("/admin");
  next();
}

// ---------- ROUTES ----------

// HOME
app.get("/", (req, res) => {
  const isLoggedIn = req.cookies[COOKIE_NAME] === "true";
  res.render("home", { isLoggedIn });
});

// LOGIN
app.get("/admin", (req, res) => {
  if (req.cookies[COOKIE_NAME] === "true")
    return res.redirect("/admin/dashboard");
  res.render("login");
});

app.get("/admin/login", (req, res) => {
  if (req.cookies[COOKIE_NAME] === "true")
    return res.redirect("/admin/dashboard");
  res.render("login");
});

app.post("/admin/login", (req, res) => {
  const { id, password } = req.body;
  if (id === ADMIN_ID && password === ADMIN_PASS) {
    res.cookie(COOKIE_NAME, "true", {
      httpOnly: true,
      maxAge: COOKIE_MAX_AGE,
    });
    return res.redirect("/admin/dashboard");
  }
  res.send("Wrong credentials");
});

// LOGOUT
app.post("/admin/logout", (req, res) => {
  res.clearCookie(COOKIE_NAME);
  res.redirect("/");
});

// DASHBOARD
app.get("/admin/dashboard", requireAdmin, async (req, res) => {
  try {
    const products = await Product.find({}).lean();
    const totalProducts = products.length;
    const totalValue = products.reduce((sum, p) => sum + (p.price || 0), 0);
    res.render("dashboard", { products, totalProducts, totalValue });
  } catch (err) {
    console.error("Dashboard Error:", err);
    res.status(500).send("Server error while fetching dashboard.");
  }
});

// ADD PRODUCT
app.get("/admin/add", requireAdmin, (req, res) => res.render("add"));

app.post("/admin/add", requireAdmin, async (req, res) => {
  try {
    const { name, description, price, category, images } = req.body;
    let imageArray = [];
    if (Array.isArray(images)) {
      imageArray = images
        .map((img) => img.trim())
        .filter(Boolean)
        .slice(0, 6);
    } else if (typeof images === "string" && images.trim()) {
      imageArray = [images.trim()];
    }

    const product = await Product.create({
      name,
      description,
      price: Number(price),
      category: category || "general",
      images: imageArray,
    });

    res.status(201).json({ message: "Product added successfully", product });
  } catch (err) {
    console.error("Add Product Error:", err);
    res
      .status(500)
      .json({ message: "Error adding product", error: err.message });
  }
});

// EDIT PRODUCT
app.get("/admin/edit/:_id", requireAdmin, async (req, res) => {
  try {
    const { _id } = req.params;
    const product = await Product.findById(_id).lean();
    if (!product) return res.status(404).send("Product not found");
    res.render("edit", { product });
  } catch (err) {
    console.error("Edit Product Error:", err);
    res.status(500).send("Error fetching product");
  }
});

app.post("/admin/edit/:_id", requireAdmin, async (req, res) => {
  try {
    const { _id } = req.params;
    const { name, description, price, images } = req.body;
    let imageArray = [];
    if (Array.isArray(images)) {
      imageArray = images
        .map((img) => img.trim())
        .filter(Boolean)
        .slice(0, 6);
    } else if (typeof images === "string" && images.trim()) {
      imageArray = [images.trim()];
    }

    await Product.findByIdAndUpdate(
      _id,
      { name, description, price: Number(price), images: imageArray },
      { new: true },
    );

    res.redirect("/admin/dashboard");
  } catch (err) {
    console.error("Update Product Error:", err);
    res.status(500).send("Error updating product");
  }
});

// DELETE PRODUCT
app.post("/admin/delete/:_id", requireAdmin, async (req, res) => {
  try {
    const { _id } = req.params;
    await Product.findByIdAndDelete(_id);
    res.redirect("/admin/dashboard");
  } catch (err) {
    console.error("Delete Product Error:", err);
    res.status(500).send("Error deleting product");
  }
});

// API ROUTES
app.get("/api/products/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).lean();
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
  } catch (err) {
    console.error("API Get Product Error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find({}).lean();
    res.json(products);
  } catch (err) {
    console.error("API Get Products Error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`Server running locally on port ${PORT}`));
}

// Export for Vercel serverless
module.exports = app;
