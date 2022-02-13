import styled from 'styled-components'
import Slider from "react-slick";


export const Main = styled(Slider)`
    margin-top: 4rem;
    .slick-list {
        overflow: visible;
    }
    .slick-slide > div {
        margin: 0 15px;
        outline: none;
    }

    @media (max-width: 700px) {
        .slick-slide > div {
            margin: 0 10px;
        }
    }

`

export const Wrap = styled.div`
    img {
        cursor: pointer;
        width: 100%;
        height: 100%;
        outline: none;
        object-fit: contain;
        border: 5px solid transparent;
        border-radius: 4px;
        transition: border .5s;
        :hover {
            border: 5px solid rgba(255, 255, 255, .62);
        }
    }
`