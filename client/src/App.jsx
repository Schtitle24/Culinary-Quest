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


// Import necessary dependencies
// import './App.css';
// import React from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';

// Import your components and pages
// import Header from './components/Header';
// import Footer from './components/Footer';
// import Home from './pages/Home';
// import Dashboard from './pages/Dashboard';
// import SearchResults from './pages/SearchResults';
// import LoginPage from './pages/LoginPage';
// import SingleQuest from './pages/SingleQuest';
// import CreateQuest from './pages/CreateQuest';

// function App() {
//     return (
//         <Router>
//             <div className="App">
//                 <div id="header">
//                     <Header />
//                 </div>
              
//                 <main>
                   
                        // <Route path="/" exact component={<Home />} />
                        {/* <Route path="/dashboard" component={Dashboard} />
                        <Route path="/search" component={SearchResults} />
                        <Route path="/login" component={LoginPage} />
                        <Route path="/quest/:id" component={SingleQuest} />
                        <Route path="/create" component={CreateQuest} /> */}
                   
                {/* </main>

                <footer>
                    <Footer />
                </footer>
            </div>
        </Router>
    );
}

export default App; */}