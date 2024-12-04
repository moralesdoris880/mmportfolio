import { NavLink } from "react-router-dom";
import { useLocation } from 'react-router-dom';

function Nav() {

  let activeStyle = {
    color: "#5BE3D5",
  }

  let location = useLocation();

  
    return (
    <div className="flex flex-row w-screen justify-between bg-blue-500 h-30 shadow-teal-300 shadow-xl">
    <p className="text-gray-100 my-auto ml-12 text-2xl tracking-wide font-medium font-mono">Meraz Mamun</p>
    <ul className="flex flex-row p-4 w-2/5 justify-around">
        <li className=" text-gray-100 text-xl hover:text-teal-200"><NavLink to="/" style={({ isActive }) =>
              location.pathname==='/' && isActive? activeStyle : undefined }>Home</NavLink></li>
        <li className=" text-gray-100 text-xl hover:text-teal-200"><NavLink to="/about" style={({ isActive }) =>
              isActive ? activeStyle : undefined }>About</NavLink></li>
        <li className=" text-gray-100 text-xl hover:text-teal-200"><NavLink to="/projects" style={({ isActive }) =>
              isActive ? activeStyle : undefined }>Projects</NavLink></li>
    </ul>
    </div>    
    );
  }
  
export default Nav;