export function Item({ items, deleteItem, updateItem }) {
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
