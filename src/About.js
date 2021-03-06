import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import qs from 'qs';
import AboutDetail from './AboutDetail';
import WithRouterSample from './WithRouterSample';

const About = ({ location }) => {
    const query = qs.parse(location.search, {
        ignoreQueryPrefix: true
    });

    // pared result of query is string!
    const detail = query.detail === 'true';
    return (
        <div>
            <h1>About</h1>
            <p>This is about</p>
            {detail && <p>This is detail information.</p>}
            <div>
                <ul>
                    <li>
                        <NavLink
                            to="/about/work"
                            activeStyle={{
                                background: 'tomato',
                                color: 'white'
                            }}
                        >
                            Work Experience
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about/family"
                            activeStyle={{
                                background: 'green',
                                color: 'white'
                            }}
                        >
                            Family
                        </NavLink>
                    </li>
                </ul>
            </div>
            <Route
                path="/about"
                exact={true}
                render={() => <div>Select Category please</div>}
            />
            <Route path="/about/:category" component={AboutDetail}></Route>
            <WithRouterSample />
        </div>
    );
};

export default About;
