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
]

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
  // const style = { color: "red", textAlign: "center", fontSize: "4rem" };
  const style = {};
  return (
    <header className="header footer">
      <h1 style={style} className="header1">Fast Pizza in the world</h1>
      <h2 className="our">Our Menu</h2>
      <p className="p">Authantic Italic cuisine. 6 create dishes to choos from .All from our stone oven all organic and all delicious. </p>
    </header>
  );
}
function Menu() {
  // const pizzas=pizzaData;
  // const numPizza=pizzas.length
  return (  
    <main className="menu">
{/* {numPizza > 0 ? (
  <ul className="Pizzas">
    {
      pizzas.map((pizza)=>(
        <Pizza pizzaObj={pizza} key={pizza.name} />
      ))
    }
  </ul>
  )  :null} */}

   
      <div className="first">
      <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, ham, aragula, and burrata cheese"
        photoName="pizzas/spinaci.jpg"
        price={10}
      />    <Pizza
      name="Pizza  Prosciutto"
      ingredients="Tomato, mozarella, ham, aragula, and burrata cheese"
      photoName="pizzas/prosciutto.jpg"
      price={12}
    />
    
    <Pizza
        name="Pizza  Funghi"
        ingredients="Tomato, mozarella, ham, aragula, and burrata cheese"
        photoName="pizzas/funghi.jpg"
        price={14}
        />
    </div>
      <div className="second">

  
       <Pizza
        name="Pizza  Focaccia"
        ingredients="Tomato, mozarella, and pepperoni"
        photoName="pizzas/focaccia.jpg"
        price={22}
      />
       <Pizza
        name="Pizza  Spainaci"
        ingredients="Tomato, mozarella, ham, aragula, and burrata cheese"
        photoName="pizzas/spinaci.jpg"
        price={17}
        
      />
        <Pizza 
        name="Pizza  Salamino  "
        ingredients="Tomato, mozarella, ham, aragula, and burrata cheese"
        photoName="pizzas/salamino.jpg"
        price={13}
        
      />
      </div>
    </main> 
  )
};
function Pizza(pizzaObj) {
  console.log(pizzaObj)
  // if(pizzaObj.soldOut) return null;
  return (
    <li className={`pizza .${pizzaObj.soldOut ? "sold -out ":""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOULD OUT" :pizzaObj.price }</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openhour = 8;
  const closehour = 22;
  const isOpen = hour >= openhour && hour <= closehour;
  console.log(isOpen);
  // if (hour >= openhour && hour <= closehour) alert("We're Currently Open");
  // else alert("Sorry We're Close");
  return (
    
    <footer className="footer">
      {isOpen ? (
        <Order closehour={closehour} openhour={openhour}/>
      ):(
        <p>
          we'r happy to wecome you between  {openhour}:00 and {closehour}:00 
        </p>
      )}
    </footer>
  );
}

function Order({closehour,openhour}){
  return(
    <div className="order">
      <p>
We're open from {openhour}:00 to {closehour}:00 .Come visit us or order online 
      </p>
    <button className="btn">Order</button>

    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
