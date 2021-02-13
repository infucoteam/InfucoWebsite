import React from 'react';
import styled from 'styled-components';
import { colors, device } from '../../helpers/constants';
import ServiceCard from '../../components/ServiceCard';
// import serviceIcon1 from '../../assets/service-icon-1.png';
import S1 from '../../assets/services/dm.webp';
import S2 from '../../assets/services/co.webp';
import S3 from '../../assets/services/bp.webp';
import S4 from '../../assets/services/im.webp';
import S5 from '../../assets/services/smm.webp';
import S6 from '../../assets/services/cs.webp';


const HomePage_2 = () => {

    const Div = styled.div`
        width:100vw;
        height:100vh;
        background: #FAFBFE;
        display: flex;
        align-items:center;
        flex-direction:column;
        padding-top:2%;
        box-sizing:border-box;
        @media ${device.MOBILE} {
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
            font-size:5vh
        }
    `;
    const CardDiv = styled.div`
        width:80vw;
        height:90vh;
        /* border:1px solid red; */
        display: flex;
        flex-wrap:wrap;
        justify-content:space-evenly;
        flex: 1 0 35%;
        padding-top:3%;
        @media ${device.MOBILE} {
            flex-direction:column;
            flex:1 0 100%;
            flex-wrap:nowrap;
            height:90%;
        }
    `;
    return(
        <Div>
            <Label>Our Services</Label>
            <CardDiv>
                <ServiceCard icon={S1} service='Digital Marketing'/>
                <ServiceCard icon={S2} service='Campaign Organizers'/>
                <ServiceCard icon={S3} service='Brand Promotion'/>
                <ServiceCard icon={S4} service='Influencer Marketing'/>
                <ServiceCard icon={S5} service='Social Media Management'/>
                <ServiceCard icon={S6} service='Consultancy Services'/>
            </CardDiv>
        </Div>
    )
}

export default HomePage_2;