import React, { FC } from "react";
import styled from "styled-components";
import profilowe from "../../icons/profilowe.jpg";
import "./LeftMenu.css";

const WrapMenu = styled.div`
    display: flex;
    background-color: #fff;
    width: 70%;
    height: 20%;
    margin-top: 5%;
    align-items: center;
    justify-content: center;
    align-items: center;
`;

const WrapImage = styled.div`
    position: relative;
`;
const Image = styled.div`
    border-radius: 90%;
`;
const Name = styled.div`
    color: royalblue;
`;
const JobTitle = styled.div`
    color: gray;
    font-size: 0.8em;
`;
const FastMenu = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #fff;
    width: 70%;
    height: 10%;
    margin-top: 1%;
    align-items: center;
    justify-content: center;
    align-items: center;
`;
const ShortcutWrap = styled.div``;
export const Profil: FC = () => {
    return (
        <React.Fragment>
            <WrapMenu>
                <WrapImage>
                    <Image>
                        <img
                            src={profilowe}
                            alt="profilowe"
                            className="profilowe"
                        />
                        <Name>Humberta Swift</Name>
                        <JobTitle>Job title - Company</JobTitle>
                    </Image>
                </WrapImage>
            </WrapMenu>
            <FastMenu>
                <ShortcutWrap>Your network</ShortcutWrap>
                <ShortcutWrap>Your publications</ShortcutWrap>
            </FastMenu>
        </React.Fragment>
    );
};
