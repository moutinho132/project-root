import React, { useState, useEffect } from 'react';
import ProductTable from './ProductTable'; // Tabla para listar productos
import CreateProduct from './CreateProduct'; // Formulario para crear productos
import api from '../services/api'; // Axios configurado

const ProductDashboard = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // Función para cargar los productos desde el backend
    const fetchProducts = async () => {
        try {
            const response = await api.get('');
            setProducts(response.data);
        } catch (error) {
            console.error('Error al cargar los productos:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleCreateProduct = async (newProduct) => {
        try {
            const response = await api.post('', newProduct);  
            setProducts((prevProducts) => [...prevProducts, response.data]);
        } catch (error) {
            console.error('Error al crear el producto:', error);
        }
    };
    

    const handleDeleteProduct = async (productId) => {
        try {
            await api.delete(`/${productId}`);
            setProducts((prevProducts) => prevProducts.filter((p) => p.id !== productId));
        } catch (error) {
            console.error('Error al eliminar el producto:', error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div>
            <h1>Gestión de Productos</h1>
            {/* Componente para crear un nuevo producto */}
            <CreateProduct onCreate={handleCreateProduct} />
            
            {/* Mostrar un indicador de carga mientras se obtienen los datos */}
            {isLoading ? (
                <p>Cargando productos...</p>
            ) : (
                // Tabla con las acciones para los productos
                <ProductTable products={products} onDelete={handleDeleteProduct} />
            )}
        </div>
    );
};

export default ProductDashboard;
