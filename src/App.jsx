import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./Components/Header";


function App() {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
