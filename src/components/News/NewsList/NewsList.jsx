import React from 'react';
import NewsItem from "./NewsItem/NewsItem";


const NewsList = ({newsList}) => {
    console.log(newsList)
    return (
        <>
        {newsList.map((newsItem, index) => <NewsItem key={index} newsItem={newsItem}/>)}

        </>

    );
}

export default NewsList;
