import React from 'react';
import {CountryContextConsumer} from '../../CountryInterface';

const List = () => {
    return <CountryContextConsumer>
        {value => <div>
                <h1>Country name: {value.name}</h1>
                <span>Currency: {value.currency}</span>
        </div>}
    </CountryContextConsumer>
};

export default List;
