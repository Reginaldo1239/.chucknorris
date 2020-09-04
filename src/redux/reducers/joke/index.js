import { act } from "react-dom/test-utils";

const stateInitial = {categories:[],categorySelected:null,joke:{},visibleMenuMobile:false}

export const joke =(state=stateInitial,action)=>{
  console.log(action.joke)
  switch(action.type){
      case 'ADD_JOKE_CATEGORIES':
        return {...state,categories:action.categories} 
      case 'CATEGORY_JOKE_SELECTED':
        return {...state,categorySelected:action.category};
      case 'NEW_JOKE':
        return {...state,joke:action.joke} ;
      case 'JOKE_CATEGORIES_VISIBLE_MOBILE' :
        return {...state,visibleMenuMobile:!state.visibleMenuMobile}  
      default:
        return state;
      
  }

}       