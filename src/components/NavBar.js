import React from "react";
import logo from "../images/logo.jpg"
import { Link } from "react-router-dom";
function NavBar({success,setSuccess}) {

  const onClick = ()=>{
    setSuccess(false)
  }
  return (
    <div>
      <div className="flex justify-between px-6 py-4">
        <div>
          <ul className="flex flex-row font-bold items-center text-sm">
            <Link to='/'>
              <img
                className="pr-7"
                src={logo}
                alt=""
              />
            </Link>
            <Link to='/'>
            <h1 className="text-3xl">Sahay</h1>
            </Link>
          </ul>
        </div>
        <div className="hidden lg:inline-flex">
          <ul className="flex flex-row font-bold text-sm items-center">
            
           
           {
            success?
            (
              <>
              
             <li className="px-2">
               <Link to="/signup">
               <button onClick={onClick} className="border-solid border-black border-2 rounded-full px-4 py-1 text-center hover:bg-black hover:text-white transition hover:ease-in-out duration-300">
                 Log Out!
               </button>
               </Link>
             </li>
              </>
            ):
            <>
              <li className="px-2">
              <Link to="/login"> <button className="border-solid border-black border-2 rounded-full px-4 py-1 text-center hover:bg-black hover:text-white transition hover:ease-in-out duration-300">
                 Sign In
               </button></Link>
             </li>
             <li className="px-2">
               <Link to="/signup">
               <button className="border-solid border-black border-2 rounded-full px-4 py-1 text-center hover:bg-black hover:text-white transition hover:ease-in-out duration-300">
                 Register
               </button>
               </Link>
             </li>
              </>
           }
          </ul>
        </div>
      </div>
      <div className="border my-1"></div>
    </div>
  );
}

export default NavBar;
