import React, { useEffect, useState } from "react";
import axios from "axios";
// import { async } from "@firebase/util";
import { useNavigate } from "react-router-dom";
const Add_Request = () => {

    const navigate = useNavigate()

    const [machineName, setMachineName] = useState("");
    const [email, setEmail] = useState("");
    const [quantity, setQuality] = useState("");
    const [submit, setsubmit] = useState(false);
    const postrequestdata = async () => {
        // console.log("comment")
        const result = await axios.post("https://sahay-backend.herokuapp.com/req_equip", { email, machineName, quantity })
        if (result.status == 200) {
            navigate("/dashboard")
        }
    }
    const onSubmit = (e) => {
        e.preventDefault();
        setsubmit(true)
    };
    useEffect(() => { if (submit) { postrequestdata() } console.log(email, quantity, machineName, submit) }, [submit])
    return (

        <>
            <form
                className="add-form flex flex-wrap justify-center align-middle w-[35rem] m-6 p-10 rounded-[2rem] border-solid border-2 border-gray-600"
                onSubmit={onSubmit}
            >
                <div className="border-none w-[25rem] m-2">
                    <label className="mb-2">Name/Model of the Machine Required</label>
                    <br />
                    <input
                        className="block w-full rounded-[1rem] p-1 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                        type="text"
                        value={machineName}
                        onChange={(e) => setMachineName(e.target.value)}
                    />
                </div>

                <div className="border-none w-[25rem] m-2">
                    <label className="mb-2">Email</label>
                    <br />
                    <input
                        className="block w-full rounded-[1rem] p-1 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                        type="text"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>


                <div className="border-none w-[25rem] m-2">
                    <label>Quantity</label>
                    <br />
                    <input
                        className="block w-full rounded-[1rem] p-1 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                        type="text"
                        onChange={(e) => setQuality(e.target.value)}
                    />
                </div>
                <button className="border-2 border-solid border-black  p-3 mt-5 w-[10rem] rounded-[2rem] hover:bg-black hover:text-white" type="submit">Submit</button>
            </form>
        </>
    );
};

export default Add_Request;