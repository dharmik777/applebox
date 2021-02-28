import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Navbar/Nav";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";



function App() {
  return (
      
    <Router>
      <div>
        <Nav />
        <Route exact path="/" component={Home} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
  
  );
}

export default App;
