import React, { Component } from "react";
import { Route } from "react-router-dom";
import Header from "./JS/Components/Header";
import Home from "./JS/Components/Home";
import About from "./JS/Components/About";
import Products from "./JS/Components/Products";
import Contact from "./JS/Components/Contact";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/products" exact component={Products} />
        <Route path="/contact" exact component={Contact} />
      </div>
    );
  }
}

export default App;
