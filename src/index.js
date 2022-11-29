import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { LoginView } from './components/Login';
import { BrowserRouter,  Routes, Route  } from "react-router-dom";
import { AdminProfile } from './components/AdminProfile';
import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<LoginView/>}/>
        <Route path="profile/admin" element={<AdminProfile/>}/>
        </Routes>
        </BrowserRouter>,
   
);


