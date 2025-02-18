import React from "react";
import { ListGroup, Button } from "react-bootstrap";

const Cart = ({ cart, removeFromCart }) => {
  const totalPrice = cart
    .reduce((total, item) => total + item.price, 0)
    .toFixed(2);

  return (
    <div className="mt-4" id="cart1">
      <h4>Shopping Cart</h4>
      <ListGroup>
        {cart.length > 0 ? (
          cart.map((item, index) => (
            <ListGroup.Item
              key={index}
              className="d-flex justify-content-between align-items-center"
            >
              {item.name} - ${item.price}
              <Button
                variant="danger"
                size="sm"
                onClick={() => removeFromCart(index)}
              >
                Remove
              </Button>
            </ListGroup.Item>
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
      </ListGroup>
      <h5 className="mt-3">Total: ${totalPrice}</h5>
      {cart.length > 0 && (
        <Button variant="success" className="mt-2">
          Checkout
        </Button>
      )}
    </div>
  );
};

export default Cart;
