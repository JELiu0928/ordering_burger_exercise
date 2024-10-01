import React, {useContext, useState}  from 'react'
import Backdrop from '../../UI/Backdrop/Backdrop'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons/faTrash'
import CartDetailsCss from './CartDetails.module.css'
import CartContext from "../../../store/cart-context";
import Meal from '../../Meals/Meal/Meal'
import Confirm from '../../UI/Confirm/Confirm'


const CartDetails = (props) => {
    const ctx = useContext(CartContext);
    const [showConfirm,setShowConfirm] = useState(false)
    const clearCancelHandler = (e)=>{
        console.log('Cancel event',e.target)
        // 防止冒泡把購物車也關閉
        e.stopPropagation();
        setShowConfirm(false);
    }
    const clearOkHandler = (e)=>{
        console.log('Ok event',e.target)

        e.stopPropagation();
        // 點確認後清除購物車
        // useState版
        // ctx.clearCart();
        // useReducer版
        ctx.cartDispatch({type:'CLEAR'})
        // setShowConfirm(false);
        // props.setShowDetails(false)

    }
    return (
        <Backdrop> 
            {showConfirm && <Confirm text={"確認清空購物車嗎？"}
                    onOk={clearOkHandler}
                    onCancel={clearCancelHandler}
                     />}

            {/* 將白色購物車部分停止冒泡 */}
            <div onClick={e=>e.stopPropagation()} className={CartDetailsCss.cartDetails}>
                <header className={CartDetailsCss.header}>
                    <h2 className={CartDetailsCss.title}>購物車</h2>
                    <div onClick={()=>{setShowConfirm(true)}} className={CartDetailsCss.clear}><FontAwesomeIcon icon={faTrash}/>
                        <span>清空購物車</span>
                    </div>
                </header>
                <div className={CartDetailsCss.mealList}>
                {
                    ctx.items.map((item)=> <Meal noDesc key={item.id} meal={item}/>)
                }
                </div>
            </div>

        </Backdrop> 

  )
}

export default CartDetails