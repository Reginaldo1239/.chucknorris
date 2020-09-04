import React from 'react';
import Style from './style.module.css';
import IconCategory from '../iconCategory';
export default function Header(props){

    return( 
        <>
        <header className={Style.headerDesktop}>
            <h2 className={Style.h2}>chuck norris</h2>  
        </header>
        <header className={Style.headerMobile}>
            <div >
            <h2 className={Style.h2}>chuck norris</h2>
            </div>
            <div className={Style.iconMobile}>
                
                    <IconCategory></IconCategory> 
            </div>
        </header>
        </>
    ) 
}