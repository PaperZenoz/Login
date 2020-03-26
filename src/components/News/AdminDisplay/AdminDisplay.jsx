import React from 'react';
import UnverifiedNewsItem from "./UnverifiedNewsItem/UnverifiedNewsItem";

const AdminDisplay = ({unverifiedNews, removeNews}) => {
    return (
        unverifiedNews.length > 0 ? unverifiedNews.map((unverifiedNewsItem) => <UnverifiedNewsItem unverifiedNewsItem={unverifiedNewsItem} key={unverifiedNewsItem.id} unverifiedNews={unverifiedNews} removeNews={removeNews}/>) : <h2 className="mb-5 text-center">Пользователь не предложил новую новость</h2>
    );
}

export default AdminDisplay;
