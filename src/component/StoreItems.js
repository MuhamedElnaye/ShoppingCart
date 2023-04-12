import React from "react";
import { Button, Card } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCardContext";
import FromatCurrency from "./FormatCurrency";

const StoreItems = ({ name, id, price, imgUrl }) => {
  const {
    getItemsQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeItemsFromCart,
  } = useShoppingCart();
  const quantity = getItemsQuantity(id);
  return (
    <Card className="h-100">
      <Card.Img
        src={imgUrl}
        variant="top"
        style={{ height: "200px", objectFit: "cover" }}
      ></Card.Img>
      <Card.Body>
        <Card.Title className="d-flex justify-content-between  align-items-center">
          <span className="fs-2">{name}</span>
          <span className="text-muted me-2">{FromatCurrency(price)}</span>
        </Card.Title>
        <div>
          {quantity === 0 ? (
            <Button className="w-100" onClick={() => increaseCartQuantity(id)}>
              Add To Card
            </Button>
          ) : (
            <div
              className="d-flex g-5 align-items-center flex-column"
              style={{ gap: "0.5rem" }}
            >
              <div
                className="d-flex justify-content-center align-items-center"
                style={{ gap: "0.7rem" }}
              >
                <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
                <span className="fs-3">{quantity} In Card</span>
                <Button onClick={() => increaseCartQuantity(id)}>+</Button>
              </div>
              <div>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => removeItemsFromCart(id)}
                >
                  Remove
                </Button>
              </div>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default StoreItems;
