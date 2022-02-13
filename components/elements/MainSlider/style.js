import styled from 'styled-components'
import Slider from "react-slick";


export const Main = styled(Slider)`
    margin-top: 4rem;
    .slick-list {
        overflow: visible;

        div {
            outline: none;
        }
    }

    .slick-slide > div {
        margin: 0 15px;
        background: linear-gradient(rgb(48, 50, 62), rgb(30, 31, 42));
    }

    @media (max-width: 700px) {
        .slick-slide > div {
            margin: 0 10px;
        }
    }

`

export const Wrap = styled.div`
    position: relative ;
    cursor: pointer;
    ::after {
                border-radius: 4px;
                border: 4px solid rgba(255, 255, 255, 0);
                inset: 0px;
                content: "";
                position: absolute;
                transition: border .3s ;
    }

    :hover ::after {
        border: 4px solid rgba(255, 255, 255, .5);
    }

    img {
        cursor: pointer;
        width: 100%;
        height: 100%;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        /* border: 7px solid transparent; */
        border-radius: 4px;
        transition: border .5s;
        :hover {
            /* border: 7px solid rgba(255, 255, 255, .62); */
        }
    }
`