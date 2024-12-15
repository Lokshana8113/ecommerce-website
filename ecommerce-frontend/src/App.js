import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [cart, setCart] = useState([]);
  
  // Sample product data
  const products = [
    { id: 1, name: 'Laptop', price: 60000, image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Headphones', price: 2000, image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Smartphone', price: 15000, image: 'https://via.placeholder.com/150' },
  ];

  // Add item to cart
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // Remove item from cart
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Simple E-commerce Website</h1>
      </header>

      <div className="product-list">
        <h2>Products</h2>
        <div className="products">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>Price: ₹{product.price}</p>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>

      <div className="cart">
        <h2>Shopping Cart</h2>
        {cart.length > 0 ? (
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.name} - ₹{item.price}
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
        ) : (
          <p>Your cart is empty!</p>
        )}
      </div>
    </div>
  );
};

export default App;
