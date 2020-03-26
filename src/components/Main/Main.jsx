import React from 'react';

const Main = ({logIn, welcomeName, setWelcomeName}) => {

    if (logIn === null) {
        setWelcomeName('Гость')
    } else if (logIn === 'admin') {
        setWelcomeName('Администратор')
    } else if (logIn === 'user') {
        setWelcomeName('Пользователь')
    }


    return (
        <h1 className="text-center mt-5">Привет, {welcomeName} ! :)</h1>

    );
 }

export default Main;
