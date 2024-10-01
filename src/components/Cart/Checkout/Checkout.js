import React, { useContext } from 'react';
import ReactDOM from "react-dom";
import CheckoutCss from "./Checkout.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import CartContext from '../../../store/cart-context';
import CheckoutItem from './CheckoutItem/CheckoutItem';
import PayBar from './PayBar/PayBar';

const checkoutRoot = document.getElementById('checkout-root');

const Checkout = (props) => {
    const ctx = useContext(CartContext)

    return ReactDOM.createPortal(
        <div className={CheckoutCss.checkout}>
            <div className={CheckoutCss.close}>
                <FontAwesomeIcon
                    onClick={() => props.onHide() }
                    icon={faXmark}/>
            </div>
            <div className={CheckoutCss.mealsDesc}>
                <header className={CheckoutCss.header}>
                    <h2 className={CheckoutCss.title}>商品詳情</h2>
                </header>
                <div className={CheckoutCss.meals}>
                   {ctx.items.map(item=> <CheckoutItem key={item.id} meal={item}/>)}
                </div>
                <footer className={CheckoutCss.footer}>
                    <p className={CheckoutCss.totalPrice}>{ctx.totalPrice}</p>
                </footer>
            </div>
            <PayBar totalPrice={ctx.totalPrice}/>
        </div>,
    checkoutRoot);
};

export default Checkout;
