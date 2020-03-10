import React from 'react';

const AboutDetail = ({ match }) => {
    const { category } = match.params;
    return <div>History of my {category}</div>;
};

export default AboutDetail;
