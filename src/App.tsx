import React from 'react';
import { CountryList } from './components/CountryList';
import countries from './country-data.json';
import { transformCountries } from './mappers/transformCountries';

export const App = () => {
  const transformedCountries = transformCountries(countries);
  console.log(transformedCountries);
  return (
    <div>
      <h1 className='p-4'>Country List</h1>
      <CountryList countries={transformedCountries} />
    </div>
  );
};
