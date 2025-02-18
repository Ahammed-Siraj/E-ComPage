import React, { useState } from "react";
import ProductCard from "./ProductCard";
import { Row, Col, Form, Container } from "react-bootstrap";

const ProductList = ({ products, addToCart }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container className="py-4">
      <div className="d-flex flex-wrap justify-content-center">
        <Form.Control
          type="text"
          placeholder="Search products..."
          className="mb-4 p-2 border border-primary rounded"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Row className="g-4">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <Col
                key={product.id}
                md={4}
                sm={6}
                xs={12}
                className="d-flex flex-wrap justify-content-center"
              >
                <ProductCard product={product} addToCart={addToCart} />
              </Col>
            ))
          ) : (
            <Col xs={12} className="text-center text-muted">
              <p>No products found.</p>
            </Col>
          )}
        </Row>
      </div>
    </Container>
  );
};

export default ProductList;
