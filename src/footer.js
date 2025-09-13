import React from "react";
import "./footer.css";
function Footer() {
  return (
    <>
      <footer style={{ width: "100%" }}>
        <div className="container">
          <p>&copy; 2025 CHRD. All Rights Reserved</p>
          <div className="social">
            <a href="https://www.instagram.com/chrdofficial/">
              <img
                style={{ width: "40px", height: "40px" }}
                src={`${process.env.PUBLIC_URL}/insta.png`}
              ></img>
            </a>
            <a href="https://www.tiktok.com/@chrdofficial">
              <img
                style={{ width: "40px", height: "40px" }}
                src={`${process.env.PUBLIC_URL}/tiktok.png`}
              ></img>
            </a>
            <a href="https://x.com/CHRDOFFICIAL">
              <img
                style={{ width: "40px", height: "40px" }}
                src={`${process.env.PUBLIC_URL}/X.png`}
              ></img>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
