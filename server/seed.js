require("dotenv").config();
const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");
const Product = require("./models/product");

// ---------- DB CONNECTION ----------
const URI = process.env.URI;
const dbConnection = async () => {
  try {
    await mongoose.connect(URI);
    console.log("MongoDB Connection successful!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

// ---------- SEED FUNCTION ----------
const seedProducts = async () => {
  try {
    await dbConnection();

    // Read product data from JSON
    const dataPath = path.join(__dirname, "data", "productData.json");
    const rawData = fs.readFileSync(dataPath, "utf-8");
    const products = JSON.parse(rawData);

    // Clear existing products
    await Product.deleteMany();
    console.log("Existing products cleared.");

    // Map JSON to Product schema
    const formattedProducts = products.map((p) => ({
      name: p.name,
      description: p.description,
      price: Number(p.price),
      category: p.category || "",
      images: p.image ? [p.image] : [],
    }));

    // Insert into DB
    await Product.insertMany(formattedProducts);
    console.log(`Seeded ${formattedProducts.length} products successfully!`);

    process.exit();
  } catch (err) {
    console.error("Seeding error:", err);
    process.exit(1);
  }
};

// Run seed
seedProducts();
