import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.jsx'
import AuthPage from "./pages/AuthPage.jsx"
import Home from "./pages/Home.jsx"
// import NavBar from "./components/NavBar.jsx"
import StartQuest from './pages/StartQuest.jsx'
import Dashboard from './pages/Dashboard.jsx'
import SearchResults from './pages/SearchResults.jsx'
import SingleQuest from './pages/SingleQuest.jsx'

const router = createBrowserRouter([
        {
                path: '/',
                element: <App />,
                errorElement: <h1 className='display-2'>Wrong page!</h1>,
                children: [
                        {
                                index: true,
                                element: <Home />
                        },
                        {
                                path: '/AuthPage',
                                element: <AuthPage />
                        },
                        {
                                path: '/StartQuest',
                                element: <StartQuest />
                        },
                        {
                                path: '/Dashboard',
                                element: <Dashboard />
                        },
                        

                           {    path: '/SearchResults',
                            element: <SearchResults />
                        },
                        {
                                path: '/SingleQuest',
                                element: <SingleQuest />
                        },

                ],
        },

]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)


