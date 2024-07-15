import React from "react";
import PizzasList from "./PizzasList";

export default function Menu({ pizzasList }) {
  return (
    <div className="menu">
      <h2>Our Menu</h2>
      <PizzasList pizzasList={pizzasList} />
    </div>
  );
}
