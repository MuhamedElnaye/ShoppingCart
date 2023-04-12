import React from "react";
import { Col, Row } from "react-bootstrap";
import storeItems from "../data/StoreItems.json";
import StoreItems from "./StoreItems";

const Store = () => {
  return (
    <>
      <h2>Store</h2>
      <Row md={2} xs={1} lg={3} className="g-3">
        {storeItems.map((item) => (
          <Col key={item.id} className="col-">
            <StoreItems {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Store;
