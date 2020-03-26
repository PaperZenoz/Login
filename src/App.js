import React from 'react';
import Nav from "./components/Nav/Nav";
import {Route, Switch} from "react-router-dom";
import Main from "./components/Main/Main";
import News from "./components/News/News";
import {connect} from "react-redux";
import {setIsPopup} from "./redux/loginReducer";

const App = ({isPopup, setIsPopup}) => {
  return (
    <div className="App">
        <Nav isPopup={isPopup} setIsPopup={setIsPopup}/>
        <div className="container">
            <Switch>
                <Route render={() => <Main/>} path='/main'/>
                <Route render={() => <News/>} path='/news'/>
            </Switch>
        </div>
    </div>
  );
}

const mapStateToProps = state => {
    return {
        isPopup: state.login.isPopup
    }
}

export default connect(mapStateToProps, {setIsPopup})(App);
