import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

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


  return (
    <div>
      <h2> Detail of Single Product </h2>
      <hr />

      <div className="single-product-info">
        <img src={product.image} height="300" width="500" />
        {/* <div className="product-detail"> */}
          <p>{product.id}</p>
          <p>Name : {product.name}</p>
          <p>Price: {product.price}</p>
          <p>Description: {product.description}</p>
          <p>Category: {product.category}</p>
        </div>
      </div>
    // </div>
  );
};

export default ProductDetail;
