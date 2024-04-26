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
  const pizzas=pizzaData.length
  return (
    <div className="menu">
      <h2>Our Menu</h2>
      
      {pizzas>0 ? 
      <React.Fragment>
      <p>Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone oven, all organic, all delicious.</p>
      <ul className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizza pizzaObject={pizza} key={pizza.name} />
        ))}
      </ul>
      </React.Fragment>
      :<p>We are still working on menu. Please come back later:)</p>
      }
      {/* <div className="menu">
      <h2>Our Menu</h2>
      {pizzas>0 && <ul className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizza pizzaObject={pizza} key={pizza.name} />
        ))}
      </ul>//:<p>We are still working on menu. Please come back later:)</p>
      } */}

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
  const isOpen=hour >= openHour && hour <= closeHour
    // ? "We are open"
    // : "we are closed";
    // if(!isOpen) return (
    //   <p>Closed</p>
    // )
  return (
    // <footer className="footer">
    //   {isOpen && (
    //     <div className="order">
    //       <p>We are open till {closeHour}:00. Come visit us or order online</p>
    //       <button className="btn">Order</button>
    //     </div>
    //   )}
    // </footer>

    <footer className="footer">
    {isOpen ?(<Order closeHour={closeHour} openHour={openHour}/> ):<p> We are happy to welcome you between {openHour}:00 and {closeHour}:00</p>}
  </footer>
  );
}
// function Order(props){
//   return ((
//     <div className="order">
//       <p>We are open till {props.closeHour}:00. Come visit us or order online</p>
//       <button className="btn">Order</button>
//     </div>
//   ))
// }
function Order({closeHour,openHour}){
  return ((
    <div className="order">
      <p>We are open till {closeHour}:00. Come visit us or order online</p>
      <button className="btn">Order</button>
    </div>
  ))
}
//never nest function declarations
// function Pizza(props) {
//   // const style = {
//   //   color: "green",
//   //   fontSize: "12 px",
//   //   textTransform: "uppercase",
//   // };
//   if(props.pizzaObject.soldOut) return null;
//   return (
//     <li className="pizza">
//       <img src={props.pizzaObject.photoName} alt="pizaa img"/>
//       <div>
//         <h3>{props.pizzaObject.name}</h3>
//         <p>{props.pizzaObject.ingredients}</p>
//         <span>{"$" + props.pizzaObject.price}</span>
//       </div>
//     </li>
//   );
// }
function Pizza({pizzaObject}) {
  // const style = {
  //   color: "green",
  //   fontSize: "12 px",
  //   textTransform: "uppercase",
  // };
  // if(pizzaObject.soldOut) return null;
  return (
    <li className={`pizza ${pizzaObject.soldOut?'sold-out':''}`}>
      <img src={pizzaObject.photoName} alt="pizaa img"/>
      <div>
        <h3>{pizzaObject.name}</h3>
        <p>{pizzaObject.ingredients}</p>
        <span>{(pizzaObject.soldOut)?"Sold Out":"$" + pizzaObject.price}</span>
      </div>
    </li>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); //render twice
