import React from 'react';
import Style from './style.module.css';
export default function Button(props){
    let {title} = props;
    const handleClick=()=>{
        props.onClick();
    }
    return (
        <button className={Style.button} onClick={()=>handleClick()}>
            {title}
        </button>
    )
}