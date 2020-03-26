import React from 'react';


const NewsItem = ({newsItem}) => {

    return (
        <>
        <div className="card text-white bg-dark mb-3">
            <div className="card-header">
                {newsItem.title}
            </div>
            <div className="card-body">
                <blockquote className="blockquote mb-0">
                    <p>{newsItem.text}</p>
                    <footer><small>{newsItem.data}</small></footer>
                </blockquote>
            </div>
        </div>
        </>

    );
}

export default NewsItem;
