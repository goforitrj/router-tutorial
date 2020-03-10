import React, { useEffect } from 'react';

const AboutDetail = ({ match, history }) => {
    const { category } = match.params;

    const goBack = () => {
        history.goBack();
    };

    const goHome = () => {
        history.push('/');
    };

    useEffect(() => {
        console.log(history);
        const unblock = history.block('Do you wanna leave?');
        return () => {
            unblock();
        };
    }, [history]);

    return (
        <div>
            <div>History of my {category}</div>
            <div>
                <button onClick={goBack}>go Back button</button>
                <button onClick={goHome}>go Home button</button>
            </div>
        </div>
    );
};

export default AboutDetail;
