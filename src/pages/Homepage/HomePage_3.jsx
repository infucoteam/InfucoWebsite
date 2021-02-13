import React, {useState, useEffect} from 'react';
import styled,{keyframes} from 'styled-components';
import { colors, device } from '../../helpers/constants';
import InfluencerCard from '../../components/InfluencerCard';
import MobileSlide from '../../components/MobileSlide';
import influencer1 from '../../assets/influencer-1.webp';
import influencer2 from '../../assets/influencer-2.webp';
import influencer3 from '../../assets/influencer-3.webp';
import influencer4 from '../../assets/influencer-4.webp';
import influencer5 from '../../assets/influencer-5.webp';
import influencer6 from '../../assets/influencer-6.webp';


const HomePage_3 = () => {

    const [active, setActive] = useState(0);
    const [slide, setS] = useState('left');
    const [view, setV] = useState();

    useEffect(() => {
        let width = window.innerWidth;
        if(width>900){
            setV('L');
        }
        else{
            setV('M');
        }
    })

    const Div = styled.div`
        width:100vw;
        height:100vh;
        background: #FAFBFE;
        display: flex;
        align-items:center;
        flex-direction:column;
        padding-top:7%;
        box-sizing:border-box;
        @media ${device.MOBILE} {
            padding-top:10%;
            height:auto;
        }
    `;
    const Label = styled.p`
        font-size:3.5vw;
        color:#69717C;
        text-align:center;
        display:flex;
        align-self:center;
        user-select:none;
        margin:0;
        @media ${device.MOBILE} {
            font-size:5vh;
            margin-bottom:10%;
        }
    `;
    const CardDiv = styled.div`
        width:100vw;
        height:80vh;
        display: flex;
        flex-grow:1;
        flex-basis:1;
        padding-top:5%;
        @media ${device.MOBILE} {
            height:45vh;
        }
    `;
    const IndicatorDiv = styled.div`
        width:3vw;
        height:10vh;
        display: flex;
        justify-content:space-between;
        @media ${device.MOBILE} {
            width:50vw;
        }
    `;
    const Indicator = styled.div`
        width:0.8vw;
        height:0.8vw;
        border-radius:100vw;
        background:#F45C4370;
        -webkit-tap-highlight-color: rgba(0,0,0,0);
        cursor: pointer;
        @media ${device.MOBILE} {
            width:1.3vh;
            height:1.3vh;
        }

    `;
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
    const Slide1 = styled.div`
        min-width:100vw;
        height:90%;
        /* background-color:#0033ff; */
        transform:translateX(${active==0?'0vw':'-100vw'});
        display:${active==0?'flex':'none'};
        animation:${slide==='left'?slideAnimationLeft:slideAnimationRight} 0.6s ease;
        /* display: flex; */
        justify-content:space-between;
        padding:0 5vw;
        box-sizing:border-box;
        align-items:center;
        @media ${device.MOBILE} {
            display:none;
        }
    `;
    const Slide2 = styled.div`
        min-width:100vw;
        height:90%;
        /* background-color:#e80808; */
        transform:translateX(${active==1?'0vw':'100vw'});
        display:${active==1?'flex':'none'};
        animation:${slide==='left'?slideAnimationLeft:slideAnimationRight} 0.6s ease;
        /* display: flex; */
        justify-content:space-between;
        padding:0 5vw;
        box-sizing:border-box;
        align-items:center;
        @media ${device.MOBILE} {
            display:none;
        }

    `;
    const Slide3 = styled.div`
        min-width:100vw;
        height:90%;
        /* background-color:#bdee0e; */
        transform:translateX(${active==2?'0vw':'200vw'});
        display:${active==2?'flex':'none'};
        animation:${slide==='left'?slideAnimationLeft:slideAnimationRight} 0.6s ease;
        /* display: flex; */
        justify-content:space-between;
        padding:0 5vw;
        box-sizing:border-box;
        align-items:center;
        @media ${device.MOBILE} {
            display:none;
        }

    `;
    const MobileSlide1 = styled.div`
        width:100vw;
        height:35vh;
        /* background-color:red; */
        display: flex;
        justify-content:center;
        display:${active==0?'flex':'none'};
        transform:translateX(${active==0?'0vw':'-100vw'});
        animation:${slide==='left'?slideAnimationLeft:slideAnimationRight} 0.6s ease;
        -webkit-tap-highlight-color: transparent;
        &:focus{
            outline:none;
        }
    `;
    const MobileSlide2 = styled.div`
        width:100vw;
        height:35vh;
        /* background-color:red; */
        display: flex;
        justify-content:center;
        display:${active==1?'flex':'none'};
        transform:translateX(${active==1?'0vw':'100vw'});
        animation:${slide==='left'?slideAnimationLeft:slideAnimationRight} 0.6s ease;
        -webkit-tap-highlight-color: transparent;
        &:focus{
            outline:none;
        }
    `;
    const MobileSlide3 = styled.div`
        width:100vw;
        height:35vh;
        /* background-color:red; */
        display: flex;
        justify-content:center;
        display:${active==2?'flex':'none'};
        transform:translateX(${active==2?'0vw':'200vw'});
        animation:${slide==='left'?slideAnimationLeft:slideAnimationRight} 0.6s ease;
        -webkit-tap-highlight-color: transparent;
        &:focus{
            outline:none;
        }
    `;
    const setIndicator = (index) => {
        setActive(index);
        if(index>active){
            setS('left');
        }
        else{
            setS('right');
        }
    }
    return(
        <Div>
            <Label>Top Influencers</Label>
            <CardDiv>
                <Slide1>
                    <InfluencerCard photo={influencer1} name='@TeeshaChopra'/>
                    <InfluencerCard photo={influencer2} name='@Mimansha'/>
                    <InfluencerCard photo={influencer3} name='@Mahi'/>
                </Slide1>
                <Slide2>
                    <InfluencerCard photo={influencer4} name='@GeetikaSingh'/>
                    <InfluencerCard photo={influencer5} name='@RoshniNingthoujam'/>
                    <InfluencerCard photo={influencer6} name='@NehaPathak'/>
                </Slide2>
                {/* <Slide3>
                    <InfluencerCard photo={influencer2} name='@Mimansha'/>
                    <InfluencerCard photo={influencer3} name='@HarshieKaur'/>
                </Slide3> */}
                <MobileSlide active={active} index={0} photo={influencer1} name='@TeeshaChopra' />
                <MobileSlide active={active} index={1} photo={influencer2} name='@Mimansha' />
                <MobileSlide active={active} index={2} photo={influencer3} name='@Mahi' />
                <MobileSlide active={active} index={3} photo={influencer4} name='@GeetikaSingh' />
                <MobileSlide active={active} index={4} photo={influencer5} name='@RoshniNingthoujam' />
                <MobileSlide active={active} index={5} photo={influencer6} name='@NehaPathak' />
                {/* <MobileSlide1>
                    <InfluencerCard photo={influencer1} name='@TeeshaChopra'/>
                </MobileSlide1>
                <MobileSlide2>
                    <InfluencerCard photo={influencer2} name='@TeeshaChopra'/>
                </MobileSlide2>
                <MobileSlide3>
                    <InfluencerCard photo={influencer3} name='@TeeshaChopra'/>
                </MobileSlide3> */}
            </CardDiv>
            <IndicatorDiv>
                {
                    view=='L'?(
                        <>
                            <Indicator onClick={()=>setIndicator(0)} style={{background:active==0?'#F45C43':'#F45C4340'}}/>
                            <Indicator onClick={()=>setIndicator(1)} style={{background:active==1?'#F45C43':'#F45C4340'}}/>
                            {/* <Indicator onClick={()=>setIndicator(2)} style={{background:active==2?'#F45C43':'#F45C4340'}}/> */}
                        </>
                    ):(
                        <>
                            <Indicator onClick={()=>setIndicator(0)} style={{background:active==0?'#F45C43':'#F45C4340'}}/>
                            <Indicator onClick={()=>setIndicator(1)} style={{background:active==1?'#F45C43':'#F45C4340'}}/>
                            <Indicator onClick={()=>setIndicator(2)} style={{background:active==2?'#F45C43':'#F45C4340'}}/>
                            <Indicator onClick={()=>setIndicator(3)} style={{background:active==3?'#F45C43':'#F45C4340'}}/>
                            <Indicator onClick={()=>setIndicator(4)} style={{background:active==4?'#F45C43':'#F45C4340'}}/>
                            <Indicator onClick={()=>setIndicator(5)} style={{background:active==5?'#F45C43':'#F45C4340'}}/>
                            {/* <Indicator onClick={()=>setIndicator(6)} style={{background:active==6?'#F45C43':'#F45C4340'}}/> */}
                            {/* <Indicator onClick={()=>setIndicator(7)} style={{background:active==7?'#F45C43':'#F45C4340'}}/> */}
                            {/* <Indicator onClick={()=>setIndicator(8)} style={{background:active==8?'#F45C43':'#F45C4340'}}/> */}
                        </>
                    )
                }
            </IndicatorDiv>
        </Div>
    )
}

export default HomePage_3;