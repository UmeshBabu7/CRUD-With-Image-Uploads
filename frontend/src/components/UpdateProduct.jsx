import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const UpdateProduct = () => {

    const navigate = useNavigate();
    const { id } = useParams();

    const [image, setImage] = useState(null)
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')
    const [currentImage, setCurrentImage] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getProductInfo();
    }, []);

    const getProductInfo = async () => {
        try {
            const response = await axios.get(`http://127.0.0.1:8000/api/${id}/`)
            setName(response.data.name)
            setPrice(response.data.price)
            setDescription(response.data.description)
            setCategory(response.data.category)
            setCurrentImage(response.data.image)
            setLoading(false)
        } catch (error) {
            console.log("Error fetching product", error)
            setLoading(false)
        }
    }

    const updateProductInfo = async () => {
        let formField = new FormData()
        formField.append('name', name)
        formField.append('price', price)
        formField.append('description', description)
        formField.append('category', category)

        if (image !== null) {
            formField.append('image', image)
        }

        try {
            const response = await axios.put(
                `http://127.0.0.1:8000/api/${id}/`,
                formField
            )
            console.log(response.data)

            // redirect after success
            navigate('/')

        } catch (error) {
            console.log("Error updating product", error)
        }
    }

    if (loading) {
        return <div className="container"><p>Loading...</p></div>
    }

    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4"> Update Product </h2>

                <div className="form-group mb-3">
                    <label></label>
                    <div className="mb-2">
                        <img 
                            src={currentImage} 
                            alt="Current product" 
                            height="200" 
                            width="300"
                            className="img-thumbnail"
                        />
                    </div>
                    <label></label>
                    <input
                        type="file"
                        className="form-control"
                        onChange={(e) => setImage(e.target.files[0])}
                    />
                </div>

                <div className="form-group mb-3">
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter Product Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className="form-group mb-3">
                    <input
                        type="number"
                        className="form-control form-control-lg"
                        placeholder="Enter Product Price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>

                <div className="form-group mb-3">
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter Product Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>

                <div className="form-group mb-3">
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter Product Category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    />
                </div>

                <button
                    className="btn btn-primary btn-block"
                    onClick={updateProductInfo}
                >
                    Update Product 
                </button>
            </div>
        </div>
    );
};

export default UpdateProduct