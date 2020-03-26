import React from 'react';

const Login = ({setIsPopup}) => {
    const handlerOnClick = () => {
        setIsPopup(false)
    }

    return (
        <div className="login">
            <div className="login__content">
                <h3 className="text-center mb-5">Вход</h3>
                <form className="">
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Введите логин:</label>
                        <div class="col-sm-8">
                            <input type="text" name="login" class="form-control" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Введите пароль:</label>
                        <div class="col-sm-8">
                            <input type="password" name="password" class="form-control" />
                        </div>
                    </div>
                    <button type="button" class="btn btn-success btn-lg btn-block mt-5">Войти</button>
                </form>

                <button type="button" class="btn btn-danger btn-lg btn-block mt-3" onClick={handlerOnClick}>Закрыть это окно</button>

            </div>
        </div>
    );
}

export default Login;
