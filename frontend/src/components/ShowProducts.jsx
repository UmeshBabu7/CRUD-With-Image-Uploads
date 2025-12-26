import { useEffect, useState } from "react"
import axios from "axios"
import { Card, Container } from "react-bootstrap"
import { Link } from "react-router-dom"
import "./ShowProducts.css"

const ShowProducts = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const getProducts = async () => {
        try {
            setLoading(true)
            const response = await axios.get("http://127.0.0.1:8000/api/")
            setProducts(response.data)
        } catch (error) {
            console.log("Error fetching products", error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getProducts()
    }, [])

    if (loading) {
        return (
            <Container className="products-container">
                <div className="loading-state">
                    <div className="loading-spinner"></div>
                    <p>Loading products...</p>
                </div>
            </Container>
        )
    }

    return(
        <Container className="products-container">
            <div className="products-header">
                <h1>Our Products</h1>
                <p>Discover our amazing collection of products</p>
            </div>

            {products.length === 0 ? (
                <div className="empty-state">
                    <div className="empty-state-icon">📦</div>
                    <h3>No Products Found</h3>
                    <p>Start by adding your first product!</p>
                </div>
            ) : (
                <div className="products-grid">
                    {products.map((product) => (
                        <Card key={product.id} className="product-card">
                            <div className="product-card-image-wrapper">
                                <img 
                                    src={product.image} 
                                    alt={product.name}
                                    className="product-card-image"
                                    onError={(e) => {
                                        e.target.src = 'https://via.placeholder.com/300x250?text=No+Image'
                                    }}
                                />
                            </div>
                            <Card.Body className="product-card-body">
                                <Card.Title className="product-card-title">
                                    {product.name}
                                </Card.Title>
                                <div className="product-card-price">
                                    Rs. {product.price}
                                </div>
                                <Card.Text className="product-card-description">
                                    {product.description}
                                </Card.Text>
                                {product.category?.name && (
                                    <div className="product-card-category">
                                        <span className="product-card-category-badge">
                                            {product.category.name}
                                        </span>
                                    </div>
                                )}
                                <Link 
                                    className="product-card-button" 
                                    to={`/${product.id}`}
                                >
                                    View Details
                                </Link>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            )}
        </Container>
    )
}

export default ShowProducts
