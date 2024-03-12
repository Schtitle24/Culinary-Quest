import React from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import CQimg from '../imgs/CQ-img.jpeg'; 

const ButtonSection = styled.div`
  display: flex;
  justify-content: flex-end; /* Align buttons to the right */
  align-items: center; /* Center buttons vertically */
  height: 100%; /* Ensure full height */
  padding: 10px 40px;
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

const DropdownButton = styled.button`
  background-color: #065446;
  background-image: url();
  color: inherit; 
  border: none;
  border-radius: 4px;
  font-family: Roboto, Arial, sans-serif;
  font-size: 18px;
  cursor: pointer;
  padding: 6px 12px; 
  
  transition: opacity 0.3s ease, background-color 0.3s ease; 

  &:hover {
    background-color: #D0CB92; 
  }
`;

const DropdownIcon = styled.img`
  width: 20px;
  height: 20px;
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 40px; /* Adjust as needed */
  right: 0;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: 1;
`;

const DropdownMenuItem = styled.div`
  padding: 10px;
  border-bottom: 1px solid #ccc;

  &:last-child {
    border-bottom: none;
  }
`;

function Header() {
    return (
        <div className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#065446', color: '#EAE7B1', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h1 className="navbar-brand" style={{ color: '#EAE7B1', fontSize: '24px', fontWeight: 'bold', padding: 20 }}>Culinary Quest</h1>
            <ButtonSection>
                <Button>Sign Up</Button>
                <Button>Login</Button>
                <div style={{ position: 'relative' }}>
                    <DropdownButton>
                        <DropdownIcon src={dropdownIcon} alt="Dropdown" />
                    </DropdownButton>
                    <DropdownMenu>
                        <DropdownMenuItem><Link to="/Home">Home</Link></DropdownMenuItem>
                        <DropdownMenuItem><Link to="/Dashboard">Dashboard</Link></DropdownMenuItem>
                        <DropdownMenuItem><Link to="/SearchResults">Search Results</Link></DropdownMenuItem>
                        <DropdownMenuItem><Link to="/LoginPage">Login Page</Link></DropdownMenuItem>
                        <DropdownMenuItem><Link to="/SingleQuest">Single Quest</Link></DropdownMenuItem>
                        <DropdownMenuItem><Link to="/CreateQuest">Create Quest</Link></DropdownMenuItem>
                    </DropdownMenu>
                </div>
            </ButtonSection>
        </div>
    );
}

export default Header;
