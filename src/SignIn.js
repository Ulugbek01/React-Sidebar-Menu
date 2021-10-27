import React from "react";
import "./SignIn.css";
import imgSignIn from "./assets/sign-in.png";
function SignIn() {
  return (
    <div className="container">
      <div className="sign-in__brand">
        <img src={imgSignIn} alt="signIn-img" />
      </div>
      <div className="user-info">
        <div className="user-info__intro">
          <h2 className="title">Tizimga xush kelibsiz !</h2>
          <p className="sign-in__warning">
            Tizimga kirish uchun, login va parol orqali autentifikatsiya
            jarayonidan o’ting
          </p>
        </div>

        <div className="to-register">
          <form>
            <input
              type="email"
              value="fastfood@fastfood.com"
              name="email"
              className="email"
            />
            <br />
            <input
              type="password"
              name="password"
              className="password"
              placeholder="Parol"
            />
          </form>
        </div>

        <div className="log-in__link">
          <a href="#">Tizimga kirish</a>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
