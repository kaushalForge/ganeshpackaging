const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const session = require("express-session");

const app = express();
const PORT = 5000;

// ---------- PATH ----------
const filePath = path.join(__dirname, "data", "productData.json");

// ---------- MIDDLEWARE ----------
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.set("view engine", "ejs");

// ---------- SESSION ----------
app.use(
  session({
    name: "ganeshpackaging_admin",
    secret: "ganeshpackaging",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24,
      httpOnly: true,
      sameSite: "lax", // keep 'lax' if same origin, 'none' if cross-origin
      secure: false, // must be false for HTTP localhost
    },
  }),
);

// ---------- STATIC LOGIN ----------
const ADMIN_ID = "admin";
const ADMIN_PASS = "1234";

// ---------- HELPERS ----------
const readProducts = () =>
  fs.existsSync(filePath) ? JSON.parse(fs.readFileSync(filePath, "utf-8")) : [];
const writeProducts = (data) =>
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

// ---------- AUTH ----------
const requireAuth = (req, res, next) => {
  if (req.session.loggedIn) return next();
  return res.redirect("/admin");
};

// ---------- CHECK AUTH (for localStorage restore) ----------
app.get("/admin/check-auth", (req, res) => {
  res.json({ loggedIn: !!req.session.loggedIn });
});

// ---------- PUBLIC API ----------
app.get("/api/products", (req, res) => {
  res.json(readProducts());
});

// ---------- LOGIN ----------
app.get("/admin", (req, res) => {
  if (req.session.loggedIn) return res.redirect("/admin/dashboard"); // ✅ auto-redirect if already logged in
  res.render("login");
});

app.post("/admin/login", (req, res) => {
  const { id, password } = req.body;
  if (id === ADMIN_ID && password === ADMIN_PASS) {
    req.session.loggedIn = true;
    req.session.save(() => res.redirect("/admin/dashboard")); // ✅ save session before redirect
  } else {
    res.send("Wrong credentials");
  }
});

// ---------- DASHBOARD ----------
app.get("/admin/dashboard", requireAuth, (req, res) => {
  res.render("dashboard", { products: readProducts() });
});

// ---------- ADD PRODUCT ----------
app.get("/admin/add", requireAuth, (req, res) => res.render("add"));

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

  req.session.save(() => res.redirect("/admin/dashboard")); // ✅ save session
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
  req.session.save(() => res.redirect("/admin/dashboard")); // ✅ save session
});

// ---------- DELETE PRODUCT ----------
app.post("/admin/delete/:id", requireAuth, (req, res) => {
  const products = readProducts().filter((p) => p.id !== req.params.id);
  writeProducts(products);
  req.session.save(() => res.redirect("/admin/dashboard")); // ✅ save session
});

// ---------- LOGOUT ----------
app.get("/admin/logout", (req, res) => {
  req.session.destroy(() => res.redirect("/admin"));
});

// ---------- START SERVER ----------
app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`),
);
