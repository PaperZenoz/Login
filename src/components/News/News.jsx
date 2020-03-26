import React from 'react';
import UserDisplay from "./UserDisplay/UserDisplay";
import AdminDisplay from "./AdminDisplay/AdminDisplay";
import NewsList from "./NewsList/NewsList";
import NewsSearch from "./NewsSearch/NewsSearch";

const News = ({newsList, logIn, setUnverifiedNews, unverifiedNews, removeNews, addNews, newsSearch, search}) => {
    return (
        <>
        <h2 className="mb-5 text-center">Новости</h2>
        {logIn === 'user' &&  <UserDisplay setUnverifiedNews={setUnverifiedNews}/>}
        {logIn === 'admin' &&  <AdminDisplay unverifiedNews={unverifiedNews} removeNews={removeNews} addNews={addNews} newsList={newsList}/>}
        <NewsSearch newsSearch={newsSearch} newsList={newsList} search={search}/>
        <NewsList newsList={newsList} search={search}/>
        </>

    );
}

export default News;

