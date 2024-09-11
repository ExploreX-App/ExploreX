import React, { useState, useMemo } from 'react'
import Select from 'react-select'
import countryList from 'react-select-country-list'
import "./CountrySearch.style.css"

const CountrySearch = ({onCountryChange}) => {
const [value, setValue] = useState('')
  const options = countryList().getData()

    const handleChange = (selectedOption) => {
        setValue(selectedOption);
        onCountryChange(selectedOption.value);
  }

  return <Select  options={options} value={value} onChange={handleChange} />
}

export default CountrySearch
