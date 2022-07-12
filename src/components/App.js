import React from "react";
import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import { Navigate, useNavigate } from "react-router-dom";
import Hero from "./Hero";
import Footer from "./Footer";
import Signup from "./Signup";
import { Container } from "react-bootstrap";
import { AuthProvider } from "../contexts/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";
import axios from 'axios';
import Add_Request from "./Add_Request";
import View from "./View";

function App() {

  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {

    if (localStorage.getItem('userInfo')) {
      navigate('/');
    }
  }, []);

  const [loginBg, setloginBg] = useState("");


  const [isLogin, setisLogin] = useState(true);
  const [userLoginInfo, setuserLoginInfo] = useState({
    email: "",
    password: "",
  });
  const [userSignupInfo, setuserSignupInfo] = useState({
    name: "",
    email: "",
    reg_no: "",
    address: "",
    number: "",
    sector: "",
    password: "",
    confirmPassword: "",
  });

  const handleLoginChange = (e) => {
    const val = e.target.value;
    const name = e.target.name;

    setuserLoginInfo({ ...userLoginInfo, [name]: val });
  };

  const handleSignupChange = (e) => {
    const val = e.target.value;
    const name = e.target.name;
    setuserSignupInfo({ ...userSignupInfo, [name]: val });
  };

  //login data post to backend

  const postLoginData = async () => {
    const { email, password } = userLoginInfo;

    //console.log(userLoginInfo);
    if (!email || !password) {
      toast.error("Fill all the fields before login!!");
      return;
    }
    try {
      const res = await axios.post("https://sahay-backend.herokuapp.com/login", {
        email,
        password,
      });
      // console.log(res);
      if (res) {
        localStorage.setItem("userInfo", JSON.stringify(res.data));
        navigate("/");
        toast.success("Login successfull !!!! ");
      }
    } catch (error) {
      toast.error("Wrong credentials error in Verfication try again !!!! ");
    }
  };

  //posting sign up data

  const postSignupData = async () => {
    const { name, email, reg_no, address, number, sector, password, confirmPassword } = userSignupInfo;

    if (!email || !password || !confirmPassword || !name || !reg_no || !address || !number || !sector) {
      toast.error("Fill all the fields before sign up!!");
      return;
    }
    if (password != confirmPassword) {
      toast.error(
        "Confirm Password doesn't Matches"
      );
      return;
    }
    try {
      const res = await axios.post("https://sahay-backend.herokuapp.com/sign", {
        name,
        email,
        reg_no,
        address,
        number,
        sector,
        password,
        confirmPassword,
      });

      if (res) {
        setuserSignupInfo({
          name: "",
          email: "",
          reg_no: "",
          address: "",
          number: "",
          sector: "",
          password: "",
          confirmPassword: "",
        });
      }
    } catch (error) {
      toast.error("Error in Sign up!!");
      console.log("error in sign in!", error.message);
    }
  };






  return (
    <>
      <div>
        <NavBar success={success} setSuccess={setSuccess} />
        <Routes>
          <Route path="/" element={<Hero />}></Route>
          <Route
            path="/signup"
            element={
              <AuthProvider>
                <div className="w-100" style={{ maxWidth: "400px" }}>
                  <Signup success={success} setSuccess={setSuccess} />
                </div>
              </AuthProvider>
            }
          ></Route>
          <Route
            path="/login"
            element={
              <AuthProvider>
                <div className="w-100" style={{ maxWidth: "400px" }}>
                  <Login success={success} setSuccess={setSuccess} />
                </div>
              </AuthProvider>
            }
          ></Route>
          <Route path='/request' exact element={<Add_Request />}>
          </Route>
          <Route path='/view' exact element={<View/>}>
          </Route>
          <Route path='/dashboard' element={<Dashboard />}></Route>
        </Routes>
        <Footer />
      </div>
      <ToastContainer position="top-center" />
    </>
  );

  // return (
  //   <>
  //     <div>
  //       <Router>
  //         <Routes>
  //           <Route exact element={<Hero />} path="/"></Route>
  //           <Route exact element={<Login />} path="/login"></Route>
  //           <Route exact element={<Signup />}></Route>
  //         </Routes>
  //       </Router>
  //     </div>
  //   </>
  // )
}

export default App;
