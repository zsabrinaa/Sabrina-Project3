import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch} from 'react-router'
import Index from "./pages/Index";
import Navbar from "./components/Nav1";
import Nav2 from "./components/Nav2";
import Footer from "./components/Footer";
import './App.css'

function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <Nav2/>
        <Switch>
          <Route exact path="/" component={Index} />
        </Switch> 
        <Footer/>
      </div>
    </Router>
  );
}
export default App;
