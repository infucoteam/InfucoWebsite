import React from 'react';
import styled, {keyframes} from 'styled-components';
import { colors, device } from '../../helpers/constants';
import Header from '../../components/Header';
import A from '../../assets/main/d.webp';

const HomePage_1 = (props) => {

    const Div = styled.div`
        max-width:100vw;
        height:100vh;
        box-sizing:border-box;
        background-color:#FAFBFE;
        overflow:hidden;
        @media ${device.MOBILE} {
            height:95vh;
        }
    `;
    const Div1 = styled.div`
        width:100%;
        height:100%;
        box-sizing:border-box;
        @media ${device.MOBILE} {
            height:90%;
            position: relative;
            top:10%;
        }
    `;
    const CurvedDiv = styled.div`
        width:105vw;
        height:94vh;
        box-sizing:border-box;
        background-image: linear-gradient(to bottom, ${colors.ORG2}, ${colors.ORG1});
        transform:rotate(-6.5deg);
        position:absolute;
        top:-12%;
        border-radius:2.5vw;
        @media ${device.MOBILE} {
            width:100vw;
            height:98vh;
            transform:rotate(0deg);
            border-radius:2vh;
        }
    `;
    const Box = styled.div`
        width:100vw;
        height:85vh;
        /* background-color:yellow; */
        z-index:10;
        position:relative;
        margin-top:5%;
        padding:0 9vw;
        display: flex;
        flex-direction:row;
        @media ${device.MOBILE} {
            padding:0;
            /* padding-top:-10%; */
            flex-direction:column;
            height:92vh;
            top:-4%;
        }
    `;
    const TitleDiv = styled.div`
        width:50%;
        height:90%;
        display:flex;
        flex-direction:column;
        padding-top:10%;
        padding-left:1%;
        @media ${device.MOBILE} {
            width:100%;
            height:25%;
            align-items:center;
            padding-left:0;
            padding-top:18%;
        }
    `;
    const TitleText1 = styled.text`
        margin:0;
        font-size:1.6vw;
        color:#FFF;
        font-weight:300;
        margin-bottom:1.5%;
        letter-spacing:0.15vw;
        user-select:none;
        @media ${device.MOBILE} {
            font-size:2.6vh;
            margin-bottom:2vh;
        }
    `;
    const TitleText2 = styled.text`
        margin:0;
        font-size:3.5vw;
        color:#FFF;
        font-weight:400;
        letter-spacing:0.1vw;
        margin-left:-0.5%;
        margin-bottom:2.5%;
        user-select:none;
        @media ${device.MOBILE} {
            font-size:5.5vh;
        }
    `;
    const TitleText3 = styled.text`
        margin:0;
        font-size:0.9vw;
        color:rgba(255, 255, 255, 0.8);
        font-weight:300;
        width:29vw;
        line-height:3vh;
        user-select:none;
        @media ${device.MOBILE} {
            /* font-size:1.5vh; */
            /* width:67vw; */
            /* color:rgba(255, 255, 255, 0.9); */
            display: none;
        }
    `;
    const ImageDiv = styled.div`
        width:50%;
        height:90%;
        /* border:1px solid black; */
        position: relative;
        left:-6%;  
        padding-top:4%;
        @media ${device.MOBILE} {
            width:100%;
            height:50%;
            margin-top:-7%;
            display: flex;
            align-items:center;
            justify-content:center;
            left:-3%;
        }
    `;
    const MainImage = styled.img`
        width:43vw;
        height:30vw;
        @media ${device.MOBILE} {
            width:40vh;
            height:27vh;
            padding-left:5%;
        }
    `;
    const floatText =  keyframes`{
        0%{
          transform: translateX(-100%);
        }
    }`;
    const BrandDiv = styled.div`
        width:60vw;
        height:12vh;
        background-color:#FAFBFE;
        position:relative;
        bottom:15%;
        z-index:10;
        margin:0 auto;
        box-shadow:0px 0px 20px rgb(18 38 63 / 30%);
        display: flex;
        box-sizing:border-box;
        justify-content:center;
        border-radius:0.4vw;
        overflow:hidden;
        @media ${device.MOBILE} {
            height:10vh;
            width:80vw;
            bottom:28%;
            border-radius:0.8vh;
        }

    `;
    const BrandContainer = styled.div`
        width:200vw;
        height:100%;
        display: flex;
        flex-direction:row;
        align-items:center;
        /* border-radius:5vw; */
        animation: ${floatText} 2s infinite;
        overflow:hidden;
        @media ${device.MOBILE} {
            width:90%;
        }
    `;
    const Brand = styled.p`
        width:100%;
        text-transform:uppercase;
        font-size:0.85vw;
        opacity:0.6;
        margin-right:1vw;
        letter-spacing:0.06vw;
        user-select:none;
        cursor: pointer;
        @media ${device.MOBILE} {
            font-size:1.5vh;
            width:20vh;
        }
    `;
    const CTA = styled.div`
        width:7.5vw;
        height:2.5vw;
        background:#ECECEC;
        border-radius:100vw;
        margin-top:5%;
        box-shadow:0px 10px 2vh rgb(18 38 63 / 20%);
        cursor:pointer;
        padding-top:-3%;
        @media ${device.MOBILE} {
            width:16vh;
            height:5vh;
            /* padding-top:-5vh; */
        }
        &:focus{
            outline:none;
        }
    `;
    const CTAText = styled.p`
        text-align:center;
        color:#69717C;
        user-select:none;
        @media ${device.MOBILE}{
            margin:0;
            padding-top:9%;
            font-size:2vh;
        }
    `;

    return(
        <Div>
            <Header toggleDrawer={props.toggleDrawer}/>
            <Div1>
            <Box>
                <TitleDiv>
                    <TitleText1>India's leading platform for</TitleText1>
                    <TitleText2>Digital Marketing</TitleText2>
                    <TitleText3>
                        One of the trusted organisation for your one and all digital marketing services. We value our customers, which makes us the leading organisation in this domain.
                    </TitleText3>
                    <CTA>
                        <CTAText>Get Started</CTAText>
                    </CTA>
                </TitleDiv>
                <ImageDiv>
                    {/* <MainImage src={home_illustration} alt='Digital Marketing'/> */}
                    <MainImage src={A} alt='Digital Marketing'/>
                </ImageDiv>
            </Box>
            {/* <BrandDiv>
                <BrandContainer>
                    <Brand>Super Smelly</Brand>
                    <Brand>Super Smelly</Brand>
                    <Brand>Super Smelly</Brand>
                    <Brand>Super Smelly</Brand>
                    <Brand>Super Smelly</Brand>
                    <Brand>Super Smelly</Brand>
                    <Brand>Super Smelly</Brand>
                    <Brand>Super Smelly</Brand>
                    <Brand>Super Smelly</Brand>
                    <Brand>Super Smelly</Brand>
                    <Brand style={{margin:0}}>Super Smelly</Brand>
                </BrandContainer>
            </BrandDiv>  */}
            </Div1>
            <CurvedDiv/>
        </Div>
    )
}

export default HomePage_1;