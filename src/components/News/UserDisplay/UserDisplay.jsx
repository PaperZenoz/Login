import React from 'react';

const UserDisplay = () => {
    return (


        <div class="card text-white bg-dark mb-5">
            <div class="card-header">
                Дисплей пользователя
            </div>
            <div class="card-body">
                <form>
                    <div className="form-group">
                        <label>Название поста:</label>
                        <input type="text" name="title" className="form-control"/>
                    </div>
                    <div class="form-group">
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
