import React from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';


function Header() {
    return (
        <div className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#065446', color: '#EAE7B1', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h1 className="navbar-brand" style={{ color: '#EAE7B1', fontSize: '16px', fontWeight: 'bold' }}>Culinary Quest</h1>

        </div>
    );
}

export default Header;