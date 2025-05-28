import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <section className="footer">
      <div className="one">
        <h2 className="logo">Logo</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
          Excepturi odit <br /> soluta nulla dolorum eligendi.
        </p>
      </div>
      <div className="two">
        <h1 className="logo">Resources</h1>
        <p>Community</p>
        <p>events</p>
        <p>help center</p>
        <p>patners</p>
      </div>
      <div className="three">
        <h1 className="logo">products</h1>
        <p>integrations</p>
        <p>solution</p>
        <p>help center</p>
        <p>patners</p>
      </div>
      <div className="four">
        <h1 className="logo">get email notifications</h1>
        <p>
          Lorem ipsum, dolor sit amet <br /> consectetur adipisicing elit.{" "}
          <br />
          Animi, soluta?
        </p>
        <input type="text" placeholder="enter email" />
        <button className="submit">submit</button>
      </div>
    </section>
  );
};

export default Footer;
