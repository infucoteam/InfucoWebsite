import React from 'react';
import styled,{keyframes} from 'styled-components';
import { colors, device } from '../helpers/constants';
import InfluencerCard from './InfluencerCard';

const MobileSlide = ({active, index, photo, name}) => {

    const slideAnimationLeft = keyframes`
        0% {
            transform:translate(100vw,0);
            opacity:0;
        }
        100% {
            transform:translate(0,0);
            opacity:1;
        }
    `;
    const slideAnimationRight = keyframes`
        0% {
            transform:translate(-100vw,0);
            opacity:0;
        }
        100% {
            transform:translate(0,0);
            opacity:1;
        }
    `;
    const Div = styled.div`
        min-width:100vw;
        height:45vh;
        justify-content:center;
        display:${active==index?'flex':'none'};
        /* transform:translateX(${active==index?'0vw':active<index?'100vw':'-100vw'}); */
        animation:${active-1>index?slideAnimationRight:slideAnimationLeft} 0.5s ease;
        -webkit-tap-highlight-color: transparent;
        &:focus{
            outline:none;
        }
    `;
    return(
        <Div>
            <InfluencerCard photo={photo} name={name}/>
        </Div>
    )
}

export default MobileSlide;