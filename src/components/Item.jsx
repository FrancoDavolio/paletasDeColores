import React from "react";
import { Button, Card } from "react-bootstrap";

const Item = ({ nombreColor, borrarColor }) => {
  return (
    <Card
      className="my-5"
      style={{ width: "8.4rem"}}
    >
      <Card.Body className="text-center">
        <div className="cuadrado" style={{background:nombreColor}}></div>
        <Card.Title>{nombreColor}</Card.Title>
        <Button
          variant="outline-danger"
          onClick={() => {
            borrarColor(nombreColor);
          }}
        >
          Borrar
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Item;
