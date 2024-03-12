import React from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const ButtonSection = styled.div`
  display: flex;
  justify-content: flex-end; /* Align buttons to the right */
  align-items: center; /* Center buttons vertically */
  height: 100%; /* Ensure full height */
  padding: 10px 40px;
`;
const Button = styled.button`
  background-color: #EAE7B1;
  color: #065446;
  border: none;
  border-radius: 4px;
  font-family: Roboto, Arial, sans-serif;
  font-size: 18px;
  margin-left: 8px; /* Add some space between buttons */
  cursor: pointer;
  padding: 8px 16px;
`;
function Header() {
    return (
        <div className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#065446', color: '#EAE7B1', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h1 className="navbar-brand" style={{ color: '#EAE7B1', fontSize: '24px', fontWeight: 'bold', padding: 20px }}>Culinary Quest</h1>
            <ButtonSection>
                <Button>Sign Up</Button>
                <Button>Login</Button>
            </ButtonSection>
        </div>
    );
}
export default Header;