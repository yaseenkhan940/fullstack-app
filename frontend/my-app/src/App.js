import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/items").then((res) => {
      setItems(res.data);
    });
  }, []);

  const addItem = () => {
    axios.post("http://127.0.0.1:8000/items", {
      id: items.length + 1,
      name: newItem,
      description: "Sample description",
    }).then((res) => {
      setItems([...items, res.data]);
      setNewItem("");
    });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>FastAPI + React Demo</h2>
      <input
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="Enter item"
      />
      <button onClick={addItem}>Add</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
