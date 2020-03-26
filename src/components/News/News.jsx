import React from 'react';
import UserDisplay from "./UserDisplay/UserDisplay";
import AdminDisplay from "./AdminDisplay/AdminDisplay";
import NewsList from "./NewsList/NewsList";

const News = ({newsList, logIn}) => {
    return (
        <>
        <h2 class="mb-5">Новости</h2>
        {logIn === 'user' &&  <UserDisplay />}


        {/*<AdminDisplay/>*/}
        <NewsList newsList={newsList}/>
        </>

    );
}

export default News;
