import React from 'react';
import Counter, {counterProps} from '../hoc/Counter/counter';

const Increment: React.FC<counterProps> = (props) => {
    const {count, incrementCount, decrementCount} = props;

    return <React.Fragment>
        <button onClick={incrementCount}>+</button>
        <button onClick={decrementCount}>-</button>
        <span>The count is {count}</span>
    </React.Fragment>
};

export default Counter(Increment);