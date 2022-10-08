import { Button, Form } from "react-bootstrap";
import ListaColores from "./ListaColores";
import { useState, useEffect } from "react";

const Formulario = () => {
  const colorLocalStorage =
    JSON.parse(localStorage.getItem("ListaColores")) || [];
  const [color, setColor] = useState("#000000");
  const [arregloColores, setArregloColores] = useState(colorLocalStorage);

  useEffect(() => {
    localStorage.setItem("ListaColores", JSON.stringify(arregloColores));
  }, [arregloColores]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setArregloColores([...arregloColores, color]);
    setColor("");
  };

  const borrarColor = (nombre) => {
    let  arregloModificado = arregloColores.filter((item) => item !== nombre);
    setArregloColores(arregloModificado);
  };

  return (
    <div>
      <h1 className="text-center my-5">Administrar Colores:</h1>
      <Form className="border py-5 px-5" onSubmit={handleSubmit}>
        <div className="d-flex justify-content-between">
          <div className="cuadrado col-6" style={{background:color}}></div>
          <Form.Group className="mb-3 col-6">
            <Form.Label htmlFor="disabledTextInput">
              Ingresar un color:
            </Form.Label>
            <Form.Control
              type="color"
              onChange={(e) => setColor(e.target.value)}
              value={color}
            />
          </Form.Group>
        </div>
        <Button className="my-4 col-12" variant="outline-primary" type="submit">
          Guardar
        </Button>
      </Form>
      <ListaColores
        arregloColores={arregloColores}
        borrarColor={borrarColor}
      ></ListaColores>
    </div>
  );
};

export default Formulario;
