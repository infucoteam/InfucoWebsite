import React from 'react';
import styled from 'styled-components';
import { colors,device } from '../../helpers/constants';
import InfucoLogoText from '../../assets/InfucoLogoText.webp';
import InstaLogo from '../../assets/insta-logo.png';
import FacebookLogo from '../../assets/facebook-logo.png';
import EmailLogo from '../../assets/email-logo1.png';

const Footer = () => {

    const Div = styled.div`
        width:100vw;
        height:70vh;
        overflow:hidden;
        display:flex;
        align-items:flex-end;
    `;
    const Div1 = styled.div`
        width:100%;
        height:100%;
        box-sizing:border-box;
        background-color:#FAFBFE;
        overflow:hidden;
        position:absolute;
    `;
    const CurvedDiv = styled.div`
        min-width:104vw;
        height:67vh;
        box-sizing:border-box;
        background-image: linear-gradient(to right top, ${colors.ORG2}, ${colors.ORG3});
        transform:rotate(-7deg);
        position: relative;
        left:-5%;
        bottom:-20%;
        border-radius:2vw;
        @media ${device.MOBILE} {
            min-width:120vw;
            transform:rotate(-9deg);
        }
    `;
    const ContentDiv = styled.div`
        width:100vw;
        height:30vw;
        transform:rotate(7deg);
        position: relative;
        left:5vw;
        display: flex;
        flex-direction:column;
        align-items:center;
        bottom:5vh;
        @media ${device.MOBILE} {
            height:80%;
            transform:rotate(9deg);
        }
    `;
    const BottomDiv = styled.div`
        width:60%;
        height:12%;
        /* background:rgba(94, 255, 0, 0.371); */
        position:absolute;
        top:85%;
        display: flex;
        justify-content:space-between;
        align-items:flex-end;
        margin:0 auto;
        @media ${device.MOBILE} {
            height:20%;
            width:100%;
        }
    `;
    const BtText1 = styled.p`
        font-size:0.7vw;
        color:#e3e9f0;
        opacity:0.8;
        letter-spacing:1px;
        user-select:none;
        @media ${device.MOBILE} {
            font-size:1.5vh;
            padding-left:5%;
            margin: 0 auto;
            padding-bottom:4%;
            letter-spacing:0.5px;
        }
    `;
    const BtText2 = styled.p`
        font-size:0.75vw;
        color:#e3e9f0;
        letter-spacing:1.2px;
        cursor: pointer;
        font-weight:500;
        user-select:none;
        @media ${device.MOBILE} {
            display: none;
        }
    `;
    const TopDiv = styled.div`
        width:100vw;
        height:70%;
        /* background:yellow; */
        position: relative;
        top:15%;
        display: flex;
        @media ${device.MOBILE} {
            width:100%;
            top:20%;
        }
    `;
    const Section1 = styled.div`
        width:50%;
        height:100%;
        /* background:green; */
        padding-left:20%;
        padding-top:8%;
        box-sizing:border-box;
        /* border:2px solid yellow; */
        @media ${device.MOBILE} {
            padding-left:9%;
            padding-top:17%;
            width:60%;
        }
    `;
    const Section2 = styled.div`
        width:50%;
        height:100%;
        @media ${device.MOBILE} {
            width:40%;
        }
    `;
    const FooterLogo = styled.img`
        width:6vw;
        @media ${device.MOBILE} {
            width:10vh;
        }
    `;
    const CompanyText = styled.p`
        font-size:0.8vw;
        color: rgba(255, 255, 255, 0.6);
        width:68%;
        line-height:2.8vh;
        letter-spacing:0.6px;
        text-align:justify;
        margin-left:-0.5%;
        padding-top:1%;
        user-select:none;
        @media ${device.MOBILE} {
            font-size:1.4vh;
            width:90%;
            line-height:2vh;
            letter-spacing:0.4px;
        }
    `;
    const LogoBox = styled.div`
        width:80%;
        height:100%;
        background-image: linear-gradient(to right, rgba(255, 255, 255, 0.1), #FFFFFF04);
        border-radius:2vw;
        transform:rotate(-12deg);
        position: relative;
        top:-10%;
    `;
    const LogoContainer = styled.div`
        width:100%;
        height:80%;
        /* background:rgba(255, 255, 0, 0.1); */
        transform:rotate(12deg);
        position: relative;
        top:48%;
        padding-left:5%;
        @media ${device.MOBILE} {
            top:37%;
        }
    `;
    const FooterLogoTitle = styled.p`
        font-size:0.8vw;
        color: #ffffff;
        font-weight:300;
        user-select:none;
        @media ${device.MOBILE} {
            font-size:1.6vh;
            margin-bottom:3vh;
        }
    `;
    const LogoDiv = styled.div`
        width:30%;
        height:40%;
        /* background:rgba(255, 255, 255, 0.446); */
        display: flex;
        justify-content:space-between;
        padding-top:3%;
        box-sizing:border-box;
        @media ${device.MOBILE} {
            width:90%;
        }
    `;
    const Logo = styled.div`
        width:2.5vw;
        height:2.5vw;
        background:rgba(255, 255, 255, 0.08);
        border-radius:100vw;
        display: flex;
        align-items:center;
        justify-content:center;
        cursor: pointer;
        padding-top:1%;
        box-sizing:border-box;
        @media ${device.MOBILE} {
            min-width:4vh;
            height:4vh;
        }
    `;
    const LogoImg = styled.img`
        width:1.2vw;
        @media ${device.MOBILE} {
            width:2vh;
        }
    `;
    const LogoImg1 = styled.img`
        width:1.1vw;
        height:1vw;
        @media ${device.MOBILE} {
            width:2vh;
            height:1.9vh;
        }
    `;
    const LogoImg2 = styled.img`
        width:1.1vw;
        height:1.1vw;
        @media ${device.MOBILE} {
            width:2.1vh;
            height:2.3vh;
        }
    `;


    return(
        <Div>
            <CurvedDiv>
                <ContentDiv>
                    <TopDiv>
                        <Section1>
                            <FooterLogo src={InfucoLogoText} alt='Infuco'/>
                            <CompanyText>Infuco is a unique and Innovative platform for digital marketers and social media influencer. A complete and perfect solution for your one and all needs.</CompanyText>
                        </Section1>
                        <Section2>
                            <LogoBox>
                                <LogoContainer>
                                    <FooterLogoTitle>SOCIAL NETWORK</FooterLogoTitle>
                                    <LogoDiv>
                                        <Logo><a href='https://www.instagram.com/infucoteam/'><LogoImg src={InstaLogo} alt=''/></a></Logo>
                                        <Logo><a href='https://www.instagram.com/infucoteam/'><LogoImg1 src={FacebookLogo} alt=''/></a></Logo>
                                        <Logo><a href='mailto:infucoteam@gmail.com'><LogoImg2 src={EmailLogo} alt=''/></a></Logo>
                                    </LogoDiv>
                                </LogoContainer>
                            </LogoBox>
                        </Section2>
                    </TopDiv>
                    <BottomDiv>
                        <BtText1>© 2020 Infuco Inc.All rights reserved.</BtText1>
                        <BtText2><a style={{textDecoration:'none',color:'inherit'}} href="mailto:infucoteam@gmail.com">infucoteam@gmail.com</a></BtText2>
                    </BottomDiv>
                </ContentDiv>
            </CurvedDiv>
        </Div>
    )
}

export default Footer;