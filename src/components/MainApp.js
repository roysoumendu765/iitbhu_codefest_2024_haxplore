import React from "react";
import Main from "./Main";
import CardSection from './CardSection';
export default function MainApp() {
    return (
        <div className="App">
            <div className="main">
                <Main />
                <CardSection />
            </div>
        </div>
    );
}