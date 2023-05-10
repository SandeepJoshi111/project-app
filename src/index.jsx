import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Emergency from './pages/Emergency';
import Login from './components/LoginPage/Login';
import SignUp from './components/SignUp/SignUp';
import Patient from './pages/Patient';
import Doctor from './pages/Doctor';
import Hospital from './pages/Hospital';
import Services from './pages/Services';
import SignUpDoctor from './components/SignUp/SignUpDoctor';
import LoginDoctor from './components/LoginPage/LoginDoctor';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/services",
    element: <Services/>,
  },
  {
    path: "/hospital",
    element: <Hospital/>,
  },
  {
    path: "/emergency",
    element: <Emergency/>,
  },
 
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/logindoctor",
    element: <LoginDoctor/>,
  },
  {
    path: "/signup",
    element: <SignUp/>,
  },
  {
    path: "/signupdoctor",
    element: <SignUpDoctor/>,
  },
  {
    path: "/patient",
    element: <Patient/>,
  },
  {
    path: "/doctor",
    element: <Doctor/>,
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router}/>
    </ChakraProvider>
  </React.StrictMode>
);


