import React, {Component} from 'react';
import CountryList from './CountryList/CountryList';
import {CountryContextProvider, countryProps} from "./CountryInterface";

class Countries extends Component<countryProps> {
     state = [
        {
            id: 1,
            name: "Aruba",
            currency: "FL"
        },
        {
            id: 2,
            name: "Japan",
            currency: "YEN"
        },
        {
            id: 3,
            name: "England",
            currency: "PND"
        }
    ];

    render() {
        return <>
            <CountryContextProvider value={this.state}>
                <CountryList/>
            </CountryContextProvider>
        </>
    }
}

export default Countries;
