import React, { useState } from "react";
import logo from "./logo.svg";
import { motion } from "framer-motion";

import "./App.css";
const list = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 }
};

const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 }
};

function App() {
    return (
        <div className="App">
            <div className="menu">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>Karl</h1>
            </div>
            <motion.ul
                className="portfolio-links"
                initial="hidden"
                animate="visible"
                variants={list}
            >
                {[1, 2, 3].map(element => (
                    <motion.li
                        drag
                        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                        dragElastic={0.9}
                        variants={item}
                        key={element}
                    >
                        {element}
                    </motion.li>
                ))}
            </motion.ul>
        </div>
    );
}

export default App;
