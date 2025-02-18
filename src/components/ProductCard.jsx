import React from "react";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const ProductCard = ({ product, addToCart }) => (
  <div
    className="card m-2"
    style={{
      width: "18rem",
      margin: "10px",
      padding: 5,
      border: "1px solid #ccc",
      borderRadius: 5,
      alignContent: "center",
      alignItems: "center",
    }}
  >
    <img
      variant="top"
      src={product.image}
      className="card-img-top"
      alt={product.name}
      style={{ width: "100%", height: "170px", objectFit: "fit" }}
    />
    <div className="card-body">
      <h5 className="card-title">{product.name}</h5>
      <p className="card-text">${product.price}</p>
      <Card.Text>{product.description}</Card.Text>
      <button className="btn btn-primary" onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  </div>
);
export default ProductCard;
