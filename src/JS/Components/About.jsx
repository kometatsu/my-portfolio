import React, { Component } from "react";
import "../../CSS/About.css";
import "../../CSS/fa-social-color.css";
import icon from "../../images/icon.jpeg";

class About extends Component {
  render() {
    return (
      <div className="container">
        <div class="row">
          <div class="text-center col-lg-12">
            <h1 className="font-family">About Me</h1>
          </div>
        </div>
        <div className="row">
          <div className="text-center mt-4 mb-4">
            <img src={icon} alt="" class="about-img" width="500px" />
          </div>
        </div>
        <div className="row">
          <div className="career1 col-lg-12 mt-4 mb-4">
            <table>
              <tr>
                <td>Name</td>
                <th>　米広　達哉　(Tatsuya Yonehiro)</th>
              </tr>
              <tr>
                <td>University</td>
                <th>　IPU環太平洋大学　体育学部　体育学科</th>
              </tr>
              <tr>
                <td>Birthday</td>
                <th>　1998/09/23</th>
              </tr>
            </table>
          </div>
          <div className="career2 col-lg-12 mt-4 mb-4">
            <ul>
              <li>2017/03　広島県立広島観音高等学校卒業</li>
              <li>2017/04　IPU環太平洋大学　体育学部　体育学科　入学</li>
              <li>2019/11　MOS Excel 2016 取得</li>
              <li>2019/12　プログラミング独学を始める</li>
              <li>2020/01　ITパスポート　取得</li>
              <li>2021/03　IPU環太平洋大学　体育学部　体育学科　卒業見込み</li>
            </ul>
          </div>
          <div className="career3 col-lg-12 mt-4 mb-4">
            <p>
              私立大学体育学部の３年生。小学校1年から大学3年まで１４年間サッカー一筋でした。
            </p>
            <p>
              就活開始をきっかけに、Web系のプログラミングに興味を持ち、2019年12月より、プログラミング学習を開始。
            </p>
            <p>
              プログラミングで市場価値を高めるために必死に勉強中です。フロントエンドエンジニアを目指しています。
            </p>
            <p>サッカー、LDH、HIPHOP、映画、読書、ファッションが好き</p>
          </div>
          <div className="career4 col-lg-12 mt-4 mb-4">
            <div class="text-center col-lg-12">
              <h1 className="font-family">Skill</h1>
            </div>
            <div className="text-center mt-4 mb-4">
              <p>
                HTML/CSS/Bootstrap/JavaScript/jQuery/React/ReactRouter/Node.js/Git
              </p>
            </div>
          </div>
          <div className="career5 col-lg-12 mt-4 mb-4">
            <div class="text-center col-lg-12">
              <h1 className="font-family">SNS</h1>
            </div>
            <div className="d-flex justify-content-around mt-4 mb-4">
              <a
                href="https://twitter.com/kome23_t"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fa fa-twitter-square fa-4x fa-fw "></i>
              </a>
              <a
                href="https://www.facebook.com/tatsuya.yonehiro"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fa fa-facebook-square fa-4x fa-fw "></i>
              </a>
              <a
                href="https://github.com/kometatsu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fa fa-github-square fa-4x fa-fw "></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default About;
