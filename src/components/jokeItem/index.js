import React from 'react';
import Style from './style.module.css';
export default function JokeItem(props){
    let {url,value,icon_url } = props.values;
    return(
        <div className={Style.container}>
        {value==undefined?(
            <div className={Style.jokeEmpty}>
            <span className={Style.span}>select a category of joke</span>
            </div>
             ):(
                <>  
                    <div className={Style.box}>
                        <img className={Style.iconImg} src={icon_url}/>
                    </div>
                    <div className={Style.box}>
                        <span className={Style.span} >{value}</span>
                    </div>
                  </>
                )}
                </div>

    ) }
