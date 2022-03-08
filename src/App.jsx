// import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AddEmployee from "./pages/AddEmployee";
import UpdateEmployee from "./pages/UpdateEmployee";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App-content container my-3">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/addEmployee" element={<AddEmployee />} />
          <Route path="/updateEmployee/:id" element={<UpdateEmployee />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;
