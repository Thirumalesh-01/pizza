import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
const root = ReactDOM.createRoot(document.getElementById("root"));

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
    price: 20,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  // const style1={color:"GREEN",textTransform:"uppercase",fontSize:"32px"}
  const style1 = {};
  return (
    <header style={style1} className="header">
      {" "}
      <h1>SASTRA React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const res = pizzaData.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {res > 0 ? (
        <>
          <p>
            Welcome to the Best Italian cusine, which are made in stove ,warm
            and tasty!! .These are Authentic ,organic 6 creative dishes made with lots of love.
          </p>
          <div className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </div>
        </>
      ) : (
        <p>Currently pizzas are out of stock!!</p>
      )}
    </main>
  );
}
function Pizza({ pizzaObj }) {
  return (
    <div className={`pizza ${pizzaObj.soldOut ? "sold-out": ""}`}>
      <img src={pizzaObj.photoName} alt="spinachi" />
      <div>
        <h1>{pizzaObj.name}</h1>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLDOUT":pizzaObj.price}</span>
      </div>
    </div>
  );
}

function Footer() {
  const current = new Date().getHours();
  const closeHour = 12;
  const isOpen = current >= 12 && current <= 22;

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closing={closeHour} />
      ) : (
        <p>
          YOu Please vist us between {9}.00 to {22}.00{" "}
        </p>
      )}
    </footer>
  );
}

function Order(props) {
  return (
    <div className="order">
      <p>
        We are open untill {props.closing}.00.Come and Visit Us or Order Online
      </p>
      <button className="btn"> Order Now</button>
    </div>
  );
}
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
