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
import DoneTasks from "./pages/DoneTasks";
import UnDoneTasks from "./pages/UnDoneTasks";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<CardContainer />} />
        <Route path="/DoneTasks" element={<DoneTasks />} />
        <Route path="/UnDoneTasks" element={<UnDoneTasks />} />
      </Routes>
    </>
  );
}

export default App;
