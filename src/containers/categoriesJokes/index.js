import React,{useEffect} from 'react';
import {get} from '../../service/apiChuckNorris'; 
import {addJokeCategories,categoryJokeSelectedAction,jokeCategoriesVisibleMobileAction} from '../../redux/actions/categories'
import { useDispatch ,useSelector } from 'react-redux'
import Style from './style.module.css';

export default function CategoriesJokesContainer (){
    const dispatch = useDispatch();
    const categories =  useSelector(state=> state.joke.categories);
    const visibleMenuMobile =  useSelector(state=> state.joke.visibleMenuMobile);  
     useEffect(()=>{
        if(categories.length===0){
            getCategory();
         }
    },[categories]) 
    
const getCategory =async ()=>{   
    let category = await get('/jokes/categories');
    try{
   if(category.status===200){
       category = await category.data;   
       console.log(category)
       dispatch(addJokeCategories(category))
   }else{
    getCategory();
   }
    }catch(e){
        getCategory();
    }
} 
const selectCategory=(category)=>{
    dispatch(categoryJokeSelectedAction(category));
    dispatch(jokeCategoriesVisibleMobileAction());
}
 
return(
 <>
     <nav className={Style.navDesktop}>  
        <ul 
        className={Style.listCategories}>
            {  categories.map((c,index)=>
                        <div
                         className={Style.category}
                         key={index} >
                            <li  
                            onClick={()=>selectCategory(c)} 
                            className={Style.li}>{c}</li>
                        </div>
                    )
                }
         </ul>  
      </nav>    
            {visibleMenuMobile&&
                <nav className={Style.navMobile}>   
                <ul 
                className={Style.listCategories}>
                        {
                            categories.map((c,index)=>
                                <div
                                    className={Style.category}
                                    key={index} >
                                    <li  
                                    onClick={()=>selectCategory(c)} 
                                    className={Style.li}>{c}</li>
                                </div>
                            )
                        }
                    </ul>  
                </nav>  
              }
         </>
 )
}  