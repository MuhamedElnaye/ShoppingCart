import React from "react";
import { Button, Stack } from "react-bootstrap";
import storeItems from "../data/StoreItems.json";
import FromatCurrency from "./FormatCurrency";
import { useShoppingCart } from "../context/ShoppingCardContext";
const CartItem = ({ id, quantity }) => {
  const { removeItemsFromCart } = useShoppingCart();
  const item = storeItems.find((i) => i.id === id);
  if (item == null) return null;
  return (
    <Stack direction="horizontal" gap={3} className="d-flex align-items-center">
      <img
        src={item.imgUrl}
        alt="product-img"
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
      />
      <div className="me-auto">
        <div>
          {item.name}
          {"  "}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: "0.65rem" }}>
              X{quantity}
            </span>
          )}
          <div className="text-muted" style={{ fontSize: "0.75rem" }}>
            {FromatCurrency(item.price)}
          </div>
        </div>
      </div>
      <div className="fs">{FromatCurrency(item.price * quantity)}</div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeItemsFromCart(id)}
      >
        &times;
      </Button>
    </Stack>
  );
};

export default CartItem;
