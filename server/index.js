require("dotenv").config();
const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const cookieParser = require("cookie-parser");

const app = express();
const PORT = process.env.PORT || 6000;
const FRONTEND_URL = process.env.FRONTEND_URL;

// ---------- PATH ----------
const filePath = path.join(__dirname, "data", "productData.json");

// ---------- MIDDLEWARE ----------
app.use(
  cors({
    origin: FRONTEND_URL,
    credentials: true,
  }),
);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(cookieParser());
app.set("view engine", "ejs");

// ---------- STATIC LOGIN ----------
const ADMIN_ID = process.env.ADMIN_ID;
const ADMIN_PASS = process.env.ADMIN_PASSWORD;

// ---------- HELPERS ----------
const readProducts = () =>
  fs.existsSync(filePath) ? JSON.parse(fs.readFileSync(filePath, "utf-8")) : [];

const writeProducts = (data) =>
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

// ---------- AUTH MIDDLEWARE ----------
const requireAuth = (req, res, next) => {
  if (req.cookies.ganeshPackaging === "true") return next();
  return res.redirect("/admin");
};

app.get("/", (req, res) => {
  res.render("home", {
    loggedIn: req.cookies.ganeshPackaging === "true",
  });
});

// ---------- PUBLIC API ----------
app.get("/api/products", (req, res) => {
  res.json(readProducts());
});

// ---------- LOGIN PAGE ----------
app.get("/admin", (req, res) => {
  if (req.cookies.ganeshPackaging === "true")
    return res.redirect("/admin/dashboard");
  res.render("login");
});

// ---------- LOGIN ----------
app.post("/admin/login", (req, res) => {
  const { id, password } = req.body;

  if (id === ADMIN_ID && password === ADMIN_PASS) {
    res.cookie("ganeshPackaging", "true", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // https only in prod
      sameSite: "lax",
      path: "/", // whole site
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    });

    return res.redirect("/admin/dashboard");
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
  res.redirect("/admin/dashboard");
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
  res.redirect("/admin/dashboard");
});

// ---------- DELETE PRODUCT ----------
app.post("/admin/delete/:id", requireAuth, (req, res) => {
  const products = readProducts().filter((p) => p.id !== req.params.id);
  writeProducts(products);
  res.redirect("/admin/dashboard");
});

// ---------- LOGOUT ----------
app.get("/admin/logout", (req, res) => {
  res.clearCookie("ganeshPackaging", { path: "/" });
  res.redirect("/admin");
});

// ---------- START SERVER ----------
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
