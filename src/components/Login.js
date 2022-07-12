import "../css/login.css";
import { useEffect, useRef, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import Dashboard from "./Dashboard";

function Login({success,setSuccess}) {
  const navigate = useNavigate();
  const [userLoginInfo, setuserLoginInfo] = useState();

  // const handleLoginChange = (e) => {
  //   const email = e.target[0].value;
  //   const password = e.target[1].value;
  //   setuserLoginInfo({email:email , password:password});
  // };

  const postLoginData = async () => {
    const { email, password } = userLoginInfo;

    //console.log(userLoginInfo);
    if (!email || !password) {
      toast.error("Fill all the fields before login!!");
      return;
    }
    else{
    try {
      const res = await axios.post("https://sahay-backend.herokuapp.com/login", {
        email,
        password,
      });
      // console.log(res);
      if (res.status === 200) {
        setSuccess(true);
        localStorage.setItem("userInfo", JSON.stringify(res.data));
        navigate("/");
        toast.success("Login successfull !!!! ");
      }
    } catch (error) {
      toast.error("Wrong credentials error in Verfication try again !!!! ");
    }
  }
};

  // Submitted Email-Password
  const handleSubmit = (e) => {
    const email = e.target[0].value;
    const password = e.target[1].value;
    setuserLoginInfo({email:email , password:password});
    e.preventDefault(); //prevents reloading page on Submit
  };

  // const handleForgotPassword = async () => {
  //   const { email } = userLoginInfo;

  //   const Loadtoast = toast.loading("logging in wait.....");

  //   if (!email) {
  //     toast.error("fill the email first!!");
  //     return;
  //   }
  //   try {
  //     const res = await axios.put("/api/student/forgotpassword", {
  //       email,
  //     });
  //     if (res) {
  //       toast.success(
  //         "sent the verification email to your registered email address !!"
  //       );
  //     }

  //     toast.dismiss(Loadtoast);
  //   } catch (error) {
  //     toast.dismiss(Loadtoast);

  //     toast.error("something went wrong cheack your internet connection!!");
  //     console.log("wrong credentials error in verfication try again !!!! ");
  //   }
  // };

  useEffect(() => {
    if(userLoginInfo){
    postLoginData();
    }
    console.log(userLoginInfo)
  },[userLoginInfo]);


  return (
    <>
    {success?
    (
      <Navigate to="/dashboard"></Navigate>
    ) :(
      <div className="w-100 px-4 py-4 text-lg m-10 border-8 rounded-[2rem]">
      <form className="loginBox flex flex-column" onSubmit={handleSubmit}>
        <label for="email" class="block text-sm font-medium text-neutral-600">
          {" "}
          Email address{" "}
        </label>
        <div class="mt-1">
          <input
            id="email"
            name="email"
            type="email"
            autocomplete="email"
            required
            
            class="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
          />
        </div>
        <label for="email" class="block text-sm font-medium text-neutral-600">
          {" "}
          Password{" "}
        </label>
        <div class="mt-1">
          <input
            id="password"
            name="password"
            type="password"
            required
          
            class="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
          />
        </div>
        <button type="submit"
          class="mt-5 mb-2 px-5 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 lg:px-10 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Log-in
        </button>

        {/* <button onClick={handleForgotPassword} className="mt-2">
          Forgot Password ?
        </button> */}
        <span className="mt-2 text-center">
          New to Sahay?
          <Link className="text-sky-600" to="/signup">
            <span className="text-blue ml-1">Create Account</span>
          </Link>
        </span>
      </form>
      <div className="poster"></div>
    </div>
    )
    }
    </>
  );
}

export default Login;
