import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import About from "./pages/About";
import Projects from "./pages/Projects"; 
import Resume from "./pages/Resume";
import Nav from "./components/Nav";
import Project1 from "./pages/Project1";
import Project2 from "./pages/Project2";
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <div className="h-screen">
      <div className="h-full bg-gradient-to-r bg-gradient-to-r from-cyan-500 to-blue-500">  
        <Nav/>
        <Routes> 
            <Route exact path="/resume" element={<Resume />} />
            <Route exact path="/fortune500_case" element={<Project2 />} />  
            <Route exact path="/cyclistic_case" element={<Project1 />} />  
            <Route exact path="/projects" element={<Projects />} /> 
            <Route exact path="/about" element={<About />} />
            <Route exact strict path="/" element={<App />} />
        </Routes>
        <div className='bg-gradient-to-r from-cyan-500 to-blue-500 bottom-0 text-center'>
          <p>Designed by Doris Morales</p>
          <p>@ 2023 Meraz Mamun</p>
        </div>
      </div> 
    </div>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
