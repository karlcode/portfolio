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
    hidden: { opacity: 0, x: -100 },
    opened: { height: "100px" }
};

function App() {
    const [isVisible, setVisible] = useState(false)
    return (
        <div className="App">
            <div className="menu">
                {/* <img src={logo} className="App-logo" alt="logo" /> */}
                <motion.div onMouseEnter={() => setVisible(true)}>
                    <h1>Karl</h1>
                </motion.div>
                <motion.ul
                    className="portfolio-links"
                    initial="hidden"
                    animate={{ opacity: isVisible ? "1" : 0}}
                    variants={list}
                >
                    {[1, 2, 3].map(element => (
                        <motion.li
                            drag
                            dragConstraints={{
                                left: 0,
                                right: 0,
                                top: 0,
                                bottom: 0
                            }}
                            dragElastic={0.9}
                            variants={item}
                            key={element}
                            whileHover="opened"
                        >
                            {element}
                        </motion.li>
                    ))}
                </motion.ul>
            </div>
        </div>
    );
}

export default App;
