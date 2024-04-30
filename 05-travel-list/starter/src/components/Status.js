export function Status({ items }) {
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
