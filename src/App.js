import React from 'react';
import Nav from "./components/Nav/Nav";
import {Route, Switch} from "react-router-dom";
import Main from "./components/Main/Main";
import News from "./components/News/News";
import {connect} from "react-redux";
import {setIsPopup, setLogIn, setWelcomeName} from "./redux/loginReducer";

const App = ({isPopup, logIn, welcomeName, setIsPopup, setLogIn, setWelcomeName}) => {
  return (
    <div className="App">
        <Nav isPopup={isPopup} setIsPopup={setIsPopup} setLogIn={setLogIn} logIn={logIn}/>
        <div className="container">
            <Switch>
                <Route render={() => <Main logIn={logIn} welcomeName={welcomeName} setWelcomeName={setWelcomeName}/>} path='/main'/>
                <Route render={() => <News/>} path='/news'/>
            </Switch>
        </div>
    </div>
  );
}

const mapStateToProps = state => {
    return {
        isPopup: state.login.isPopup,
        logIn: state.login.logIn,
        welcomeName: state.login.welcomeName
    }
}

export default connect(mapStateToProps, {setIsPopup, setLogIn, setWelcomeName})(App);
