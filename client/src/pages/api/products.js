import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "src/data/productData.json");

export default function handler(req, res) {
  if (req.method === "GET") {
    const data = fs.readFileSync(filePath, "utf-8");
    return res.status(200).json(JSON.parse(data));
  }

  if (req.method === "POST") {
    const body = req.body;

    const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));

    const numbers = data.map((p) => parseInt(p.id.replace("c", "")));
    const nextId = `c${Math.max(...numbers) + 1}`;

    const newProduct = {
      id: nextId,
      name: body.name,
      description: body.description,
      price: Number(body.price),
      image: body.image,
    };

    data.push(newProduct);
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

    return res.status(200).json({ message: "Product added" });
  }

  if (req.method === "DELETE") {
    const { id } = req.body;

    const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    const filtered = data.filter((p) => p.id !== id);

    fs.writeFileSync(filePath, JSON.stringify(filtered, null, 2));

    return res.status(200).json({ message: "Product deleted" });
  }

  res.status(405).end();
}
