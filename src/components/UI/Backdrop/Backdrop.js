import React from 'react';
import BackdropCss from './Backdrop.module.css';
import ReactDOM from "react-dom";

// 獲取遮罩的root
const backdropRoot = document.getElementById('backdrop-root');
// createPortal允許將子元素渲染到 DOM 的不同部分(root以外)。
// 把children(jsx)傳到DOM節點(#backdrop-root)
// createPortal(children, domNode, key?)
const Backdrop = (props) => {
    return ReactDOM.createPortal(<div 
        {...props}
        className={`${BackdropCss.Backdrop} ${props.className !== undefined ? props.className : '' }`}>
        {props.children}
    </div>, backdropRoot);
};

export default Backdrop;
