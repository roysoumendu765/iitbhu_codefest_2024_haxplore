import React from "react";
import Main from "./Main";
import List from "./List";
export default function MainApp() {
    return (
        <div className="App">
            <div className="main">
                <Main />
            </div>
            {/* <List idnum="123456789123"/> */}
        </div>
    );
}