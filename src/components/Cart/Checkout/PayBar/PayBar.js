import React from 'react'
import PayBarCss from './PayBar.module.css'

const PayBar = (props) => {
    const showCheckoutHandler = ()=>{

    }
  return (
    <div className={PayBarCss.Cart} >
       
         <p className={PayBarCss.totalPrice}>{props.totalPrice}</p>

        <button onClick={showCheckoutHandler}
            className={PayBarCss.button}>付款</button>
    </div>
  )
}

export default PayBar;