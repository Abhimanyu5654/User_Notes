import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/common/Navbar";
import Home from "./components/pages/Home";
import Create from "./components/cruds/Create";
import CrudTable from "./components/cruds/CrudTable";
import CrudDetails from "./components/cruds/CrudDetails";
import CrudEdit from "./components/cruds/CrudEdit";
import CrudDelete from "./components/cruds/CrudDelete";
import Footer from "./components/common/Footer";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/api/" element={<Home />} />
          <Route exact path="/cruds" element={<CrudTable />} />
          <Route exact path="/cruds/new" element={<Create />}/>
          <Route exact path="/cruds/:_id" element={<CrudDetails/>} />
          <Route exact path="/cruds/:_id/edit" element={<CrudEdit />} />
          <Route exact path="/cruds/:_id/delete" element={<CrudDelete />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
export default App;
