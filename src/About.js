import React from 'react';
import qs from 'qs';

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
        </div>
    );
};

export default About;
