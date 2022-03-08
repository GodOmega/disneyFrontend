import styled from 'styled-components'



export const DescriptionContainer = styled.article`
    
`


export const LogoContainer = styled.picture`
    display: block;
    padding-top: 80px;
    margin: 0 0 1rem ;

    img {
        max-width: 341px;
        min-height: 100px;
    }
`


export const PlayContainer = styled.section`
    display: flex;
    margin: 0 0 3rem;
`


export const Button = styled.button `
    position:relative ;
    height: 56px;
    margin: 0 .8rem;
    padding: 0 24px;
    justify-content: center;
    background-color: ${props => props.bgColor};
    border-radius: 0.25rem ;
    color: ${props => props.color ? props.color : 'black'} ;
    cursor: pointer;
    border: none ;
    transition: all .2s ease-in-out;

    :hover {
        background-color: ${props => props.hoverBg ? props.hoverBg : '' };
        color: #333;
        transition: all .2s ;
    }

    ::before {
        content: '';
        position: absolute;
        inset: 0;
        background-color:  rgba(0, 0, 0, 0);
        transition: all .2s ease-in-out;
        border-radius: 0.25rem ;
        border: ${props => props.withBorder ? props.borderSize : '' } 
            ${props => props.withBorder ? props.borderColor : ''} ${props => props.withBorder ? props.typeBorder : 'none'};
    }

    :hover ::before {
        border: 1px ${props => props.withBorder ? 'solid' : 'none'} ${props => props.withBorder ? 'rgba(0, 0, 0, 0.4)' : ''};
        transition: all .2s ;
        background-color:  ${props => props.wrapper ? 'rgba(0, 0, 0, .4)' : 'rgba(0, 0, 0, 0)'};
    }
    
`

export const ButtonElementsContainer = styled.div`
    position: relative ;
    display: flex;
    align-items: center;
    

    img {
        width: 18px;
    }
`

export const ButtonText = styled.p`
    text-transform: uppercase;
    font-weight: bold;
    margin: ${props => props.margin ? props.margin : 0} ;
    letter-spacing: 1.5px ;
`


export const TextContainer = styled.section`
    color: ${props => props.color ? props.color : '#f9f9f9'};
    font-weight: 400;
    font-size: 19px;
    line-height: 1.6;
    width: 71%;
`