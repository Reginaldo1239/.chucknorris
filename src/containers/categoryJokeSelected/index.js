import React, {useEffect } from 'react';
import JokeItem from '../../components/jokeItem'
import Button from '../../components/button';
import {newJokeAction} from '../../redux/actions/categories';
import {useSelector,useDispatch} from 'react-redux';
import {get} from '../../service/apiChuckNorris';
import Style from './style.module.css'
export default function CategoryJokeSelectedContainer(){
    const category = useSelector(state=>state.joke.categorySelected);
    const joke = useSelector(state=>state.joke.joke);
    const dispatch = useDispatch();
        useEffect(()=>{ 
            if(category!=null){
            getJoke();
            }
        },[category]);
    const getJoke =async ()=>{
         let endPoint = `/jokes/random?category=${category}`;
         try{
         let joke =await get(endPoint);
       
         if(joke.status===200){
         
             joke = await joke.data;
            dispatch(newJokeAction(joke));
         }else  {
            alert('ocorreu um erro')
         } 
            }catch(e){
                alert('ocorreu um erro')
            }
        } 
    return (
        <div className={Style.container}>
             <div className={Style.jokeItem}>
                <JokeItem 
                values={joke}></JokeItem>
            </div>
            <div className={Style.button}>
                <Button
                title={'next'}
                onClick={()=>getJoke()}></Button>
            </div>
         </div>
    )
}  