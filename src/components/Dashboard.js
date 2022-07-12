import React from 'react'
import { Link } from 'react-router-dom';

function Dashboard() {
    return (
        <div>
            <div style={{ height: "100vh" }} class="flex flex-col overflow-hidden bg-slate-100 ">
                <div class="hidden md:flex md:flex-shrink-0">
                    <div class="flex flex-col w-64">
                        <div class="flex flex-col flex-grow px-4 mt-5">
                            <nav class="flex-1 space-y-1">
                                <ul>
                                    <li>
                                        <Link to="/overview">
                                            <span
                                                class="inline-flex mb-4 items-center w-full px-4 py-2 mt-1 text-base text-gray-900 transition duration-500 ease-in-out transform border-white rounded-lg hover:text-white hover:border-white focus:shadow-outline hover:bg-black"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    class="w-4 h-4"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                                    ></path>
                                                </svg>
                                                <span class="ml-4"> Overview</span>
                                            </span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/request">
                                            <span
                                                class="inline-flex mb-4 items-center w-full px-4 py-2 mt-1 text-base text-gray-900 transition duration-500 ease-in-out transform border-white rounded-lg hover:text-white hover:border-white focus:shadow-outline hover:bg-black"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    class="w-4 h-4"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                                    ></path>
                                                </svg>
                                                <span class="ml-4">Create Request</span>
                                            </span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to ='/view'>
                                            <span
                                                class="inline-flex mb-4 items-center w-full px-4 py-2 mt-1 text-base text-gray-900 transition duration-500 ease-in-out transform border-white rounded-lg hover:text-white hover:border-white focus:shadow-outline hover:bg-black"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    class="w-4 h-4"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                                    ></path>
                                                </svg>
                                                <span class="ml-4">View Request</span>
                                            </span>
                                        </Link>
                                    </li>
                                    <li>
                                        <a class="inline-flex mb-4 items-center w-full px-4 py-2 mt-1 text-base text-gray-900 transition duration-500 ease-in-out transform border-white rounded-lg hover:text-white hover:border-white focus:shadow-outline hover:bg-black" href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                            </svg>
                                            <span class="ml-4">Settings</span></a>
                                    </li>
                                </ul>

                            </nav>
                        </div>
                    </div>
                </div>

                <div>

                </div>
            </div>
            /</div>
    );
}



export default Dashboard;