


import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import SearchResults from './pages/SearchResults';
import LoginPage from './pages/LoginPage';
import SingleQuest from './pages/SingleQuest';
import CreateQuest from './pages/CreateQuest';

const client = new ApolloClient({
    uri: '/graphql',
    cache: new InMemoryCache(),
});

function App() {
    return (
        <ApolloProvider client={client}>
            <Router>
                <div className="container">
                    <Header />
                    <Switch>
                        <Route path="/" exact component={<Home />} />
                        <Route path="/quest/:id" component={<SingleQuest />} />
                        <Route path="/dashboard" component={Dashboard} />
                        <Route path="/search" component={SearchResults} />
                        <Route path="/login" component={LoginPage} />
                        <Route path="/quest/:id" component={SingleQuest} />
                        <Route path="/create" component={CreateQuest} /> 
                    </Switch>
                    <Footer />
                </div>
            </Router>
        </ApolloProvider>
    );
}

export default App; 
