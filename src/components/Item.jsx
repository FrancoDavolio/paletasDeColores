import React from "react";
import { Button, Card } from "react-bootstrap";

const item = () => {
  return (
    <Card className="my-5 d-flex justify-content-between" style={{ width: "18rem" }}>
      <Card.Img variant="top" type="color" />
      <Card.Body>
        <Card.Title>nombreColor</Card.Title>
        <Button variant="outline-danger">Borrar</Button>
      </Card.Body>
    </Card>
  );
};

export default item;
