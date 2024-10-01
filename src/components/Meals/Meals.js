import React from 'react'
import Meal from './Meal/Meal'
import MealsCss from './Meals.module.css'
const Meals = (props) => {
    // console.log(props)
    return (
        // 將滾動條設置在Meals而不是body
        <div className={MealsCss.meals}>
            {props.mealsData.map((item)=> <Meal key={item.id} meal={item}/>)}
        </div>
    )
}

export default Meals;