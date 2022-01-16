import "./App.css";
import "@material-tailwind/react/tailwind.css";
import { CardContainer } from "./componnets/CardContainer";
import Header from "./componnets/Header";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";

import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<CardContainer />} />
        <Route path="/about-us" element={<AboutUs/>} />
      
      </Routes>
    </>
  );
}

export default App;
