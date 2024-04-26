import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  // const x="rahul"
  return (
    <div className="container">
      <Header />
      <Menu />

      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  return (
    <div className="menu">
      <h2>Our Menu</h2>
      <Pizza
        name="Pizza Prosciutto"
        ingredient="Tomato, mozarella, and pepperoni"
        photoName="pizzas/funghi.jpg"
        price={399}
      />
      <Pizza
        name="Pizza Prosciutto"
        ingredient="Tomato, mozarella, and pepperoni"
        photoName="pizzas/funghi.jpg"
        price={399}
      />
      {/* <Pizza/>
    <Pizza/> */}
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  console.log(hour);
  const openHour = 12;
  const closeHour = 22;
  hour >= openHour && hour <= closeHour
    ? alert("We are open")
    : alert("we are closed");
  return (
    <footer className="footer">
      {new Date().toLocaleTimeString()}. We are currently open
    </footer>
  );
}

//never nest function declarations
function Pizza(props) {
  const style = {
    color: "green",
    fontSize: "12 px",
    textTransform: "uppercase",
  };
  return (
    <div className="pizza">
      <img src={props.photoName} />
      <div>
        <h3 style={style}>{props.name}</h3>
        <p>{props.ingredient}</p>
        <span>{props.price}</span>
      </div>

      
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); //render twice

 