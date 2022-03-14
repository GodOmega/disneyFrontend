import React from 'react'

import { FormContainer, SearchInput } from './style'

const SearchContainer = () => {
  return (
    <FormContainer>
        <SearchInput type="search" placeholder='Título, personaje o género' />
    </FormContainer>
  )
}

export default SearchContainer