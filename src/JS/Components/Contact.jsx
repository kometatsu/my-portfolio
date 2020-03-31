import React, { Component } from "react";
import "../../CSS/Contact.css";

class Contact extends Component {
  render() {
    return (
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-12">
            <div class="text-center">
              <h1 className="font-family">Contact</h1>
              <p class="mx-auto section-subtitle mt-3">
                お気軽にお問い合わせください。
              </p>
            </div>
          </div>
        </div>
        <div class="row mt-5">
          <div class="col-lg-6 mt-5 mb-5">
            <div class="text-center">
              <div>
                <i class="fa fa-phone-square fa-4x fa-fw "></i>
              </div>
              <div class="mt-3">
                <h5 class="mb-0 contact_detail-title font-family">
                  Phone Number
                </h5>
                <p>
                  <a href="tel:08042622318">080-4262-2318</a>
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-6 mt-5 mb-5">
            <div class="text-center">
              <div>
                <i class="fa fa-envelope-square fa-4x fa-fw "></i>
              </div>
              <div class="mt-3">
                <h5 class="mb-0 contact_detail-title font-family">Email</h5>
                <p>
                  <a href="mailto:kometatsu923&#64;gmail.com">メールを開く</a>
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-6 mt-5 mb-5">
            <div class="text-center">
              <i class="fa fa-twitter-square fa-4x fa-fw "></i>
              <div class="mt-3">
                <h5 class="mb-0 contact_detail-title font-family">Twitter</h5>
                <p>
                  <a
                    href="https://twitter.com/kome23_t"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Twitterページへ
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-6 mt-5 mb-5">
            <div class="text-center">
              <i class="fa fa-facebook-square fa-4x fa-fw "></i>
              <div class="mt-3">
                <h5 class="mb-0 contact_detail-title font-family">Facebook</h5>
                <p>
                  <a
                    href="https://www.facebook.com/tatsuya.yonehiro"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Facebookページへ
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Contact;
