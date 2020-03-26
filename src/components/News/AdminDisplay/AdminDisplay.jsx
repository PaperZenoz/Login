import React from 'react';
import UnverifiedNewsItem from "./UnverifiedNewsItem/UnverifiedNewsItem";

const AdminDisplay = ({unverifiedNews, removeNews, addNews, newsList}) => {
    return (
        unverifiedNews.length > 0 ? unverifiedNews.map((unverifiedNewsItem) => <UnverifiedNewsItem unverifiedNewsItem={unverifiedNewsItem} key={unverifiedNewsItem.id} unverifiedNews={unverifiedNews} removeNews={removeNews} addNews={addNews} newsList={newsList}/>) : <h2 className="mb-5 text-center">Пользователь ещё не предложил новость</h2>
    );
}

export default AdminDisplay;
