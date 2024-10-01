import React from 'react'
import CheckoutItemCss from './CheckoutItem.module.css'
import Counter from "../../../UI/Counter/Counter";

const CheckoutItem = (props) => {
    // console.log(props)
    return (
        <div className={CheckoutItemCss.checkoutItem}>
            <div className={CheckoutItemCss.mealImg}>
                <img src={props.meal.img} alt="" />
            </div>
            <div className={CheckoutItemCss.desc}>
                <h2 className={CheckoutItemCss.title}> 
                    <div className={CheckoutItemCss.priceOuter}>
                        <Counter meal={props.meal}/>
                        <div className={CheckoutItemCss.price}>{props.meal.price * props.meal.amount}</div>
                    </div>
                </h2>
            </div>
        </div>
    )
}

export default CheckoutItem;