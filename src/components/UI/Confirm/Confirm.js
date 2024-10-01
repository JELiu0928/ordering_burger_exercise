import React from 'react';
import Backdrop from "../Backdrop/Backdrop";
import ConfirmCss from './Confirm.module.css';
// buggggggggggggggggg：關閉Comfirm框要點取消或backdrop，現在點哪邊都會關閉
const Confirm = (props) => {
    return (
        // <Backdrop onClick={(e)=>{props.onCancel(e)}} className={`${ConfirmCss.confirmOuter} ${ConfirmCss.backdrop}`}>
         <Backdrop onClick={(e)=>{props.onCancel(e)}} className={ConfirmCss.confirmOuter}> 
            <div className={ConfirmCss.confirm}>
                <p className={ConfirmCss.confirmText}>{props.text}</p>
                <div>
                    <button onClick={(e)=>{props.onCancel(e)}}
                        className={ConfirmCss.cancel}>取消</button>
                    <button onClick={(e)=>{props.onOk(e)}}
                        className={ConfirmCss.ok}>確認</button>
                </div>
            </div>
        </Backdrop>
    );
};

export default Confirm;
