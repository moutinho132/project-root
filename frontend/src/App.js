import React, { useState } from 'react';
import ProductTable from './components/ProductTable';
import ProductForm from './components/ProductForm';

function App() {
  const [productToEdit, setProductToEdit] = useState(null);

  const handleEdit = (product) => {
    setProductToEdit(product);
  };

  const handleSave = () => {
    setProductToEdit(null);
  };

  return (
    <div>
      <h1>Product Store</h1>
      <ProductForm productToEdit={productToEdit} onSave={handleSave} />
      <ProductTable onEdit={handleEdit} />
    </div>
  );
}

export default App;
