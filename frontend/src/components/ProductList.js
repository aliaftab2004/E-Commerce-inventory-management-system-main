import React, { useEffect, useState } from 'react';
import api from '../api';

const ProductList = ({ onEdit }) => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const res = await api.get('/');
    setProducts(res.data);
  };

  const deleteProduct = async (id) => {
    await api.delete(`/${id}`);
    fetchProducts();
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h2>📦 Product Inventory</h2>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th><th>Name</th><th>Quantity</th><th>Price</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map(p => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.name}</td>
              <td>{p.quantity}</td>
              <td>${p.price}</td>
              <td>
                <button onClick={() => onEdit(p)}>Edit</button>
                <button onClick={() => deleteProduct(p.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
