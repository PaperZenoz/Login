import React from 'react';
import Nav from "./components/Nav/Nav";
import {Route, Switch} from "react-router-dom";
import Main from "./components/Main/Main";
import News from "./components/News/News";

const App = () => {
  return (
    <div className="App">
        <Nav />
        <div className="container">
            <Switch>
                <Route render={() => <Main/>} path='/main'/>
                <Route render={() => <News/>} path='/news'/>
            </Switch>
        </div>
    </div>
  );
}

export default App;
