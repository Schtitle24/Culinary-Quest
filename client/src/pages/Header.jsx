import React from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ButtonSection = styled.div`
  display: flex;
  justify-content: flex-end; 
  align-items: center; 
  height: 50%; 
`;

const Button = styled.button`
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
`;

function Header() {
    return (
        <div className="navbar navbar-expand-lg navbar-light" style={{ 
          backgroundColor: '#065446', 
          color: '#EAE7B1', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center' 
          }}>
            <h1 className="navbar-brand" style={{ 
              color: '#EAE7B1', 
              fontSize: '24px', 
              fontWeight: 'bold' 
              }}>Culinary Quest</h1>
            <ButtonSection>
                <Button as={Link} to="/AuthPage">Sign Up</Button>
                <Button as={Link} to="/AuthPage">Login</Button>
            </ButtonSection>
        </div>
    );
}

export default Header;