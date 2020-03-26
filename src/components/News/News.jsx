import React from 'react';
import UserDisplay from "./UserDisplay/UserDisplay";
import AdminDisplay from "./AdminDisplay/AdminDisplay";
import NewsList from "./NewsList/NewsList";

const News = ({newsList, logIn, setNewsList, setUnverifiedNews, unverifiedNews, removeNews}) => {
    return (
        <>
        <h2 className="mb-5">Новости</h2>
        {logIn === 'user' &&  <UserDisplay setUnverifiedNews={setUnverifiedNews}/>}
        {logIn === 'admin' &&  <AdminDisplay unverifiedNews={unverifiedNews} removeNews={removeNews}/>}
        <NewsList newsList={newsList}/>
        </>

    );
}

export default News;
