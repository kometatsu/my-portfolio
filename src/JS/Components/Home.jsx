import React, { Component } from "react";
import "../../CSS/Home.css";

class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="home-wrapper font-family d-flex justify-content-center">
              <h1>Welcome to Tatsuya's Portfolio Website</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
