import React, {useState} from 'react';
import { useLocation, Link } from 'react-router-dom'
import styled, {keyframes, css} from 'styled-components';
import HomePage_1 from './HomePage_1';
import HomePage_2 from './HomePage_2';
import HomePage_3 from './HomePage_3';
import Footer from './Footer';

const HomePage = () => {

    const [drawer, setD] = useState(false);
    const [close, setClose] = useState(false);

    const toggleDrawer = (status) => {
        setD(status);
        setClose(false);
    }
    const closeDrawer = () => {
        setClose(true);
        setTimeout(() => {
            setD(false);
        },10);
    }

    const slide =  keyframes`
        0% {
            transform:translate(100vw,0);
        }
        100% {
            transform:translate(0vw,0);
        }
    `;
    const rSlide =  keyframes`
        0% {
            transform:translate(0vw,0);
        }
        100% {
            transform:translate(100vw,0);
        }
    `;
    const Drawer = styled.div`
        width:100vw;
        max-width:100vw;
        height:100vh;
        max-height:100vh;
        background:#1F1F1F;
        position: relative;
        top:-95vh;
        z-index:1000;
        animation:${close? css`${rSlide} 0.4s ease`:css`${slide} 0.4s ease;`};
        box-sizing:border-box;
        padding-top:5vh;
        padding-left:4vh;
    `;
    const Dlink = styled.p`
        font-size:3vh;
        color:rgba(250, 251, 254, 0.8);
        margin-top:4.5vh;
        font-weight:300;
        user-select:none;
        letter-spacing:0.1vh;
    `;
    const goToInf = () => {
        let height = window.innerHeight;
        closeDrawer();
        setTimeout(() => {
            window.scrollTo(0, height*3.34);
        },100);
    }
    const goToServ = () => {
        let height = window.innerHeight;
        closeDrawer();
        setTimeout(() => {
            window.scrollTo(0, height);
        },100);
    }

    return(
        <div style={{background:drawer?'#1F1F1F':'#FAFBFE',maxWidth:'100vw',height:'auto',maxHeight:drawer?'100vh':'',overflowY:drawer?'hidden':'visible'}}>
            {
                drawer?(
                    <>
                    <HomePage_1 toggleDrawer={toggleDrawer}/>
                    <Drawer>
                        <p onClick={()=>closeDrawer()} style={{color:'#FFF',fontSize:'3vh',margin:0,float:'right',marginRight:'4vh',userSelect:'none'}}>X</p>
                        <Dlink style={{marginTop:'10vh'}}><Link onClick={()=>closeDrawer()} style={{textDecoration:'none',color:'inherit'}} to='/'>Home</Link></Dlink>
                        <Dlink><Link onClick={()=>goToServ()} style={{textDecoration:'none',color:'inherit'}}>Services</Link></Dlink>
                        <Dlink><Link onClick={()=>goToInf()} style={{textDecoration:'none',color:'inherit'}}>Influencers</Link></Dlink>
                        <Dlink><Link onClick={()=>closeDrawer()} style={{textDecoration:'none',color:'inherit'}} to='/contactus'>Contact us</Link></Dlink>
                    </Drawer>
                    </>
                ):(
                    <>
                        <HomePage_1 toggleDrawer={toggleDrawer}/>
                        <HomePage_2/>
                        <HomePage_3/>
                        <Footer/>
                    </>
                )
            }
        </div>
    )
}

export default HomePage;