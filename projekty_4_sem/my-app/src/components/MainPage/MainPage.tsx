import React, {FC} from "react";
import styled from "styled-components";
import {LeftMenu} from "../LeftMenu/LeftMenu"
import {TopBar} from "../TopBar/TopBar";

const Wrapper = styled.div`
background-color: #dadada;
`;

const Content = styled.div`
    max-width:1200px;
    align-items:center;
    display:flex;
`;

export const MainPage: FC = () => {
    return(
        <Wrapper>
            <TopBar />

            <LeftMenu />
        </Wrapper>
    );
};

export default MainPage;