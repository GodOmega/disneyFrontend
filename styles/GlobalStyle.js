import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'


const GlobalStyle = createGlobalStyle`
  ${normalize}
  body {
    padding: 3rem 0 0;
  }
  `

export default GlobalStyle