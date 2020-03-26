import React from 'react';


const UnverifiedNewsItem = ({unverifiedNewsItem, unverifiedNews, removeNews, addNews, newsList}) => {
    const addNewsHandler = (id) => {
        addNews(newsList.concat(unverifiedNews.filter(unverifiedNewsI => unverifiedNewsI.id === id)))
        removeNews(unverifiedNews.filter(unverifiedNewsI => unverifiedNewsI.id !== id))
    }

    const removeNewsHandler = (id) => {
        removeNews(unverifiedNews.filter(unverifiedNewsI => unverifiedNewsI.id !== id))

    }



    return (
        <>
        <div>
            <div className="card text-white bg-dark mb-3">
                <div className="card-header">
                    {unverifiedNewsItem.title}
                </div>
                <div className="card-body">
                    <blockquote className="blockquote mb-0">
                        <p>{unverifiedNewsItem.text}</p>
                        <footer>
                            <small>{unverifiedNewsItem.data}</small>
                        </footer>
                    </blockquote>
                    <div className="mt-3">
                        <button type="button" className="btn btn-success btn-lg btn-block" onClick={() => addNewsHandler(unverifiedNewsItem.id)}>Одобрить новость</button>
                        <button type="button" className="btn btn-danger btn-lg btn-block" onClick={() => removeNewsHandler(unverifiedNewsItem.id)}>Удалить новость</button>
                    </div>

                </div>
            </div>
        </div>
        </>

    );
}

export default UnverifiedNewsItem;
