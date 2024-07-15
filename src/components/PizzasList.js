import React from "react";
import Pizza from "./Pizza";

export default function PizzasList({ pizzasList }) {
  return (
    <ul className="pizzas">
      {pizzasList.map((pizza) => (
        <Pizza key={pizza.name} pizza={pizza} />
      ))}
    </ul>
  );
}
