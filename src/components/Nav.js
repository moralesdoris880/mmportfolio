import { NavLink } from "react-router-dom";

function Nav() {
    return (
    <div className="flex flex-row w-screen justify-between bg-blue-100 h-30">
    <p className="my-auto ml-12">Meraz Mamun</p>
    <ul className="flex flex-row p-4 w-2/5 justify-around">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/projects">Projects</NavLink></li>
        <li><NavLink to="/resume">Resume</NavLink></li>
    </ul>
    </div>    
    );
  }
  
export default Nav;