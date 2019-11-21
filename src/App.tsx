import React, { useState } from "react";
import logo from "./logo.svg";
import { motion } from "framer-motion";

import "./App.css";
import SecondScreen from "./SecondScreen";
import Homepage from "./Homepage";

const list = {
    visible: { opacity: 1, display: "block" },
    hidden: { opacity: 0, display: "none" }
};

function App() {
    const [showList, setVisible] = useState("hidden");
    return (
        <div className="App">
            <div className="menu">
                {/* <img src={logo}  className="App-logo" alt="logo" /> */}
                <motion.div
                    onHoverStart={() => setVisible("visible")}
                    // onHoverEnd={() => setVisible("hidden")}
                >
                    <h1>Karl</h1>
                </motion.div>
            </div>
            <Homepage showList={showList}></Homepage>
        </div>
    );
}

export default App;
