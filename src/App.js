import React from 'react';
import { Route, Link } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Profile from './Profile';

const App = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
            <Route path="/" exact={true} component={Home}></Route>
            <Route path="/about" component={About}></Route>
            <Route
                path="/profiles/:username"
                exact={true}
                component={Profile}
            ></Route>
            <Route
                path="/profiles/:username/:country"
                component={Profile}
            ></Route>
        </div>
    );
};

export default App;
