import React from 'react';
import { Badge } from './Badge';
import { Color } from '../ui/colors';
import { Country } from '../types';

interface CountryItemProps {
  country: Country;
}
export const CountryItem = ({
  country: { flagIcon, name, capital, region, area, population },
}: CountryItemProps) => {
  return (
    <li className='list-group-item d-flex row row-cols-6 align-items-center fs-4'>
      <img src={flagIcon} alt='flag' />
      <span>{name}</span>
      <span>{capital}</span>
      <span>{region}</span>
      <Badge color={Color.PRIMARY} label='area' value={area} />
      <Badge color={Color.SECONDARY} label='population' value={population} />
    </li>
  );
};
