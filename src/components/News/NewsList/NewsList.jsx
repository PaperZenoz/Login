import React from 'react';
import NewsItem from "./NewsItem/NewsItem";


const NewsList = ({newsList, search}) => {
    const filteredNews = (arr) => {
        return arr.filter(arrItem => {
            return (
                arrItem.title.toLowerCase().includes(search.toLowerCase()) ||
                arrItem.text.toLowerCase().includes(search.toLowerCase()) ||
                arrItem.data.toLowerCase().includes(search.toLowerCase())
            )
        })
    }

    return (
        <>
        {filteredNews(newsList).map((newsItem, index) => <NewsItem key={index} newsItem={newsItem}/>)}
        </>

    );
}

export default NewsList;
