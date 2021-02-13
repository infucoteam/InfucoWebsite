import React from 'react';
import styled from 'styled-components';
import { colors, device } from '../helpers/constants';

const InfluencerCard = ({photo,name}) => {
    const Div = styled.div`
        min-width:23vw;
        height:25vw;
        background:#FFF;
        box-shadow: 0 0.75rem 1.5rem rgb(18 38 63 / 6%);
        flex-basis:25.1%;
        margin-top:2vh;
        display:flex;
        justify-content:center;
        position:relative;
        cursor: pointer;
        border-radius:0.5vw;
        transition: all 0.2s ease;
        box-sizing:border-box;
        /* border:1px solid yellow; */
        &:hover{
            /* top:-2%; */
            transform:translateY(-1vh);
            box-shadow: 0rem 1.7rem 3rem rgb(18 38 63 / 12%);
        }
        @media ${device.MOBILE} {
            min-width:80vw;
            height:40vh;
            border-radius:0.7vh;
        }
       
    `;
    const Label = styled.text`
        font-size:1vw;
        color:rgba(60, 72, 88, 0.8);
        text-align:center;
        position:absolute;
        bottom:1.8%;
        user-select:none;
        @media ${device.MOBILE} {
            font-size:1.5vh;
        }
    `;
    const Image = styled.img`
        width:100%;
        height:90%;
        border-top-right-radius:0.5vw;
        border-top-left-radius:0.5vw;
        @media ${device.MOBILE} {
            border-top-right-radius:0.7vh;
            border-top-left-radius:0.7vh;
        }
    `;
    return(
        <Div>
            <Image src={photo} alt={name}/>
            <Label>{name}</Label>
        </Div>
    )
}

export default InfluencerCard;