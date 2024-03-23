import React, { useState } from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import NavBarIcon from '../imgs/NavBarIcon.jpeg'; // Import your dropdown icon image
import Auth from '../utils/auth'


const HeaderContainer = styled.div`
  background-color: #065446;
  color: #EAE7B1;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 583px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const ButtonSection = styled.div`
  display: flex;
  align-items: center; /* Center buttons vertically */
  height: 100%;
  padding: 10px 20px;

  @media screen and (max-width: 583px) {
    padding: 10px;
    justify-content: center;
  }
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

  @media screen and (max-width: 583px) {
    margin: 8px;
  }
`;

const DropdownButton = styled(Button)`
  background-image: url(${NavBarIcon}); 
  background-size: cover;
  background-position: center;
  width: 40px; 
  height: 40px; 
  border-radius: 50%; 
  margin-right: 8px;
`;

const DropdownMenu = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')}; 
  position: absolute;
  top: 100%; 
  left: -150px;
  background-color: #D0CB92; 
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
  z-index: 1;
`;


const DropdownMenuItem = styled.div`
  padding: 10px;
  border-bottom: 1px solid #ccc;
  color: #3C6255;
  font-size: 14px;

  &:last-child {
    border-bottom: none;
  }
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
  padding: 20px;
  

  @media screen and (max-width: 320px) {
    font-size: 36px;
    padding: 10px;
  }

  @media screen and (max-width: 583px) {
    text-align: center;
  }
`;

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
  };

  return (
      <HeaderContainer>
          <Title>Culinary Quest</Title>
          <ButtonSection>
              <DropdownButton onClick={toggleDropdown} />
              <div style={{ position: 'relative' }}>
                  <DropdownMenu isOpen={isDropdownOpen}>
                      <DropdownMenuItem><Link to="/">Home</Link></DropdownMenuItem>
                      <DropdownMenuItem><Link to="/Dashboard">Dashboard</Link></DropdownMenuItem>
                      <DropdownMenuItem><Link to="/StartQuest">Create Quest</Link></DropdownMenuItem>
                  </DropdownMenu>
              </div>
              {!Auth.loggedIn() && (
                <>
                  <Button as={Link} to="/AuthPage">Sign Up</Button>
                  <Button as={Link} to="/AuthPage">Login</Button>
                </>
              )}
              {Auth.loggedIn() && (
                <Button onClick={Auth.logout}>Log Out</Button>
              )}
          </ButtonSection>
      </HeaderContainer>
  );
}

export default Header;