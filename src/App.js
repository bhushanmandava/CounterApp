import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
export default function App() {
    const [count, setCount] = useState(0);
    const inc = () => setCount(count => count + 1);
    const dec = () => setCount(count => count - 1);
    return (_jsxs(_Fragment, { children: [_jsxs("div", { children: [_jsx("button", { onClick: dec, children: "-" }), _jsx("div", { children: count }), _jsx("button", { onClick: inc, children: "+" })] }), _jsx("div", { children: "Hello from hargv" })] }));
}
