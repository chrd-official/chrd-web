import React, { useState, useEffect } from "react";
function Header() {
  const [headerBackground, setHeaderBackground] = useState(
    "rgba(0, 0, 0, 0.93)"
  );
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHeaderBackground("rgba(0, 0, 0, 0.7)");
      } else {
        setHeaderBackground("rgba(0, 0, 0, 0.7)");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header style={{ backgroundColor: headerBackground }}>
        <nav>
          <div className="logo">CHRD</div>
          <ul className="nav-links">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#music">Music</a>
            </li>
            <li>
              <a href="#albums">Albums</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
export default Header;
