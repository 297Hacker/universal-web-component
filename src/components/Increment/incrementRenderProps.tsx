import React from 'react';
import Counter, {counterProps} from '../RenderProps/Tracker/Counter';

const IncrementRenderProps: React.FC = () => {
    return <React.Fragment>
        <Counter children={(count) => (
            <div> <span>{count}</span> </div>)}/>

    </React.Fragment>
};

export default IncrementRenderProps;