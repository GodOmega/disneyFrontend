import styled from 'styled-components'


export const Section = styled.section`
    margin-bottom: .5rem;

    h4 {
        color: #f9f9f9;
        padding: 0 0 0 1.1rem;
        font-size: 20px;
        margin-bottom: 10px;
    }

    @media (max-width: 800px) {
        margin-bottom: 0;
        h4 {
            font-size: 1rem;
            padding: 0;
        }
    }
`