import { useParams, useLocation } from "react-router-dom";

function ProductDetail() {
    const { id } = useParams();
    const location = useLocation();
    const product = location.state?.product;

    if (!product) {
        return <h2>Product data not found. Fetching from API for ID: {id}...</h2>;
    }

    return (
        <div>
            <h1>Product ID {product.id}</h1>
            <p>Product Name: {product.title}</p>
            <p>Product Price: {product.price}</p>
            <img src={product.image} alt={product.title} />
        </div>
    );
}
export default ProductDetail;