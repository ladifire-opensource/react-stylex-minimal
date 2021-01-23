import React from "react";

import stylex from "@ladifire-opensource/stylex";

const styles = stylex.create({
    root: {
        padding: 30,
        borderRadius: 8,
        border: "1px solid #cbcbcb",
        display: "flex"
    },
    left: {
        flexGrow: 1,
    },
    blinker: {
        marginBottom: 8,
        fontSize: "1.25rem",
        animationName: stylex.keyframes({
            "50%": {
                opacity: 0,
            },
        }),
        animationDuration: "1s",
        animationIterationCount: "infinite",
        animationTimingFunction: "linear",
    },
});

export default () => {
    const [show, setShow] = React.useState(false);
    const handleShow = React.useCallback((event) => {
        const checked = event.target.checked;
        setShow(checked);
    }, [show, setShow]);

    return (
        <div className={stylex(styles.root)}>
            <div className={stylex(styles.left)}>
                <div className={stylex(styles.blinker)}>
                    If you see mee blinking, that's mean Stylex keyframes is working!
                </div>
                <label>
                    <input type="checkbox" value={show} onChange={handleShow}/>
                    Dedupe in Stylex
                </label>
            </div>
            <div className={stylex.dedupe(
                {
                    opacity: 0,
                    visibility: "hidden",
                },
                show ? {
                    opacity: 1,
                    visibility: "visible",
                } : null,
            )}>
                Only appear if checkbox selected (for test dedupe)
            </div>
        </div>
    );
};
