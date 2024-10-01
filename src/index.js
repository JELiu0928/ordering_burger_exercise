import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// 設置移動端寬度的適應，使rem單位的元素根據視窗大小自動縮放
// 將1rem設置為1px，窗寬度是 750px，那麼0.1333 * 750px * 1% = 1px
document.documentElement.style.fontSize = 100 / 750 + "vw";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	// <React.StrictMode>
		<App />
	// </React.StrictMode>
);