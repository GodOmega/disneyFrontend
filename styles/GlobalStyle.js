import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'


const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');
  ${normalize}
  body {
    padding: 3rem 0 0;
    font-family: 'Roboto', sans-serif;
  }

  .container-w{
    max-width: 1000px;
    margin: 0 auto;
  }
  `

export default GlobalStyle