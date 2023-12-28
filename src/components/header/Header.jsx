import React from "react";
import "./Header.scss";
// import "./Backtop.jsx";

import { Logo } from "../../assets/images";

function Header() {
  return (
    <header>
      <nav>
        <div className="container">
          <div className="nav-items">
            <img src={Logo} alt="img" />
            <div className="nav-item">
              <a href="#">Продукция</a>
              <a href="#">Сертификаты</a>
              <a href="#">Наша команда</a>
              <a href="#">О нас</a>
              <a href="#">Новости</a>
              <a href="#">Вакансии</a>
              <a href="#">Контакты</a>
            </div>
            <div className="btn-ham">
              <button>
                <p>RU</p>
                <p>|</p>
                <p>EN</p>
              </button>
              <div className="hamburger">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  // style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"
                >
                  <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;

// DARK MODE

// toggleDarkMode = () => {
//   this.setState({
//     darkMode: !this.state.darkMode,
//   });
//   console.log(this.state.darkMode);
// };

// BACKTOP

// handleBacktop = () => {
//   window.scrollTo({
//     top: 0,
//     behavior: "smooth",
//   });
// };
