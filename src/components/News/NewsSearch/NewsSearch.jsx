import React from 'react';


const NewsSearch = ({newsSearch, search}) => {

    const onChangeHandler = e => {
        newsSearch(e.target.value)
    }



    return (
        <>
        <input className="form-control mb-3" placeholder="Введите текст поиска" value={search}
               onChange={e => onChangeHandler(e)}/>
        </>

    );
}

export default NewsSearch;
