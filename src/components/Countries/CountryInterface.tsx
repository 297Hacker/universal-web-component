import React from 'react';

export interface countryProps {
    id?: number
    name?: string
    currency?: string
}

const specialContext = React.createContext({} as countryProps);
export const CountryContextProvider = specialContext.Provider;
export const CountryContextConsumer = specialContext.Consumer;
