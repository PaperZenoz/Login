import React from 'react';

const Login = ({setIsPopup}) => {
    const handlerOnClick = () => {
        setIsPopup(false)
    }

    const handlerSubmit = (e) => {
        e.preventDefault()
        const login = e.target.elements.login.value
        const password = e.target.elements.password.value

        if (login === 'Admin' && password === 'Admin') {
            alert('Здравствуй, Администратор!')
            setIsPopup(false)
        } else if (login === 'User' && password === 'User'){
            alert('Здравствуй, Юзер!')
            setIsPopup(false)
        } else {
            alert('Неправильная пара')
        }


        console.log(login + '  ' + password)
    }

    return (
        <div className="login">
            <div className="login__content">
                <h3 className="text-center mb-5">Вход</h3>
                <form onSubmit={e => handlerSubmit(e)}>
                    <div className="form-group row">
                        <label className="col-sm-4 col-form-label">Введите логин:</label>
                        <div className="col-sm-8">
                            <input type="text" name="login" className="form-control"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-4 col-form-label">Введите пароль:</label>
                        <div className="col-sm-8">
                            <input type="password" name="password" className="form-control"/>
                        </div>
                    </div>
                    <button className="btn btn-success btn-lg btn-block mt-5">Войти</ button>
                </form>


                <button type="button" className="btn btn-danger btn-lg btn-block mt-3" onClick={handlerOnClick}>Закрыть
                    это окно
                </button>

            </div>
        </div>
    );
}

export default Login;
