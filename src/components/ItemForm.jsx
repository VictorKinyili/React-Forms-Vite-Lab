import { useState } from 'react';
import { v4 as uuid } from 'uuid';

function ItemForm({ onItemFormSubmit }) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('Produce');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    const newItem = {
      id: uuid(),
      name: name.trim(),
      category,
      ...(price === '' ? {} : { price: parseFloat(price) })
    };

    onItemFormSubmit(newItem);

    setName('');
    setPrice('');
    setCategory('Produce');
  };

  return (
    <form onSubmit={handleSubmit} className="item-form">
      <h3>Add New Item</h3>
      <div>
        <label htmlFor="item-name">Item Name:</label>
        <input
          id="item-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="item-price">Price:</label>
        <input
          id="item-price"
          type="number"
          step="0.01"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="item-category">Category:</label>
        <select id="item-category" value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Bakery">Bakery</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;