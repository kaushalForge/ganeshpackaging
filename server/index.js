// index.js (Vercel-ready Express server)
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const cookieParser = require("cookie-parser");

const app = express();

const FRONTEND_URL = process.env.FRONTEND_URL;
const API_URL = process.env.API_URL;

// ---------- PATHS ----------
const filePath = path.join(process.cwd(), "data", "productData.json"); // Vercel-safe
const viewsPath = path.join(process.cwd(), "views"); // EJS views
const publicPath = path.join(process.cwd(), "public"); // Static files

// ---------- MIDDLEWARE ----------
app.use(
  cors({
    origin: FRONTEND_URL,
    credentials: true, // allow cookies
  }),
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// ---------- VIEWS & STATIC ----------
app.set("view engine", "ejs");
app.set("views", viewsPath);
app.use("/public", express.static(publicPath)); // serve public files

// ---------- STATIC LOGIN ----------
const ADMIN_ID = process.env.ADMIN_ID;
const ADMIN_PASS = process.env.ADMIN_PASSWORD;

// ---------- HELPERS ----------
const readProducts = () => {
  try {
    return fs.existsSync(filePath)
      ? JSON.parse(fs.readFileSync(filePath, "utf-8"))
      : [];
  } catch (err) {
    console.error("Failed to read products:", err.message);
    return [];
  }
};

// ⚠️ File writes will NOT persist on Vercel — temporary only
const writeProducts = (data) => {
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  } catch (err) {
    console.warn("Write failed on Vercel (expected):", err.message);
  }
};

// ---------- AUTH MIDDLEWARE ----------
const requireAuth = (req, res, next) => {
  if (req.cookies.ganeshPackaging === "true") return next();
  return res.redirect(`${API_URL}/admin`);
};

// ---------- ROUTES ----------

// Home route (optional)
app.get("/", (req, res) => {
  res.render("home", {
    loggedIn: req.cookies.ganeshPackaging === "true",
  });
});

// Public API
app.get("/api/products", (req, res) => {
  res.json(readProducts());
});

// ---------- LOGIN ----------
app.get("/admin", (req, res) => {
  if (req.cookies.ganeshPackaging === "true")
    return res.redirect(`${API_URL}/admin/dashboard`);
  res.render("login");
});

app.post("/admin/login", (req, res) => {
  const { id, password } = req.body;

  if (id === ADMIN_ID && password === ADMIN_PASS) {
    res.cookie("ganeshPackaging", "true", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
      path: "/",
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    });

    return res.redirect(`${API_URL}/admin/dashboard`);
  }

  res.send("Wrong credentials");
});

// ---------- DASHBOARD ----------
app.get("/admin/dashboard", requireAuth, (req, res) => {
  res.render("dashboard", { products: readProducts() });
});

// ---------- ADD PRODUCT ----------
app.get("/admin/add", requireAuth, (req, res) => {
  res.render("add");
});

app.post("/admin/add", requireAuth, (req, res) => {
  const products = readProducts();

  products.push({
    id: "c" + Date.now(),
    name: req.body.name,
    description: req.body.description,
    price: Number(req.body.price),
    image: req.body.image,
  });

  writeProducts(products);
  res.redirect(`${API_URL}/admin/dashboard`);
});

// ---------- EDIT PRODUCT ----------
app.get("/admin/edit/:id", requireAuth, (req, res) => {
  const product = readProducts().find((p) => p.id === req.params.id);
  if (!product) return res.send("Product not found");

  res.render("edit", { product });
});

app.post("/admin/edit/:id", requireAuth, (req, res) => {
  const products = readProducts().map((p) =>
    p.id === req.params.id
      ? {
          ...p,
          name: req.body.name,
          description: req.body.description,
          price: Number(req.body.price),
          image: req.body.image,
        }
      : p,
  );

  writeProducts(products);
  res.redirect(`${API_URL}/admin/dashboard`);
});

// ---------- DELETE PRODUCT ----------
app.post("/admin/delete/:id", requireAuth, (req, res) => {
  const products = readProducts().filter((p) => p.id !== req.params.id);
  writeProducts(products);
  res.redirect(`${API_URL}/admin/dashboard`);
});

// ---------- LOGOUT ----------
app.get("/admin/logout", (req, res) => {
  res.clearCookie("ganeshPackaging", {
    path: "/",
    secure: process.env.NODE_ENV === "production",
    sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
  });
  res.redirect(`${API_URL}/admin`);
});

// ---------- VERCEL EXPORT ----------
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server started at port: ${PORT}`);
});

module.exports = app;
