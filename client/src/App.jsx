import './App.css';
import React from 'react';



import Home from './pages/Home';
import Footer from './components/footer';
import Header from './components/Header'; 
// import NavBar from './components/NavBar';

// import { Navbar, NavDropdown, Nav, Container } from 'react-bootstrap';

function App() {
    return (
        <>
            <div className='App'>

                <div id="header">
                    <Header />
                </div>
              
                <main>
                    <Home />
                </main>

                <footer>
                    <Footer />
                </footer>


            </div>

        </>
    )
}

export default App;
