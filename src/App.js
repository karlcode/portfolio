import React, { useState } from "react";
import logo from "./logo.svg";
import posed from "react-pose";

import "./App.css";

const Sidebar = posed.ul({
    open: {
        x: "0%",
        delayChildren: 0,
        staggerChildren: 50
    },
    closed: { x: "0%", delay: 0, staggerChildren: 30 }
});

const Item = posed.li({
    hoverable: true,
    open: { y: 0, opacity: 1 },
    closed: { y: 20, opacity: 0 },
    hover: {
      scale: 1.2,
      boxShadow: '0px 5px 10px rgba(0,0,0,0.2)'
    },
    init: {
      scale: 1,
      boxShadow: '0px 0px 0px rgba(0,0,0,0)'
    },
});
function App() {
    const [isOpen, setIsOpen] = useState("open");

    return (
        <div className="App">
            <div className="menu">
                <img src={logo} className="App-logo" alt="logo" />

                <button
                    onClick={() =>
                        isOpen === "open"
                            ? setIsOpen("closed")
                            : setIsOpen("open")
                    }
                >
                    {" "}
                    Toggle for List{" "}
                </button>
            </div>

            <Sidebar className="sidebar" pose={isOpen}>
                <Item className="item"> Hello</Item>
                <Item className="item" />
                <Item className="item" />
                <Item className="item" />
                <Item className="item" />
            </Sidebar>
        </div>
    );
}

export default App;
