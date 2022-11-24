import { NavLink } from "react-router-dom";
import { useLocation } from 'react-router-dom';

function Nav() {

  let activeStyle = {
    color: "#82CAFF",
  }

  let location = useLocation();

  
    return (
    <div className="flex flex-row w-screen justify-between bg-gray-900 h-30">
    <p className="text-gray-100 my-auto ml-12 text-2xl tracking-wide font-medium font-mono">Meraz Mamun</p>
    <ul className="flex flex-row p-4 w-2/5 justify-around">
        <li className=" text-gray-100 text-xl hover:text-sky-300"><NavLink to="/" style={({ isActive }) =>
              location.pathname==='/' && isActive? activeStyle : undefined }>Home</NavLink></li>
        <li className=" text-gray-100 text-xl hover:text-sky-300"><NavLink to="/about" style={({ isActive }) =>
              isActive ? activeStyle : undefined }>About</NavLink></li>
        <li className=" text-gray-100 text-xl hover:text-sky-300"><NavLink to="/projects" style={({ isActive }) =>
              isActive ? activeStyle : undefined }>Projects</NavLink></li>
        <li className=" text-gray-100 text-xl hover:text-sky-300"><NavLink to="/resume" style={({ isActive }) =>
              isActive ? activeStyle : undefined }>Resume</NavLink></li>
    </ul>
    </div>    
    );
  }
  
export default Nav;