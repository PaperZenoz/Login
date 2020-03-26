import React from 'react';

const UserDisplay = ({setUnverifiedNews}) => {
    const handlerSubmit = (e) => {
        e.preventDefault()
        const title = e.target.elements.title.value
        const text = e.target.elements.text.value
        const data = '27.03.2020'


        setUnverifiedNews({
            title: title,
            text: text,
            data: data
        })

        alert('Новость отправлена администатору на рассмотрение')
    }



    return (


        <div className="card text-white bg-dark mb-5">
            <div className="card-header">
                Дисплей пользователя
            </div>
            <div className="card-body">
                <form onSubmit={e => handlerSubmit(e)}>
                    <div className="form-group">
                        <label>Название поста:</label>
                        <input type="text" name="title" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Текст поста:</label>
                        <textarea name="text" className="form-control"/>
                    </div>
                    <button type="submit" className="btn btn-success">Добавить новость</button>
                </form>
            </div>
        </div>



    );
}

export default UserDisplay;
