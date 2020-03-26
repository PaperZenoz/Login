import React from 'react';


const NewsItem = ({newsItem}) => {

    return (
        <>
        <div class="card text-white bg-dark mb-3">
            <div class="card-header">
                {newsItem.title}
            </div>
            <div class="card-body">
                <blockquote class="blockquote mb-0">
                    <p>{newsItem.text}</p>
                    <footer><small>{newsItem.data}</small></footer>
                </blockquote>
            </div>
        </div>
        </>

    );
}

export default NewsItem;
