import React from "react";
import { Button, Form } from "react-bootstrap";
import Item from "./Item";
import { useState } from "react";

const formulario = () => {
  const [color, setColor] = useState("");
  const [arregloColores, setArregloColores] = useState("");
  

  return (
    <div>
      <h1 className="text-center my-5">Administrar Colores:</h1>
      <Form className="border py-5 px-5">
        <div className="d-flex justify-content-between">
          <div className="cuadrado col-6"></div>
          <Form.Group className="mb-3 col-6">
            <Form.Label htmlFor="disabledTextInput">
              Ingresar un color:
            </Form.Label>
            <Form.Control
              type="color"
              onChange={(e) => setColor(e, target.value)}
              value={color}
            />
          </Form.Group>
        </div>
        <Button className="my-4 col-12" variant="outline-primary" type="submit">
          Guardar
        </Button>
      </Form>
      <Item></Item>
    </div>
  );
};

export default formulario;
