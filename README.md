# Using @bvenceslas/african-countries Package (Linked Locally)

This project demonstrates how to use the `@bvenceslas/african-countries` npm package, linked locally, to retrieve and manipulate data about African countries.

## Linking Locally

If you're developing the package locally and have linked it globally:

In the root directory of your `@bvenceslas/african-countries` package:

```sh
npm link
```

This publishes the package in the global dependencies of the computer.

## Link the Package Locally (Within your `test` project)

Create a project folder, and initialize it using

```sh
npm init -y
```

then Create a JavaScript file (e.g. test.js) and import the package functions:

```sh
const {
  getCountries,
  getCountriesCount,
  getCountriesNamesAndAcronym,
  searchCountry,
  filterCountriesByContinent,
  getCountryDetailsByCode,
  getTotalCountriesPopulation,
  getTotalCountriesArea,
} = require("@bvenceslas/african-countries");

// Example usage
console.log(getCountriesCount()); // Output: total number of countries
console.log(getCountriesNamesAndAcronym("english")); // Output: sorted list of country names and acronyms in English
console.log(getCountryDetailsByCode("+243")); // Output: details of the country with code +243

console.table(getCountries()); // Output: table of all countries data

console.log(searchCountry("CD")); // Output: array of countries matching search query
console.log(getTotalCountriesPopulation()); // Output: total population of all countries
console.log(getTotalCountriesArea()); // Output: total area of all countries

console.log(filterCountriesByContinent("AFRICA")); // Output: array of countries in the specified continent

```

## Npm Package

you can find the package [here](https://www.npmjs.com/package/@bvenceslas/african-countries)
