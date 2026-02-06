"use client";
import { useState } from "react";

export default function Admin() {
  const [auth, setAuth] = useState(false);
  const [id, setId] = useState("");
  const [pass, setPass] = useState("");

  if (!auth) {
    return (
      <div className="p-10">
        <input placeholder="ID" onChange={(e) => setId(e.target.value)} />
        <input
          placeholder="Password"
          type="password"
          onChange={(e) => setPass(e.target.value)}
        />
        <button
          onClick={() => {
            if (id === "ganesh" && pass === "pack123") setAuth(true);
            else alert("Wrong credentials");
          }}
        >
          Login
        </button>
      </div>
    );
  }

  return <Editor />;
}

function Editor() {
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
  });

  const [deleteId, setDeleteId] = useState("");

  const addProduct = async () => {
    await fetch("/api/products", {
      method: "POST",
      body: JSON.stringify(form),
    });
    alert("Added");
  };

  const deleteProduct = async () => {
    await fetch("/api/products", {
      method: "DELETE",
      body: JSON.stringify({ id: deleteId }),
    });
    alert("Deleted");
  };

  return (
    <div className="p-10 space-y-4">
      <h2>Add Product</h2>
      <input
        placeholder="Name"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <textarea
        placeholder="Description"
        onChange={(e) => setForm({ ...form, description: e.target.value })}
      />
      <input
        placeholder="Price"
        type="number"
        onChange={(e) => setForm({ ...form, price: e.target.value })}
      />
      <input
        placeholder="Image URL"
        onChange={(e) => setForm({ ...form, image: e.target.value })}
      />
      <button onClick={addProduct}>Add</button>

      <hr />

      <h2>Delete Product</h2>
      <input placeholder="c3" onChange={(e) => setDeleteId(e.target.value)} />
      <button onClick={deleteProduct}>Delete</button>
    </div>
  );
}
