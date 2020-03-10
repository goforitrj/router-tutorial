import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Profiles from './Profiles';

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
            <Switch>
                <Route path="/" exact={true} component={Home}></Route>
                <Route path="/about" component={About}></Route>
                <Route
                    path="/profiles/:username"
                    exact={true}
                    component={Profiles}
                ></Route>
                <Route
                    path="/profiles/:username/:country"
                    component={Profiles}
                ></Route>
                <Route render={({location}) => <div><h2>{location.pathname} is not exist</h2></div>} />
            </Switch>
        </div>
    );
};

export default App;
