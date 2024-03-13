import React from "react";
import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';

const FooterContainer = styled.div`
  background-color: #065446;
  color: #EAE7B1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  
  bottom: 0;
  width: 100%;
`;

const FooterButtonSection = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 10px 20px;

  @media screen and (max-width: 583px) {
    padding: 10px;
    justify-content: center;
  }
`;

const FooterButton = styled.a`
  background-color: #065446;
  background-image: linear-gradient(to right, #3C6255 0%, #61876E 100%);
  color: inherit;
  border: none;
  border-radius: 4px;
  font-family: Roboto, Arial, sans-serif;
  font-size: 18px;
  margin-left: 8px;
  cursor: pointer;
  padding: 6px 12px;
  
  transition: opacity 0.3s ease, background-color 0.3s ease;

  &:hover {
    background-color: #D0CB92;
  }

  @media screen and (max-width: 320px) {
    font-size: 36px;
    padding: 10px;
   
}
`;

const FooterHeading = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin: 0;
`;

function Footer() {
    return (
        <FooterContainer>
            <FooterHeading>Author's GitHub Links</FooterHeading>
            <FooterButtonSection>
                <FooterButton href="https://github.com/Schtitle24">
                    <FaGithub style={{ marginRight: '5px' }} /> Winston
                </FooterButton>
                <FooterButton href="https://github.com/DiamondSClements">
                    <FaGithub style={{ marginRight: '5px' }} /> Diamond
                </FooterButton>
                <FooterButton href="https://github.com/Bdoherty1">
                    <FaGithub style={{ marginRight: '5px' }} /> Brian
                </FooterButton>
                <FooterButton href="https://github.com/JohnDennis2">
                    <FaGithub style={{ marginRight: '5px' }} /> John
                </FooterButton>
            </FooterButtonSection>
        </FooterContainer>
    );
}

export default Footer;