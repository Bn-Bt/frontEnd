import { useRef, useState } from "react";
import { Navigate, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import { GrFacebook } from "react-icons/gr";

function Signup() {
  const [success, setSuccess] = useState();
  const email = useRef();
  const password = useRef();
  const rePassword = useRef();
  const address = useRef();
  const regId = useRef();
  const contact = useRef();
  const sector = useRef();
  const navigate = useNavigate();
  const [userSignupInfo, setuserSignupInfo] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    address: "",
    regId: "",
    contact: "",
    sector: ""
  });
  const [checkValue, setcheckValue] = useState("student");

  const handleSignupChange = (e) => {
    const val = e.target.value;
    const name = e.target.name;
    setuserSignupInfo({ ...userSignupInfo, [name]: val });
  };


  const handleSubmit = (e) => {
    e.preventDefault(); //prevents reloading page on Submit
    setSuccess(true);
  };

  const postSignupData = async () => {
    const { name, email, password, confirmPassword, address, regId, contact, sector } = userSignupInfo;

    if (!email || !password || !confirmPassword) {
      toast.error("fill all the fields before sign up!!");
      return;
    }
    if (password != confirmPassword) {
      toast.error("Confirm Password doesn't Matches");
      return;
    }

  };



  return (
    <>
      {success ? (<>
        <section>
          <h1>You have signed up!</h1>
        </section>
      </>
      ) : (<div className="w-[50rem] px-4 py-4 text-lg m-10 border-8 rounded-[2rem]">
        <form className="flex flex-column" onSubmit={handleSubmit}>

          <div className="flex flex-wrap">
            <div>
              <label for="name" class="block text-sm font-medium text-neutral-600">
                {" "}
                Name of the Hospital{" "}
              </label>
              <div class="mt-1">
                <input
                  id="name"
                  name="name"
                  type="text"
                  autocomplete="email"
                  required=""
                  ref={email}
                  value={userSignupInfo.name}
                  class="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                  onChange={handleSignupChange}
                />
              </div>

              <label for="address" class="block text-sm font-medium text-neutral-600">
                {" "}
                Address{" "}
              </label>
              <div class="mt-1">
                <input
                  id="address"
                  name="address"
                  type="text"
                  required=""
                  ref={address}
                  value={userSignupInfo.address}
                  class="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                  onChange={handleSignupChange}
                />
              </div>
            </div>
            <div className="ml-5">
              <label for="regId" class="block text-sm font-medium text-neutral-600">
                {" "}
                Reg-Id{" "}
              </label>
              <div class="mt-1">
                <input
                  id="regId"
                  name="regId"
                  type="text"
                  autocomplete="regId"
                  required=""
                  ref={regId}
                  value={userSignupInfo.regId}
                  class="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                  onChange={handleSignupChange}
                />
              </div>
              <label for="contact" class="block text-sm font-medium text-neutral-600">
                {" "}
                Contact Us{" "}
              </label>
              <div class="mt-1">
                <input
                  id="contact"
                  name="contact"
                  type="number"
                  required=""
                  ref={contact}
                  value={userSignupInfo.contact}
                  class="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                  onChange={handleSignupChange}
                />
              </div>
            </div>
          </div>
          <label for="sector" class="block text-sm font-medium text-neutral-600">
            {" "}
            Sector{" "}
          </label>
          <div class="mt-1">
            <input
              id="sector"
              name="sector"
              type="text"
              required=""
              ref={sector}
              value={userSignupInfo.sector}
              class="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
              onChange={handleSignupChange}
            />
          </div>

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
              required=""
              ref={email}
              value={userSignupInfo.email}
              class="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
              onChange={handleSignupChange}
            />
          </div>
          <label for="password" class="block text-sm font-medium text-neutral-600">
            {" "}
            Password{" "}
          </label>
          <div class="mt-1">
            <input
              id="password"
              name="password"
              type="password"
              autocomplete="password"
              required=""
              ref={password}
              value={userSignupInfo.password}
              class="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
              onChange={handleSignupChange}
            />
          </div>
          <label for="password" class="block text-sm font-medium text-neutral-600">
            {" "}
            Confirm-Password{" "}
          </label>
          <div>
            <input
              id="password"
              name="password"
              type="password"
              autocomplete="password"
              required=""
              ref={rePassword}
              value={userSignupInfo.confirmPassword}
              class="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
              onChange={handleSignupChange}
            />
          </div>


          <button className="mt-4 mb-2 px-5 py-3 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 lg:px-10 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" onClick={postSignupData}>
            Sign Up
          </button>

          <hr className="hr" />
          <span className="mt-3">
            Already have an Account?
            <Link className="logInBtn" to="/user/login">
              <span className="ml-2 font-extrabold">Login</span>
            </Link>
          </span>
        </form>
      </div>)}
    </>
  );
}

export default Signup;
