import React from 'react';

const Resource: React.FC = (props: any) => {
    const stateType = {
        loading: false,
        payload: []
    };

    return props.render(stateType);
};

export default Resource;