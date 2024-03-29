import React from "react";
import Main from "./Main";
// import Header from "./Header";
// import  Footer from "./Footer";
import Counter from "./Counter";
export default function MainApp() {
    return (
        <div className="App">
            
            <div className="main">
                <Main />
            </div>
            <div className="counter">
                <Counter />
            </div>

        </div>
    );
}