import React from 'react';
import { Route, Link } from 'react-router-dom';
import qs from 'qs';
import AboutDetail from './AboutDetail';

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
                        <Link to="/about/work">Work Experience</Link>
                    </li>
                    <li>
                        <Link to="/about/family">Family</Link>
                    </li>
                </ul>
            </div>
            <Route
                path="/about"
                exact={true}
                render={() => <div>Select Category please</div>}
            />
            <Route path="/about/:category" component={AboutDetail}></Route>
        </div>
    );
};

export default About;
