import { useState } from 'react';
import Search from './Search';
import ItemForm from './ItemForm';
import Item from './Item';

const INITIAL_PRODUCTS = [
  { id: 1, name: 'Milk', category: 'Dairy', price: 2.99 },
  { id: 2, name: 'Bread', category: 'Bakery', price: 3.49 },
  { id: 3, name: 'Cheese', category: 'Dairy', price: 4.99 },
  { id: 4, name: 'Apples', category: 'Produce', price: 1.99 },
];

function App() {
  const [products, setProducts] = useState(INITIAL_PRODUCTS);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleSearchChange = (value) => {
    setSearchTerm(value);
  };

  const handleItemFormSubmit = (newItem) => {
    setProducts([...products, newItem]);
  };

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="app">
      <h1>Shopping Dashboard</h1>
      <Search searchTerm={searchTerm} onSearchChange={handleSearchChange} />
      <div style={{ margin: '15px 0' }}>
        <label>Category Filter: </label>
        <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
          <option value="All">All</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Bakery">Bakery</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ItemForm onItemFormSubmit={handleItemFormSubmit} />
      <h2>Product List</h2>
      <ul className="Items">
        {filteredProducts.map((product) => (
          <Item
            key={product.id}
            name={product.name}
            category={product.category}
            price={product.price}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;