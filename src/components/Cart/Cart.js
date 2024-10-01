import React, {useContext, useEffect, useState} from 'react';
import CartCss from './Cart.module.css';
import iconImg from '../../asset/bag.png';
import CartContext from "../../store/cart-context";
import CartDetails from "./CartDetails/CartDetails";
import Checkout from "./Checkout/Checkout";

const Cart = () => {
    // console.log("components渲染")
    const ctx = useContext(CartContext);
    // 控制購物車出現
    const [showDetails,setShowDetails] = useState(false);
    // 控制結帳畫面出現
    const [showCheckout,setShowCheckout] = useState(false);

    // 如果沒寫在useEffect中會發生Too many re-renders.
    useEffect(()=>{
        if(ctx.totalAmount === 0) {
            setShowDetails(false)
            setShowCheckout(false)
        }
    },[ctx])

    const toggleDetailsHandler = ()=>{
        if(ctx.totalAmount === 0) {
        // if(ctx.items.length == 0) {
            setShowDetails(false)
            return
        }
        // 當購物車出現時傳參是true，點一下就變false
        // 此時點任何地方都會關起來，因為事件冒泡
        setShowDetails(preValue => !preValue)
    }
    
    const showCheckoutHandler = ()=>{
        if(ctx.totalAmount === 0) return
        setShowCheckout(true)
    }
    const hideCheckoutHandler = ()=>{
        if(ctx.totalAmount === 0) return
        setShowCheckout(false)
    }
    return (
        <div className={CartCss.Cart} onClick={toggleDetailsHandler}>
            {showCheckout && <Checkout onHide={hideCheckoutHandler}/>}
            {/* 購物車不等於0才可以出現 */}
            {/* {showDetails && <CartDetails setShowDetails={setShowDetails}/>}  */}
            {showDetails && <CartDetails/>} 
            <div className={CartCss.Icon}>
                <img src={iconImg}/>
                {ctx.totalAmount === 0 ? null : <span className={CartCss.TotalAmount}>{ctx.totalAmount}</span>}
            </div>

            {ctx.totalAmount === 0 ? <p className={CartCss.noMeal}> 未選擇商品</p> : <p className={CartCss.Price}>{ctx.totalPrice}</p>}

            <button onClick={showCheckoutHandler}
                className={`${CartCss.button} ${ctx.totalAmount === 0 ? CartCss.disabled : null}`}>去结算</button>
        </div>
    );
};

export default Cart;
