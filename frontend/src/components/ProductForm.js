import React, { useState, useEffect } from 'react';
import api from '../api';

const ProductForm = ({ editingProduct, onSave }) => {
  const [product, setProduct] = useState({
    name: '',
    quantity: '',
    price: ''
  });

  useEffect(() => {
    if (editingProduct) {
      setProduct(editingProduct);
    } else {
      setProduct({ name: '', quantity: '', price: '' });
    }
  }, [editingProduct]);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editingProduct) {
      await api.put(`/${editingProduct.id}`, product);
    } else {
      await api.post('/', product);
    }

    onSave(); // refresh list
    setProduct({ name: '', quantity: '', price: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{editingProduct ? "✏️ Edit Product" : "➕ Add Product"}</h2>
      <input
        name="name"
        placeholder="Name"
        value={product.name}
        onChange={handleChange}
        required
      />
      <input
        name="quantity"
        type="number"
        placeholder="Quantity"
        value={product.quantity}
        onChange={handleChange}
        required
      />
      <input
        name="price"
        type="number"
        placeholder="Price"
        value={product.price}
        onChange={handleChange}
        required
      />
      <button type="submit">{editingProduct ? "Update" : "Add"}</button>
    </form>
  );
};

export default ProductForm;
