import React, { useContext } from 'react'
import CounterCss from './Counter.module.css'
// 引入FontAwesom
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus, faMinus} from "@fortawesome/free-solid-svg-icons";
// 引入Context
import CartContext from '../../../store/cart-context';
const Counter = (props) => {
    // ctx為cartcontext縮寫
    const ctx = useContext(CartContext)
    const addItemHandler = ()=>{
        // console.log("我是ctx",ctx)
        // console.log("我是props",props)
        // useState版
        // ctx.addItem(props.meal)
        // useReducer版
        ctx.cartDispatch({type:'ADD',meal:props.meal})

    }

    const removeItemHandler = ()=>{
        // useState版
        // ctx.removeItem(props.meal)
        // useReducer版
        ctx.cartDispatch({type:'REMOVE',meal:props.meal})
        
    }
    return (
        <div className={CounterCss.counter}>
            {(props.meal.amount && props.meal.amount > 0) ? (
                <>
                    <button className={CounterCss.minus}
                            onClick={removeItemHandler}>
                        <FontAwesomeIcon icon={faMinus} />
                    </button>
                    <span className={CounterCss.count}>{props.meal.amount}</span>
                </>
            ) : null}
            <button className={CounterCss.plus}
                onClick={addItemHandler}>
                <FontAwesomeIcon icon={faPlus}/>
            </button>
            
        </div>
    )
}

export default Counter;