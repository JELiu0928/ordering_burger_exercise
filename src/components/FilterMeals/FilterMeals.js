import React , { useEffect, useState } from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import FilterMealsCss from './FilterMeals.module.css';

const FilterMeals = (props) => {
    const [keyword,setKeyword] = useState('');
    useEffect((e)=>{
        // 沒有開啟setTimeout會按一個按鍵就出現一次(即點一下就請求一次)
        console.log("useEffect渲染") 
        // 而在開啟一個定時器的同時，應該關掉上一次
        let timer = setTimeout(()=>{
            console.log("timer-useEffect渲染") 
            props.filterHandler(keyword)
        },500)
        // return後的這個函數可以稱為清理函數，它會在下次Effect執行前調用
        // 可以在這個函數中，做一些工作來清除上次Effect執行所帶來的影響
        return ()=>{
            console.log("return執行") 
            clearTimeout(timer)
        }
    },[keyword])

    const inputChangeHandler = (e) =>{
        // console.log(e.target.value)
        setKeyword(e.target.value.trim())
        
    }

    return (
        <div className={FilterMealsCss.FilterMeals}>
            <div className={FilterMealsCss.InputOuter}>
                <FontAwesomeIcon  className={FilterMealsCss.SearchIcon} icon={faSearch}/>
                <input value={keyword} onChange={inputChangeHandler}
                    className={FilterMealsCss.SearchInput}
                    type="text"  placeholder={"請輸入關鍵字"}/>
            </div>
        </div>
    );
};

export default FilterMeals;
