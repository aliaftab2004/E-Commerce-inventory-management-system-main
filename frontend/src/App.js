import React, { useState } from 'react';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';

function App() {
  const [editingProduct, setEditingProduct] = useState(null);
  const [refresh, setRefresh] = useState(false);

  const handleSave = () => {
    setEditingProduct(null);
    setRefresh(!refresh);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>🛒 E-Commerce Admin Dashboard</h1>
      <ProductForm editingProduct={editingProduct} onSave={handleSave} />
      <ProductList onEdit={setEditingProduct} key={refresh} />
    </div>
  );
}

export default App;
