import React, { useState,useReducer } from 'react'
import Meals from './components/Meals/Meals'
import CartContext from './store/cart-context'
import FilterMeals from './components/FilterMeals/FilterMeals'
import Cart from './components/Cart/Cart'
// import Confirm from './components/UI/Confirm/Confirm'
// 模擬資料庫存儲數據
const MEALS_DATA = [
    {
        id: '1',
        title: '漢堡',
        desc: '百分百純牛肉配上爽脆酸瓜洋蔥粒與美味番茄醬經典滋味讓你無法抵擋！ ',
        price: 50,
        img: `${process.env.PUBLIC_URL}/img/meals/1.png`
    },
    {
        id: '2',
        title: '雙層吉士漢堡',
        desc: '百分百純牛肉與雙層香軟芝，加上鬆軟麵包及美味醬料，誘惑無人能擋！ ',
        price: 99,
        img: `${process.env.PUBLIC_URL}/img/meals/2.png`
    },
    {
        id: '3',
        title: '巨無霸漢堡',
        desc: '兩塊百分百純牛肉，搭配生菜、洋蔥等新鮮食材，口感豐富，極緻美味！ ',
        price: 128,
        img: `${process.env.PUBLIC_URL}/img/meals/3.png`
    }, {
        id: '4',
        title: '麥辣雞腿漢堡',
        desc: '金黃脆辣的外皮，鮮嫩幼滑的雞腿肉，多重滋味，一次打動您挑剔的味蕾！ ',
        price: 108,
        img: `${process.env.PUBLIC_URL}/img/meals/4.png`
    }, {
        id: '5',
        title: '板燒雞腿堡',
        desc: '原塊去骨雞排嫩滑多汁，與翠綠新鮮的生菜和香濃燒雞醬搭配，口感豐富！ ',
        price: 118,
        img: `${process.env.PUBLIC_URL}/img/meals/5.png`
    }, {
        id: '6',
        title: '麥香雞',
        desc: '清脆爽口的生菜，金黃酥脆的雞肉。營養配搭，好滋味的健康選擇！ ',
        price: 99,
        img: `${process.env.PUBLIC_URL}/img/meals/6.png`
    }, {
        id: '7',
        title: '吉士漢堡',
        desc: '百分百純牛肉與香軟起司融為一體搭配美味番茄醬豐富口感一咬即刻湧現！ ',
        price: 68,
        img: `${process.env.PUBLIC_URL}/img/meals/7.png`
    }
];

const cartReducer = (state,action)=>{
    console.log("action",action)
    // 淺複製購物車
    let newCart = {...state};
    switch (action.type){
        default:
            return state;
        // 如果點選+會+2是因為React嚴格模式，註釋掉就好
        case "ADD":
            // 購物車如果不存在就push且數量為1
            if(newCart.items.indexOf(action.meal) === -1){
                newCart.items.push(action.meal);
                action.meal.amount = 1; //添加屬性並設為1
            }else{
                // 如果存在數量就+1
                action.meal.amount += 1; 
            }
            newCart.totalAmount += 1;
            newCart.totalPrice += action.meal.price;
            return newCart;
        case "REMOVE":
            action.meal.amount -= 1; 
            // 當商品數量為0時，購物車移除此商品
            if(action.meal.amount === 0){
                // splice(找到該商品索引,刪一個)
                newCart.items.splice(newCart.items.indexOf(action.meal),1);
            }
            
            newCart.totalAmount -= 1;
            newCart.totalPrice -= action.meal.price;
            return newCart;
        case "CLEAR":
            // 清空購物車
            // 要先刪除每個產品的數量，不然清空後外面的選的數量還在
            newCart.items.forEach(item => delete item.amount);
            newCart.items = []
            newCart.totalAmount = 0;
            newCart.totalPrice = 0;
            return newCart;
    }
}
const App = () => {
    const [mealsData,setMealsData] = useState(MEALS_DATA)
    const filterHandler = (keyword)=>{
        let newMealsData = MEALS_DATA.filter((item)=> item.title.indexOf(keyword) !== -1)
        setMealsData(newMealsData);
    }
    // -------------------useReducer_start------------------------
    const [cartData,cartDispatch] = useReducer(cartReducer,{
        items:[],
        totalAmount:0,
        totalPrice:0,
    })


    // -------------------useReducer_end------------------------

    // -------------------useState_start------------------------
    // 存儲商品[]、總數量、總金額
    // const [cartData,setCartData] = useState({
    //     items:[],
    //     totalAmount:0,
    //     totalPrice:0,
    // })
    // const addItem = (meal)=>{
    //     let newCart = {...cartData};
    //     // 購物車如果不存在就push且數量為1
    //     if(newCart.items.indexOf(meal) === -1){
    //         newCart.items.push(meal);
    //         meal.amount = 1; //添加屬性並設為1
    //     }else{
    //         // 如果存在數量就+1
    //         meal.amount += 1; 
    //     }

    //     newCart.totalAmount += 1;
    //     newCart.totalPrice += meal.price;
    //     // 重置購物車
    //     setCartData(newCart);
    // }
    // const removeItem = (meal)=>{
    //     let newCart = {...cartData}
    //     meal.amount -= 1; 
    //     // 當商品數量為0時，購物車移除此商品
    //     if(meal.amount === 0){
    //         // splice(找到該商品索引,刪一個)
    //         newCart.items.splice(newCart.items.indexOf(meal),1);
    //     }
       
    //     newCart.totalAmount -= 1;
    //     newCart.totalPrice -= meal.price;
        
    //     setCartData(newCart);
    // }

    // const clearCart = ()=> {
    //     const newCart = {...cartData}
    //     // 清空購物車
    //     // 要先刪除每個產品的數量，不然清空後外面的選的數量還在
    //     newCart.items.forEach(item => delete item.amount);
    //     newCart.items = []
    //     newCart.totalAmount = 0;
    //     newCart.totalPrice = 0;
    //     setCartData(newCart);
    // }
    // -------------------useState_end------------------------

    return (
        // useState版
        // <CartContext.Provider value={{...cartData,addItem,removeItem,clearCart}}>
        // useReducer版
        <CartContext.Provider value={{...cartData,cartDispatch}}>
            {/* <Confirm /> */}
            <div>
                <FilterMeals filterHandler={filterHandler}/>
                <Meals mealsData={mealsData}/>
                <Cart/>
            </div>
        </CartContext.Provider>
    )    
}

export default App;
