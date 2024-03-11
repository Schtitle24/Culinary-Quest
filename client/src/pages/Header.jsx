import React from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const ButtonSection = styled.div`
  display: flex;
  justify-content: flex-end; /* Align buttons to the right */
  align-items: center; /* Center buttons vertically */
  height: 100%; /* Ensure full height */
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
        <div 
        className="navbar navbar-expand-lg navbar-light" 
        style={{ backgroundColor: '#065446', color: '#EAE7B1', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 
        className="navbar-brand" 
        style={{ color: '#EAE7B1', fontSize: '24px', fontWeight: 'bold', marginRight: 'auto' 
        }}>
            Culinary Quest
        </h1>

        <div className="collapse navbar-collapse" id="navBarSupportedContent">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <button 
                    className="btn btn-outline-secondary mr-2 " 
                    style={{ backgroundColor: '#EAE7B1', color: '#065446' 
                    }}>
                        Sign Up
                    </button>
                </li>
                <li className="nav-item">
                    <button 
                    className="btn btn-outline-secondary" 
                    style={{ backgroundColor: '#EAE7B1', color: '#065446' 
                    }}>
                        Login
                    </button>
                </li>
            </ul>
        </div>
    </div>
);
}

export default Header;