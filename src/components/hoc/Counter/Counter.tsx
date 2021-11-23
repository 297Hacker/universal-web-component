import React, {useState} from 'react';

type newCounterType = ({}) => {};
type incrementType = () => void;
type decrementType = () => void;

export type counterProps = {
    count: number;
    incrementCount: incrementType;
    decrementCount: decrementType;
}

const Counter = (OriginalComponent: any) => {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        return setCount(c => c + 1);
    };

    const decrementCount = () => {
        return setCount(c => c - 1);
    };

    return (newCounter: newCounterType) => (
        <OriginalComponent count={count} incrementCount={incrementCount} decrementCount={decrementCount}>{newCounter}</OriginalComponent>
    );
};

export default Counter;
