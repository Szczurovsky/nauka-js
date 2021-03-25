import React, {FC} from "react";
import styled from "styled-components";
import {Profil} from "../LeftMenu/Profile"

const Wrapper =styled.div `
width:15vw;
height:100vh;
display:flex;
flex-direction:column;
border-right:2px black solid;
align-items: center;
`

export const LeftMenu: FC=() =>{
    return(
        <Wrapper>
            <Profil>

            </Profil>
        </Wrapper>
    )
}