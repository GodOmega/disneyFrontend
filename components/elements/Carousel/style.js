import styled from 'styled-components'
import Slider from "react-slick";


export const Main = styled(Slider)`
    .slick-list {
        overflow: visible;

        div {
            outline: none;
        }
    }

    .slick-slide {
        transition: transform .3s;
        
        :hover {
            transform: scale(1.05);
        }

        > div {
            margin: 0 15px;
        }
    }

    @media (max-width: 800px) {
        .slick-slide > div {
            margin: 0 8px;
        }
    }

`

export const Wrap = styled.div`
    position: relative;
    height: 150px;
    transition: border .5s;
    border: 4px solid transparent;
    border-radius: 8px;
    :hover {
            border: 4px solid rgba(255, 255, 255, .8);
    }
    img {
        cursor: pointer;
        max-width: 100%;
        height: 100%;
        border-radius: 8px;
    }

    @media (max-width: 800px) {
        :hover {
            border: 4px solid transparent;
        }
    }
`