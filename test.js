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

console.log(getCountriesCount()); // Output: total number of countries
console.log(getCountriesNamesAndAcronym("english")); // Output: sorted list of country names and acronyms in English
console.log(getCountryDetailsByCode("+243")); // Output: details of the country with code +216

console.table(getCountries());

console.log(searchCountry("CD"));
console.log(getTotalCountriesPopulation());
console.log(getTotalCountriesArea());
console.log("filterCountriesByContinent", filterCountriesByContinent("AFRICA"));
