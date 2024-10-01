import React from 'react'
import MealCss from './Meal.module.css';
import Counter from '../../UI/Counter/Counter'
const Meal = (props) => {
    // let {title,desc,price,img} = props.meal
    // console.log(props.meal)
    return (
        <div className={MealCss.meal}>
            <div className={MealCss.imgBox}>
                <img src={props.meal.img} alt="漢堡"/>
            </div>
            <div className={MealCss.descBox}>
                <h2 className={MealCss.title}>{props.meal.title}</h2>
                {props.noDesc ? null : <p className={MealCss.desc}>{props.meal.desc}</p>}
                <div className={MealCss.priceWrap}>
                    <span className={MealCss.price}>{props.meal.price}</span>
                    <Counter meal={props.meal}/>
                </div>
            </div>
        </div>
    )
}

export default Meal;