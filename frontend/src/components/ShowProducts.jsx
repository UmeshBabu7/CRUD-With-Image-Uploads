import { useEffect, useState } from "react"
import axios from "axios"
import { Card } from "react-bootstrap"
import { Link } from "react-router-dom";

const ShowProducts = () => {

    const [products, setProducts] = useState([])

    const getProducts = async () => {
        try {
            const response = await axios.get("http://127.0.0.1:8000/api/")
            setProducts(response.data)
        } catch (error) {
            console.log("Error fetching products", error)
        }
    }

    useEffect(() => {
        getProducts()
    }, [])

    return(
        <div className="products-card-info">
            {
                products.map((product) => (
                    <Card key={product.id} className="m-2 rounded shadow-lg" style={{ width: '22rem'}}>
                        <Card.Img 
                          variant="top" 
                          src={product.image} 
                        />
                        <Card.Body>
                            <Card.Title>{product.name}</Card.Title>
                            <Card.Text>Rs. {product.price}</Card.Text>
                            <Card.Text>{product.description}</Card.Text>
                            <Card.Text>{product.category?.name}</Card.Text>
                           <Link className="btn btn-primary mr-2" to={`/${product.id}`}> Show Detail </Link>
                        </Card.Body>
                    </Card>
                ))
            }
        </div>
    )
}

export default ShowProducts
