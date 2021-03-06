import React from 'react';
import Nav from "./components/Nav/Nav";
import {Route, Switch} from "react-router-dom";
import Main from "./components/Main/Main";
import News from "./components/News/News";
import {connect} from "react-redux";
import {setIsPopup, setLogIn, setWelcomeName} from "./redux/loginReducer";
import {addNews, newsSearch} from "./redux/newsReducer";
import {removeNews, setUnverifiedNews} from "./redux/adminReducer";

const App = ({isPopup, logIn, welcomeName, newsList, search, setIsPopup, setLogIn, setWelcomeName, setUnverifiedNews, unverifiedNews, removeNews, addNews, newsSearch}) => {
  return (
    <div className="App">
        <Nav isPopup={isPopup} setIsPopup={setIsPopup} setLogIn={setLogIn} logIn={logIn}/>
        <div className="container">
            <Switch>
                <Route render={() => <Main logIn={logIn} welcomeName={welcomeName} setWelcomeName={setWelcomeName}/>} path='/main'/>
                <Route render={() => <News newsList={newsList} logIn={logIn} setUnverifiedNews={setUnverifiedNews} unverifiedNews={unverifiedNews} removeNews={removeNews} addNews={addNews} newsSearch={newsSearch} search={search}/>} path='/news'/>
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
        search: state.news.search,

        unverifiedNews: state.admin.unverifiedNews,

    }
}

export default connect(mapStateToProps, {setIsPopup, setLogIn, setWelcomeName, setUnverifiedNews, removeNews, addNews, newsSearch})(App);
