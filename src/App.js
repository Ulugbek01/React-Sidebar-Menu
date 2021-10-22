import "./App.css";
import NavItem from "./NavItem";

function App() {
  const url =
    "https://images.unsplash.com/photo-1512152272829-e3139592d56f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZmFzdCUyMGZvb2R8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80";
  const name = "logo-brand";
  return <div className="App">{<NavItem url={url} name={name} />}</div>;
}

export default App;
