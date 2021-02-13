import React from 'react';
import styled from 'styled-components';
import { colors, device } from '../helpers/constants';


const TextInput = ({placeholder}) => {

    const Div = styled.div`
        width:45%;
        height:80%;
        /* background:yellow; */
        display: flex;
        align-items:center;
        @media ${device.MOBILE} {
            width:100%;
            max-height:40%;
        }
    `;
    const Input = styled.input`
        width:90%;
        height:60%;
        padding-left:2%;
        /* background:#FAFBFE; */
        border:0px;
        border-bottom:1px solid #00000030;
        &:focus{
            /* border-bottom:1px solid #ffe311; */
            outline:none;
        }
        @media ${device.MOBILE} {
            margin:0 auto;
            max-height:100%;
        }

    `;
    return(
        <Div>
            <Input placeholder={placeholder} type='text'/>
        </Div>
    )
}

export default TextInput;