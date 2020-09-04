import React from 'react';

import Header from '../../components/header';
import Center from '../../components/center';

import CategoriesJokesContainer from '../../containers/categoriesJokes';
import CategoryJokeSelectedContainer from '../../containers/categoryJokeSelected';

export default function Home(){

    return (
        <div>
            
            <Center>
            <Header></Header>
                <CategoriesJokesContainer></CategoriesJokesContainer>
                <CategoryJokeSelectedContainer></CategoryJokeSelectedContainer>
            </Center>
            </div> 
    ) 
}   