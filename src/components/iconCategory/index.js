import React from 'react';
import Style from './style.module.css';
import {useDispatch} from 'react-redux';
import {jokeCategoriesVisibleMobileAction} from '../../redux/actions/categories/index';
export default  function IconCategory(props){
    let dispatch = useDispatch();

    const jokeCategoriesVisibleMobile=()=>{
        dispatch(jokeCategoriesVisibleMobileAction())
    }
    return(
        <div className={Style.container} onClick={()=>{jokeCategoriesVisibleMobile()}}>
                <div className={Style.line}></div>
                <div className={Style.line}></div>
                <div className={Style.line}></div>
         </div>   
    )
}  