import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddProduct = () => {

    const navigate = useNavigate();

    const [image, setImage] = useState(null)
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')

    const addProductInfo = async () => {
        let formField = new FormData()
        formField.append('name', name)
        formField.append('price', price)
        formField.append('description', description)
        formField.append('category', category)

        if (image !== null) {
            formField.append('image', image)
        }

        try {
            const response = await axios.post(
                'http://127.0.0.1:8000/api/',
                formField // data:formField
            )
            console.log(response.data)

            // redirect after success
            navigate('/')

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4"> Add A Product </h2>

                <div className="form-group">
                    <input
                        type="file"
                        className="form-control"
                        onChange={(e) => setImage(e.target.files[0])}
                    />
                </div>

                <div className="form-group">
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter Product Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <input
                        type="number"
                        className="form-control form-control-lg"
                        placeholder="Enter Product Price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter Product Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter Product Category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    />
                </div>

                <button
                    className="btn btn-primary btn-block mt-4" 
                    onClick={addProductInfo}
                >
                    Add Product 
                </button>
            </div>
        </div>
    );
};

export default AddProduct 
