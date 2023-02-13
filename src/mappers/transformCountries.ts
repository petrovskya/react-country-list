import { CountryApi } from '../types';
import { Country } from '../types';

export const transformCountries = (countries: CountryApi[]): Country[] => {
  return countries.map(
    ({ flags, name, capital, region, area, population }) => ({
      flagIcon: flags.svg,
      name: name.common,
      capital: capital[0],
      area: area,
      region: region,
      population: population,
    })
  );
};
