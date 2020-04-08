import React, { Component } from "react";
import "../../CSS/Products.css";
import img1 from "../../images/my_portfolio.png";
import img2 from "../../images/quiz_app.png";

class Products extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h1 className="font-family">My Products</h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="d-flex justify-content-center col-lg-6">
            <div className="card" style={{ width: "20rem" }}>
              <img src={img1} className="card-img-top" alt=""></img>
              <div className="card-body">
                <h5 className="card-title">ポートフォリオサイト</h5>
                <p className="card-text">
                  ReactRouterを用いて、こちらのSPAポートフォリオサイトの作成をしました。
                </p>
                <a
                  href="https://kometatsu.github.io/my-portfolio/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  作品へ
                </a>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center col-lg-6">
            <div className="card" style={{ width: "20rem" }}>
              <img src={img2} className="card-img-top" alt=""></img>
              <div className="card-body">
                <h5 className="card-title">JavaScript　クイズアプリ</h5>
                <p className="card-text">
                  HTML
                  、CSS、JavaScriptを用いて、ファッション基礎知識クイズアプリを作成しました。
                </p>
                <a
                  href="https://kometatsu.github.io/quiz-app-JS/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  作品へ
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Products;
