import React from 'react';
import NewsItem from "./NewsItem/NewsItem";


const NewsList = ({newsList}) => {
    return (
        <>
        {newsList.map((newsItem, index) => <NewsItem key={index} newsItem={newsItem}/>)}
        </>

    );
}

export default NewsList;
