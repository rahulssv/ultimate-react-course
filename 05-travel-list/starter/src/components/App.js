import { useState } from "react";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: true },
// ];

export default function App() {
  const [items, setItems] = useState([]);
  function addItem(newItem) {
    setItems((items) => [...items, newItem]);
  }
  function handleDelete(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handleUpdate(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function clearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );
    if (confirmed) setItems([]);
  }
  // function handlePacked(){
  //   const totalPackedItems=
  // }
  return (
    <div className="app">
      <Logo />
      <Form addItem={addItem} />
      <PackingList
        items={items}
        deleteItem={handleDelete}
        updateItem={handleUpdate}
        clearList={clearList}
      />
      <Status items={items} />
    </div>
  );
}
function Logo() {
  return <h1>🌴 Far Away 💼 </h1>;
}
function Form({ addItem }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  function handleSubmit(e) {
    e.preventDefault(); //prevents reload
    // console.log(e);
    if (!description) return;
    const newItem = {
      id: Date.now(),
      description,
      quantity,
      packed: false,
    };
    addItem(newItem);
    console.log(newItem);
    setDescription("");
    setQuantity(1);
    // initialItems=[,...newItem]
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
        {/* <option value={1}>1</option>
      <option value={1}>2</option>
      <option value={1}>3</option> */}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></input>
      <button>Add</button> {/* onClick={handleSubmit} */}
    </form>
  );
}
function PackingList({ items, deleteItem, updateItem, clearList }) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;
  if (sortBy === "input") {
    sortedItems = items;
  }
  if (sortBy === "description") {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }
  if (sortBy === "packed") {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  return (
    <div className="list">
      <ul className="list">
        {sortedItems.map((item) => (
          <Item
            items={item}
            key={item.id}
            deleteItem={deleteItem}
            updateItem={updateItem}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input Order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed Status</option>
        </select>
        <button onClick={clearList}>Clear List</button>
      </div>
    </div>
  );
}

function Item({ items, deleteItem, updateItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={items.packed}
        onChange={() => updateItem(items.id)}
      />
      <span style={items.packed ? { textDecoration: "line-through" } : {}}>
        {items.quantity}
        <span> </span>
        {items.description}
      </span>
      <button onClick={() => deleteItem(items.id)}>❌</button>
    </li>
  );
}
function Status({ items }) {
  if (!items.length) {
    return (
      <footer className="stats">
        <em>Start adding items in list! 🚀</em>
      </footer>
    );
  }
  const totalPackedItems = items.reduce(
    (acc, item) => acc + (item.packed ? 1 : 0),
    0
  );
  const packedPercentage = Math.round((totalPackedItems / items.length) * 100);
  return (
    <footer className="stats">
      {packedPercentage < 100 ? (
        <em>
          You have {items.length} items on your list, and you already packed{" "}
          {totalPackedItems}({totalPackedItems === 0 ? 0 : packedPercentage}%)
        </em>
      ) : (
        <em>You are ready to go!!</em>
      )}
    </footer>
  );
}
