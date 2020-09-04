import fetch from 'cross-fetch';

import {URL_CHUCK_NORRIS} from '../config';

export const get = async (endPoint) =>{
    return new Promise(async(resolver,reject)=>{
        fetch(URL_CHUCK_NORRIS+endPoint, {
          headers:{
            Accept: 'application/json',
            'Content-Type': 'application/json',
         },
          }).then((data)=> resolver({status:data.status,data:data.json()} ))
          .catch((e)=>console.log(e))
          
          } )
 
    }  