import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import { useEffect, useState } from "react";

const ProductDetails = () => {
  const { id } = useParams();
  const [product , setProduct] = useState(null);

  useEffect(() => {
    axios
.get(`https://dummyjson.com/products/${id}`)
.then((res) => setProduct(res.data));
  }, [id]);

  if (!product) return <h1>Loading...</h1>;

  
  return (
    <div className="p-4">
    <img src={product.thumbnail} />
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>${product.price}</p>
    </div>
  );
};

export default ProductDetails;