import React from 'react';
import Nav from "./components/Nav/Nav";
import {Route, Switch} from "react-router-dom";
import Main from "./components/Main/Main";
import News from "./components/News/News";
import {connect} from "react-redux";
import {setIsPopup, setLogIn, setWelcomeName} from "./redux/loginReducer";
import {addNews, setNewsList} from "./redux/newsReducer";
import {removeNews, setUnverifiedNews} from "./redux/adminReducer";

const App = ({isPopup, logIn, welcomeName, newsList, setIsPopup, setLogIn, setWelcomeName, setNewsList, setUnverifiedNews, unverifiedNews, removeNews, addNews}) => {
  return (
    <div className="App">
        <Nav isPopup={isPopup} setIsPopup={setIsPopup} setLogIn={setLogIn} logIn={logIn}/>
        <div className="container">
            <Switch>
                <Route render={() => <Main logIn={logIn} welcomeName={welcomeName} setWelcomeName={setWelcomeName}/>} path='/main'/>
                <Route render={() => <News newsList={newsList} logIn={logIn} setNewsList={setNewsList} setUnverifiedNews={setUnverifiedNews} unverifiedNews={unverifiedNews} removeNews={removeNews} addNews={addNews}/>} path='/news'/>
            </Switch>
        </div>
    </div>
  );
}

const mapStateToProps = state => {
    console.log(state)
    return {
        isPopup: state.login.isPopup,
        logIn: state.login.logIn,
        welcomeName: state.login.welcomeName,

        newsList: state.news.newsList,

        unverifiedNews: state.admin.unverifiedNews,
    }
}

export default connect(mapStateToProps, {setIsPopup, setLogIn, setWelcomeName, setNewsList, setUnverifiedNews, removeNews, addNews})(App);
