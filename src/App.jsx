import React from "react";
import stylex from "@ladifire-opensource/stylex";

import Test from "src/components/Test";

const styles = stylex.create({
    root: {
        backgroundColor: "transparent"
    },
});

export const App = () => {
    return (
        <div className={stylex(styles.root)}>
            <h1>Welcome to Stylex world!</h1>
            <Test/>
        </div>
    );
};
