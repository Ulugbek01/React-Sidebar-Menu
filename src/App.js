import "./App.css";
import ProductItem from "./ProductItem";
import ProductNavbar from "./ProductNavbar";
const data = [
  {
    id: 1,
    url: "https://i.hizliresim.com/jj82aye.jpg",
    name: "Lavash mini",
    category: "Lavash",
    price: "18,000 UZS",
    optional: "Kichkina lavash, bla bla",
  },
  {
    id: 2,
    url: "https://i.hizliresim.com/jj82aye.jpg",
    name: "ChizburgerMax",
    category: "Burger",
    price: "23,000 UZS",
    optional: "Kichkina lavash, bla bla",
  },
  {
    id: 3,
    url: "https://i.hizliresim.com/jj82aye.jpg",
    name: "Lavash Max",
    category: "Lavash",
    price: "8,000 UZS",
    optional: "Kichkina lavash, bla bla",
  },
  {
    id: 4,
    url: "https://i.hizliresim.com/jj82aye.jpg",
    name: "Lavash S Sirom",
    category: "Lavash",
    price: "21,000 UZS",
    optional: "Kichkina lavash, bla bla",
  },
  {
    id: 5,
    url: "https://i.hizliresim.com/jj82aye.jpg",
    name: "Burger mini",
    category: "Burger",
    price: "11,000 UZS",
    optional: "Kichkina lavash, bla bla",
  },
  {
    id: 6,
    url: "https://i.hizliresim.com/jj82aye.jpg",
    name: "Lavash mini",
    category: "Lavash",
    price: "18,000 UZS",
    optional: "Kichkina lavash, bla bla",
  },
  {
    id: 7,
    url: "https://i.hizliresim.com/jj82aye.jpg",
    name: "Coca-Cola 1,5",
    category: "Ichimlik",
    price: "34,000 UZS",
    optional: "Kichkina lavash, bla bla",
  },
  {
    id: 8,
    url: "https://i.hizliresim.com/jj82aye.jpg",
    name: "Burger mini",
    category: "Burger",
    price: "11,000 UZS",
    optional: "Kichkina lavash, bla bla",
  },
  {
    id: 8,
    url: "https://i.hizliresim.com/jj82aye.jpg",
    name: "Lavash mini",
    category: "Lavash",
    price: "18,000 UZS",
    optional: "Kichkina lavash, bla bla",
  },
];

function App() {
  return (
    <div className="container-app">
      {<ProductNavbar />}
      {data.map((value, index) => {
        return <div key={index}>{<ProductItem data={value} />}</div>;
      })}
    </div>
  );
}

export default App;
