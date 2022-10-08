import React from "react";
import Item from "./Item";

const ListaColores = ({ arregloColores, borrarColor }) => {
  return (
    <div className="d-flex justify-content-around">
      {arregloColores.map((color, posicion) => (
        <Item
          key={posicion}
          nombreColor={color}
          borrarColor={borrarColor}
        ></Item>
      ))}
    </div>
  );
};

export default ListaColores;
