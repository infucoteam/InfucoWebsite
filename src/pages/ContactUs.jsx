import React from 'react';
import styled from 'styled-components';
import { colors, device } from '../helpers/constants';
import TextInput from '../components/TextInput';
import ContactImage from '../assets/ccs.png';
import InstaLogo from '../assets/insta-logo.png';
import FacebookLogo from '../assets/facebook-logo.png';
import EmailLogo from '../assets/email-logo1.png';



const ContactUs = () => {
    const MainDiv = styled.div`
        width:100vw;
        height:100vh;
        display: flex;;
        flex-direction:column;
        background:#f2f3f5;
        @media ${device.MOBILE} {
            height:auto;
        }
    `;
    const Label = styled.p`
        font-size:3vw;
        margin:0;
        text-align:center;
        padding-top:3%;
        margin-bottom:-1%;
        color:#69717C;
        z-index:10;
        @media ${device.MOBILE} {
            font-size:5vh;
            padding-top:7%;
        }
    `;
    const Div = styled.div`
        width:100vw;
        height:87vh;
        display: flex;
        flex-direction:row;
        align-items:center;
        justify-content:center;
        background:#f2f3f5;
        @media ${device.MOBILE} {
            flex-direction:column;
            /* border:1px solid green; */
            height:auto;
            margin-bottom:8vh;
        }
    `;
    const Section1 = styled.div`
        width:25vw;
        height:60vh;
        position:relative;
        left:8%;
        z-index:10;
        border-radius:1vw;
        background-image: linear-gradient(to right top, ${colors.ORG2}, ${colors.ORG1});
        display: flex;
        justify-content:center;
        flex-direction:column;
        box-sizing:border-box;
        align-items:center;
        @media ${device.MOBILE} {
            height:30vh;
            width:80vw;
            left:0;
            top:8vh;
            border:2vw;
            border-radius:0.8vh;
        }
    `;
    const Image = styled.img`
        width:75%;
        height:70%;
        margin-bottom:6%;
    `;
    const Section2 = styled.div`
        width:65vw;
        height:70vh;
        background:#FFF;
        position:relative;
        left:-7%;
        border-radius:1vw;
        box-shadow:0px 5px 30px rgb(18 38 63 / 20%);
        box-sizing:border-box;
        padding: 10vh 0;
        padding-left:20%;
        @media ${device.MOBILE} {
            width:95vw;
            height:110vh;
            left:0;
            top:-5vh;
            padding:0;
            border-radius:0.8vh;
            /* padding-bottom:5vh; */
        }
    `;
    const Block1 = styled.div`
        width:90%;
        /* border:1px solid black; */
        height:25%;
        display: flex;
        flex-direction:row;
        justify-content:space-between;
        box-sizing:border-box;
        @media ${device.MOBILE} {
            /* border:1px solid yellow; */
            width:100%;
            margin-top:15vh;
            flex-direction:column;
            height:20%;
            justify-content:space-evenly;
        }
    `;
    const Block2 = styled.div`
        width:90%;
        /* border:1px solid black; */
        height:25%;
        display: flex;
        flex-direction:row;
        justify-content:space-between;
        @media ${device.MOBILE} {
            /* border:1px solid yellow; */
            width:100%;
            margin-top:1vh;
            flex-direction:column;
            justify-content:space-evenly;
            height:20%;
        }
    `;
    const Block3 = styled.div`
        width:90%;
        height:50%;
        /* border:1px solid red; */
        @media ${device.MOBILE} {
            height:40%;
            width:100%;
            display: flex;
        }
    `;
    const MsgBox = styled.textarea`
        width:97%;
        height:100%;
        border:1px solid rgba(0, 0, 0, 0.2);
        text-align:start;
        &:focus{
            outline:none;
        }
        padding:5% 2%;
        box-sizing:border-box;
        resize:none;
        @media ${device.MOBILE} {
            width:96%;
            margin:0 auto;
            /* margin-bottom:2vh; */
        }
    `;
    const Button = styled.div`
        width:9vw;
        height:2.2vw;
        background:${colors.ORG3};
        margin:0 auto;
        border-radius:2vw;
        position: relative;
        top:4%;
        left:-5%;
        display: flex;
        align-items:center;
        justify-content:center;
        letter-spacing:0.1vw;
        color:#FFF;
        cursor: pointer;
        box-shadow:0px 7px 10px #00000020;
        @media ${device.MOBILE} {
            width:40vw;
            height:5vh;
            border-radius:0.8vh;
            top:10%;
            margin-bottom:50vh;
        }
    `;
    const SocialContainer = styled.div`
        width:30%;
        height:15%;
        display: flex;
        justify-content:space-between;
        align-items:center;
        padding-top:7%;
        margin:0 auto;
        box-sizing:border-box;
    `;
    const Logo = styled.img`
        width:15%;
        cursor: pointer;
    `;
    return(
        <MainDiv>
            <Label>Contact Us</Label>
            <Div>
                <Section1>
                    <Image src={ContactImage} alt='Contact Us'/>
                    <SocialContainer>
                        <Logo src={InstaLogo} alt='Instagram'/>
                        <Logo src={FacebookLogo} alt='Facebook'/>
                        <Logo src={EmailLogo} alt='Email'/>
                    </SocialContainer>
                </Section1>
                <Section2>
                    <Block1>
                        <TextInput placeholder='First Name'/>
                        <TextInput placeholder='Last Name'/>
                    </Block1>
                    <Block2>
                        <TextInput placeholder='Mobile Number'/>
                        <TextInput placeholder='E-mail'/>
                    </Block2>
                    <Block3>
                        <MsgBox placeholder='Your Message'/>
                    </Block3>
                    <Button>SUBMIT</Button>
                </Section2>
            </Div>
        </MainDiv>
    )
}
export default ContactUs;