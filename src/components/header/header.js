import React from "react";
import "../header/header.css";
import Logo from "../../assets/images/logo-corebiz.png";
import Cart from "../../assets/images/cart.png";
import Search from "../../assets/images/search.png";
import User from "../../assets/images/user.png";


// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    return (
        <div className="total-area">
            <div className="top-menu-mobile">
                <div className="menu-mobile">
                    <img className="logo" src={Logo} alt="logo"/>
                    <img className="cart" src={Cart} alt="cart"/>
                </div>

                <div className="search">
                <input placeholder = "O que você está procurando?"/>
                <img src={Search} alt="search" />
                </div>

                <div className="user" />
                <img src={User} alt="user" />
                <h2 className="login">Minha Conta</h2>
                
            </div>
        </div>
    );
}
