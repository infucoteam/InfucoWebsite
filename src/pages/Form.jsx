import React, { useState } from 'react';
import styled from 'styled-components';
import { colors, device } from '../helpers/constants';


const Form = () => {

    const [active, setA] = useState('i');

    const Mdiv = styled.div`
        width:17vw;
        height:4vh;
        display:flex;
        justify-content:space-between;
        margin:0 auto;
        margin-top:3vh;
        margin-bottom:10vh;
        @media ${device.MOBILE} {
            width:50vw;
        }
    `;
    const Tab = styled.div`
        width:48%;
        height:auto;
        cursor:pointer;
        display:flex;
        align-items:flex-end;
        justify-content:center;
    `;
    const TabLabel = styled.p`
        font-size:15px;
        margin:0;
        letter-spacing:0.12vw;
        padding-bottom:0.5vh;
    `;
    const FormDiv = styled.div`
        width:100vw;
        height:auto;
        display:flex;
        justify-content:center;
    `;
    return(
        <>
        <Mdiv>
            <Tab onClick={() => setA('i')} style={{borderBottom:active=='i'?'4px solid red':'none'}}>
                <TabLabel>
                    Influencers
                </TabLabel>
            </Tab>
            <Tab onClick={() => setA('b')} style={{borderBottom:active=='b'?'4px solid red':'none'}}>
                <TabLabel>
                    Brands
                </TabLabel>
            </Tab>
        </Mdiv>
        <FormDiv>
        {
            active=='i'?(
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfYj09O5q2bsX2oBYG6t6M8rsMgoJA991wB9kW6hc1TgBRspg/viewform?embedded=true" width="600" height="1900" frameborder="0" marginheight="0" marginwidth="0">
                    Loading…
                </iframe>
            ):(
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfEQVGSwT_h0hhEA_cFJmpZMG9MCbvYr4TZpABwLzzP7mglag/viewform?embedded=true" width="600" height="1300" frameborder="0" marginheight="0" marginwidth="0">
                    Loading…
                </iframe> 
            )
        }
        </FormDiv>
        </>
    )
}

export default Form;