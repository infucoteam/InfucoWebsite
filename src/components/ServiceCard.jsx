import React from 'react';
import styled from 'styled-components';
import { colors, device } from '../helpers/constants';

const ServiceCard = ({icon,service}) => {
    const Div = styled.div`
        width:15vw;
        height:17vw;
        background:#FFF;
        box-shadow: 0 0.75rem 1.5rem rgb(18 38 63 / 6%);
        flex-basis:25.1%;
        margin-top:2vh;
        display:flex;
        justify-content:center;
        position:relative;
        cursor: pointer;
        border-radius:0.3vw;
        transition: all 0.2s ease;
        padding-top:1%;
        box-sizing:border-box;
        &:hover{
            /* top:-2%; */
            transform:translateY(-1vh);
            box-shadow: 0rem 1.7rem 3rem rgb(18 38 63 / 12%);
        }
        @media ${device.MOBILE} {
            width:80vw;
            min-height:32vh;
            border-radius:1vh;
            /* border:1px solid green; */
        }
    `;
    const Label = styled.text`
        font-size:1.3vw;
        color:#3C4858;
        text-align:center;
        position:absolute;
        bottom:25%;
        user-select:none;
        @media ${device.MOBILE} {
            font-size:3vh;
        }
    `;
    const Image = styled.img`
        width:7vw;
        height:7vw;
        @media ${device.MOBILE} {
            padding-top:2vh;
            width:12vh;
            height:12vh;
        }
    `;
    return(
        <Div>
            <Image src={icon} alt={service}/>
            <Label>{service}</Label>
        </Div>
    )
}

export default ServiceCard;