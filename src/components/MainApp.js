import React from "react";
import Main from "./Main";
import Header from "./Header";
import  Footer from "./Footer";
import Counter from "./Counter";
import { Link } from "react-router-dom";
export default function MainApp() {
    return (
        <div className="App">
            <div className="header">
                <Header />
            </div>
            <div className="main">
                <Main />
            </div>
            <div className="buy-button">
                <Link to="/buy"></Link>
            </div>
            <div className="counter">
                <Counter />
            </div>
            <div className="footer">
                <Footer />
            </div>
        </div>
    );
}