import React, { useState } from "react";
import { motion } from "framer-motion";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase.config";

import Logo from "../img/logo.png";
import avatar from "../img/avatar.png";
import { MdShoppingBasket, MdAdd, MdLogout } from "react-icons/md";
import { Link } from "react-router-dom";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";

const Header = () => {
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const [{ user }, dispatch] = useStateValue();

  const [isMenu, setIsMenu] = useState(false);

  const login = async () => {
    if (!user) {
      const {
        user: { refreshToken, providerData },
      } = await signInWithPopup(firebaseAuth, provider);
      dispatch({
        type: actionType.SET_USER,
        user: providerData[0],
      });
      localStorage.setItem("user", JSON.stringify(providerData[0]));
      console.log(providerData[0])
    } else {
      setIsMenu((prev) => !prev);
    }
  };

  const logout = () => {
    setIsMenu(!isMenu);
    localStorage.clear();
    dispatch({
      type: actionType.SET_USER,
      user: null,
    });
  };

  return (
    <header className="fixed z-50 w-screen p-6 px-16 bg-primary">
      {/** desktop & tablet */}
      <div className="flex w-full h-full items-center justify-between">
        <Link to={"/"} className="flex items-center gap-2">
          <img src={Logo} className="w-10 object-cover" alt="img" />
          <p className="text-headingColor text-xl font-bold ml-4 ">Sahay</p>
        </Link>

        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8">
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer " onClick = {()=>setIsMenu(false)}>
              Home
            </li>
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer " onClick = {()=>setIsMenu(false)}>
              Menu
            </li>
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer " onClick = {()=>setIsMenu(false)}>
              About Us
            </li>
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer " onClick = {()=>setIsMenu(false)}>
              Services
            </li>
          </ul>

          <div className="relative flex items-center justify-center">
            <MdShoppingBasket className="text-textColor text-2xl cursor-pointer" onClick = {()=>setIsMenu(false)}/>
            <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
              <p className="text-xs text-white font-semibold">2</p>
            </div>
          </div>
          <div className="relative">
            <motion.img
              whileTap={{ scale: 0.8 }}
              src={user ? user.photoURL : avatar}
              className="rounded-full w-8 min-w-[32px] cursor-pointer h-8 min-h-[32px] drop-shadow-xl"
              alt="userprofile"
              onClick={login}
            />
            {isMenu && (
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col items-center absolute top-10 right-0"
              >
                {user && user.email === "jainsparsh17@gmail.com" && (
                  <Link to={"/createItem"}>
                    <p className="px-8 py-2 flex items-center gap-1 cursor-pointer rounded-lg hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base" onClick = {()=>setIsMenu(false)}>
                      New Item
                      <MdAdd />
                    </p>
                  </Link>
                )}
                <p
                  className="px-10 py-2 flex rounded-lg items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base"
                  onClick={logout}
                >
                  Logout
                  <MdLogout />
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
