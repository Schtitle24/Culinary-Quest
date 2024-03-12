import React from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ButtonSection = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center; 
  height: 100%; 
`;

const Button = styled.a`
  background-color: #EAE7B1;
  color: #065446;
  border: none;
  border-radius: 4px;
  font-family: Roboto, Arial, sans-serif;
  font-size: 18px;
  margin-left: 8px;
  cursor: pointer;
  padding: 8px 16px;
  text-decoration: none; /* Ensure button text is not underlined */
`;

function Footer() {
    return (
        <div className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#065446', color: '#EAE7B1', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h1 className="navbar-brand" style={{ color: '#EAE7B1', fontSize: '24px', fontWeight: 'bold' }}>Author's GitHub Links</h1>
            <ButtonSection>
                <Button href="https://github.com/Schtitle24">Winston</Button>
                <Button href="https://github.com/DiamondSClements">Diamond</Button>
                <Button href="https://github.com/Bdoherty1">Brian</Button>
                <Button href="https://github.com/JohnDennis2">John</Button>
            </ButtonSection>
        </div>
    );
}

export default Footer;
