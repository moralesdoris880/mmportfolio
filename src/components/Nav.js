import { NavLink } from "react-router-dom";

function Nav() {
    return (
    <div className="flex flex-row w-screen justify-between bg-gray-900 h-30">
    <p className="text-gray-100 my-auto ml-12 text-2xl tracking-wide font-medium font-mono">Meraz Mamun</p>
    <ul className="flex flex-row p-4 w-2/5 justify-around">
        <li className="text-gray-100 text-xl hover:text-sky-300"><NavLink to="/">Home</NavLink></li>
        <li className="text-gray-100 text-xl hover:text-sky-300"><NavLink to="/about">About</NavLink></li>
        <li className="text-gray-100 text-xl hover:text-sky-300"><NavLink to="/projects">Projects</NavLink></li>
        <li className="text-gray-100 text-xl hover:text-sky-300"><NavLink to="/resume">Resume</NavLink></li>
    </ul>
    </div>    
    );
  }
  
export default Nav;