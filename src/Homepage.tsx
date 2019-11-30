import React, { useState } from "react";
import { motion } from "framer-motion";
import "./App.css";
import SecondScreen from "./SecondScreen";
const list = {
    visible: { opacity: 1, display: "block" },
    hidden: { opacity: 0, display: "none" }
};

const item = {
    visible: { opacity: 1, height: "75px" },
    hidden: { opacity: 0, height: "200px" },
    opened: { height: "100px" }
};

const Homepage = (props: any) => {
    const [showHistory, setShowHistory] = useState(false);
    const namedFunction = (elzz: any) => console.log(elzz);

    return (
        <motion.ul
            className="portfolio-links"
            initial="hidden"
            animate={props.showList}
            variants={list}
        >
            {["Yes", 4, 3].map(element => (
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
                    onClick={namedFunction}
                >
                    <SecondScreen></SecondScreen>
                </motion.li>
            ))}
        </motion.ul>
    );
};

export default Homepage;
