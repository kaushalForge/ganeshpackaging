const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },

    description: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
    },

    category: {
      type: String,
    },

    images: {
      type: Array,
    },
  },
  { timestamps: true },
);

const Product =
  mongoose.models.product || mongoose.model("product", productSchema);

module.exports = Product;
