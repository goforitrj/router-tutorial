import React from 'react';
import { withRouter } from 'react-router-dom';

const WithRouterSample = ({ location, match, history }) => {
    // get match of parent component
    return (
        <div>
            <h4>location</h4>
            <textarea
                value={JSON.stringify(location, null, 2)}
                readOnly
            ></textarea>
            <h4>match</h4>
            <textarea
                value={JSON.stringify(match, null, 2)}
                readOnly
            ></textarea>
            <button
                onClick={() => {
                    history.push('/');
                }}
            >
                go Home Button
            </button>
        </div>
    );
};

export default withRouter(WithRouterSample);
