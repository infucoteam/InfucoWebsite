import React from 'react';
import { Link } from "react-router-dom";
import styled, {keyframes} from 'styled-components';
import InfucoLogoText from '../assets/InfucoLogoText.webp';
import Drawer from '../assets/Drawer.webp';
import {device} from '../helpers/constants';

const Header = (props) => {
    const Div = styled.div`
        width:100vw;
        height:8vh;
        max-width:100vw;
        box-sizing:border-box;
        padding:0 10vw;
        padding-top:3%;
        padding-bottom:1.5%;
        display:flex;
        border-bottom:1px solid rgba(239, 242, 247, 0.25);
        @media ${device.MOBILE} { 
            padding:0 5vw;
            padding-top:3%;
            height:10vh;
            border:0px
        }
        z-index:1000;
        position:absolute;
    `;
    const LogoDiv = styled.div`
        width:30%;
        height:100%;
        /* border:1px solid white; */
        display:flex;
        align-items:center;
    `;
    const LogoImg = styled.img`
        width:10vh;
        position:relative;
        top:-0.6vh;
    `;
    const LinkDiv = styled.div`
        width:70%;
        height:100%;
        /* border:1px solid white; */
        display:flex;
        justify-content:flex-end;
        align-items:center;
        @media ${device.MOBILE} { 
            display: none;
        }
    `;
    const LinkBox = styled.div`
        margin-right:4%;
        height:100%;
        display:flex;
        align-items:center;
    `;
    const LinkText = styled.text`
        color:rgba(255, 255, 255, 0.8);
        font-size:1.9vh;
        font-weight:400;
        cursor: pointer;
        &:hover{
            color:#FFF;
        }
        @media (max-width:800px){
            font-size:2.2vw;
        }
    `;
    const DrawerDiv = styled.div`
        width:80%;
        height:100%;
        /* border:1px solid black; */
        display:flex;
        align-items:center;
        justify-content:flex-end;
        @media (min-width:500px){
            display: none;
        }
    `;
    const DrawerImage = styled.img`
        width:4vh;
        height:2.5vh;
        /* border:1px solid; */
    `;
    const slide =  keyframes`
        0% {
            transform:translate(100vw,0);
        }
        100% {
            transform:translate(0vw,0);
        }
    `;
    const DrawerB = styled.div`
        width:100vw;
        max-height:90vh;
        min-height:90vh;
        background:black;
        border:1px solid #ff0000;
        position:absolute;
        left:0;
        top:0;
        animation:${slide} 0.5s ease;
        
    `;
    const handleLink = (link) => {
        let height = window.innerHeight;
        switch(link){
            case 'influencer':
                window.scrollTo(0, height*2);

                break;
            case 'services':
                window.scrollTo(0, height);

                break;
            case 'brands':
                window.scrollTo(0, height);

                break;
            case 'conatactus':
                window.scrollTo(0, height*3);

                break;
        }
    }
    const toggleDrawerL = (status) => {
        props.toggleDrawer(status);
    }
    return(
            <Div>
                <LogoDiv>
                    <LogoImg src={InfucoLogoText} alt="Infuco"/>
                </LogoDiv>
                <LinkDiv>
                    <LinkBox><LinkText style={{color:'#FFF'}}>Home</LinkText></LinkBox>
                    <LinkBox><LinkText onClick={()=>{handleLink('services')}}>Services</LinkText></LinkBox>
                    <LinkBox><LinkText onClick={()=>{handleLink('influencer')}}>Influencers</LinkText></LinkBox>
                    {/* <LinkBox><LinkText><Link style={{textDecoration:'none',color:'inherit'}} to='/membership'>Membership</Link></LinkText></LinkBox> */}
                    <LinkBox><LinkText><Link style={{textDecoration:'none',color:'inherit'}} to='/contactus'>Contact us</Link></LinkText></LinkBox>
                </LinkDiv>
                <DrawerDiv>
                    <DrawerImage onClick={()=>toggleDrawerL(true)} src={Drawer} alt='Drawer'/>
                </DrawerDiv>
            </Div>
    )
}
export default Header;