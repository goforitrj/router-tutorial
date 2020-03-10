import React from 'react';
import { Route, Link } from 'react-router-dom';
import About from './About';
import Home from './Home';

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
        </div>
    );
};

export default App;
