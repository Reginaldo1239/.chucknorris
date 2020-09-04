
   const addJokeCategories=(categories)=>{
   return {type:'ADD_JOKE_CATEGORIES',categories:categories}
   }  
   const categoryJokeSelectedAction = (category)=>{
      return {type:'CATEGORY_JOKE_SELECTED',category}
   }    
   const newJokeAction = (joke)=>{
      return {type:'NEW_JOKE',joke}
   }
   const jokeCategoriesVisibleMobileAction = ()=>{
      return {type:'JOKE_CATEGORIES_VISIBLE_MOBILE'} 
   }
 
export {
   addJokeCategories,
   categoryJokeSelectedAction,
   newJokeAction,
   jokeCategoriesVisibleMobileAction};  