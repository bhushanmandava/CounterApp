import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react'; // Import useState hook
import './main.css'; // Import custom CSS for styles
function App() {
    const [count, setCount] = useState(0); // Initialize counter state
    // Functions to update the counter
    const increment = () => setCount(count + 1);
    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };
    return (_jsx("div", { className: "App", children: _jsxs("header", { className: "App-header", children: [_jsx("h1", { children: "Counter App" }), _jsxs("div", { className: "button-container", children: [_jsx("button", { className: "button decrement", onClick: decrement, children: "-" }), _jsx("div", { className: "counter-display", children: _jsx("p", { children: count }) }), _jsx("button", { className: "button increment", onClick: increment, children: "+" })] })] }) }));
}
export default App;
