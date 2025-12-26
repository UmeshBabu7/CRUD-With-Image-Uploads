import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Card, Container, Row, Col } from 'react-bootstrap';

const ProductDetail = () => {

  const [product, setProduct] = useState({})
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getSingleProduct();
  }, []);

  const getSingleProduct = async () => {
    const { data } = await axios.get(`http://127.0.0.1:8000/api/${id}/`);
    setProduct(data);
  }
  
  const deleteProduct = async () => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/${id}/`)
      navigate('/');
    } catch (error) {
      console.log("Error deleting product", error)
    }
  }

  return (
    <Container className="mt-4">
      <Card className="shadow">
        <Row className="g-0">
          <Col md={5}>
            <Card.Img 
              src={product.image} 
              alt={product.name}
              style={{ 
                height: '100%', 
                objectFit: 'cover',
                borderRadius: '0.375rem 0 0 0.375rem'
              }}
            />
          </Col>
          <Col md={7}>
            <Card.Body className="p-4">
              <Card.Title className="mb-3" style={{ fontSize: '2rem', fontWeight: '600' }}>
                {product.name}
              </Card.Title>
              
              <div className="mb-3">
                <h4 className="text-primary mb-0">Rs. {product.price}</h4>
              </div>

              <div className="mb-3">
                <h6 className="text-muted mb-2">Description</h6>
                <p className="mb-0" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                  {product.description}
                </p>
              </div>

              {product.category && (
                <div className="mb-4">
                  <h6 className="text-muted mb-2">Category</h6>
                  <span className="badge bg-secondary" style={{ fontSize: '0.9rem' }}>
                    {product.category?.name || product.category}
                  </span>
                </div>
              )}

              <div className="d-flex gap-3 mt-4 justify-content-center">
                <Link 
                  className="btn btn-primary" 
                  to={`/${id}/updateProduct`}
                  style={{ minWidth: '140px' }}
                >
                  Update Product
                </Link>
                <button 
                  className="btn btn-danger" 
                  onClick={deleteProduct}
                  style={{ minWidth: '140px' }}
                >
                  Delete Product
                </button>
              </div>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default ProductDetail;
