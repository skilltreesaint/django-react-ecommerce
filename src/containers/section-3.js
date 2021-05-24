import React from "react";
import { Container } from "reactstrap";
import "../assets/css/section-3.css";

export default () => (
  <section class="section">
    <Container>
      <div class="section_title">
        <h1> Discounts</h1>
        <h4> up to 80%</h4>
      </div>
      <div class="section_picture">
        <img
          src="https://i.pinimg.com/originals/a1/50/22/a15022580750d182ce23b0184bea52ff.jpg"
          alt=""
        />
        <h3>discover the latest offers</h3>
      </div>
      <div className="social-icons">
        <i className="fab fa-facebook-f" />
        <i className="fab fa-twitter" />
        <i className="fab fa-google" />
        <i className="fab fa-linkedin-in" />
      </div>
    </Container>
  </section>
);
