export interface CountryApi {
  flags: Flags;
  name: CountryName;
  capital: string[];
  region: string;
  area: number;
  population: number;
}
export interface Flags {
  png: string;
  svg: string;
}
export interface CountryName {
  common: string;
  official: string;
  nativeName: CountryNativeName;
}
export interface CountryNativeName {
  [lang: string]: CountryLangName | undefined;
}
export interface CountryLangName {
  official: string;
  common: string;
}
export interface Country {
  flagIcon: string;
  name: string;
  capital: string;
  region: string;
  area: number;
  population: number;
}
export type BadgeLabel = 'area' | 'population';
