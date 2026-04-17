import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router";
import './index.css'
import App from './App.jsx'
import Login from './pages/Login.jsx';
import Profile from './pages/Profile.jsx';
import Home from './pages/Home.jsx';

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} > 
      <Route path="/" element={<Home/>}/> 
      <Route path='/login' element={<Login/>}/>
      <Route path='/profile' element={<Profile/>}/>
      </Route>
    </Routes>
  </BrowserRouter>,
);
