import React from 'react';

const profileData = {
    owner: {
        name: 'Jarang Seo',
        description: 'Frontend Engineer'
    },
    manager: {
        name: 'Stephanie',
        description: 'Frontend Engineer in Sydney'
    }
};

const Profiles = ({ match }) => {
    const { username, country } = match.params;

    const profile = profileData[username];
    if (!profile) {
        return <div>{username} is not in the list</div>;
    }
    return (
        <div>
            <h3>
                {username}({profile.name})
            </h3>
            <p>{profile.description}</p>

            {country && (
                <p>
                    Currently {username} is in {country}
                </p>
            )}
        </div>
    );
};

export default Profiles;
