import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from "sweetalert2";

export default function UserProfile() {
    // State variables to manage component state
    const [searchInput, setSearchInput] = useState('');
    const [filteredResults, setFilteredResults] = useState([]);
    const [APIData, setAPIData] = useState([]);
    const [packages, setPackages] = useState([]);
    const [UserId, setUserId] = useState([]);

    const firstName = localStorage.getItem('FirstName');
    const lastName = localStorage.getItem('LastName');
    const email = localStorage.getItem('Email');
    const contactNumber = localStorage.getItem('ContactNumber');
    const location = localStorage.getItem('Location');
    const jobTitle = localStorage.getItem('JobTitle');
    const role = localStorage.getItem('Role');
    const imgURL = localStorage.getItem('ImgUrl');
    const password = localStorage.getItem('ImgUrl');


    // Fetch supply data from the server on component mount
    useEffect(() => {
        setUserId(localStorage.getItem('UserDbId'))
        // alert(localStorage.getItem('UserDbId'))

        axios.get(`http://localhost:5000/user/${UserId}`)
            .then((response) => {
                setAPIData(response.data);
                let firstName = response.data.firstName;
                let { lastName, email, phoneNumber, location, jobTitle, role, imgURL, password } = response.data;
                localStorage.setItem('FirstName', firstName);
                localStorage.setItem('LastName', lastName);
                localStorage.setItem('Email', email);
                localStorage.setItem('ContactNumber', phoneNumber);
                localStorage.setItem('Location', location);
                localStorage.setItem('JobTitle', jobTitle);
                localStorage.setItem('Role', role);
                localStorage.setItem('ImgUrl', imgURL);
                localStorage.setItem('Password', password);

            })


    }, [])

    return (
        <div className='py-5'>
            <div class="bg-[#fff]">
                <div class="container mx-auto py-8">
                    <div class="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
                        <div class="col-span-4 sm:col-span-3">
                            <div class="bg-white shadow rounded-lg p-6">
                                <div class="flex flex-col items-center">
                                    <img src="https://randomuser.me/api/portraits/men/94.jpg" class="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0">

                                    </img>
                                    <h1 class="text-xl font-bold "> {firstName}_{lastName}</h1>
                                    <p class="text-gray-700">{jobTitle}</p>
                                    <div class="mt-6 flex flex-wrap gap-4 justify-center">
                                        <a href="/editProfile" class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Edit</a>
                                    </div>
                                </div>
                                <hr class="my-6 border-t border-gray-300"></hr>
                                {/* <div class="flex flex-col">
                                    <span class="text-gray-700 uppercase font-bold tracking-wider mb-2">Skills</span>
                                    <ul>
                                        <li class="mb-2">JavaScript</li>
                                        <li class="mb-2">React</li>
                                        <li class="mb-2">Node.js</li>
                                        <li class="mb-2">HTML/CSS</li>
                                        <li class="mb-2">Tailwind Css</li>
                                    </ul>
                                </div> */}
                            </div>
                        </div>
                        <div class="col-span-4 sm:col-span-9">
                            <div class=" shadow rounded-lg p-6">
                                <h2 class="text-2xl font-bold mb-4">About Me</h2>
                                {/* <p class="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus est
                                    vitae tortor ullamcorper, ut vestibulum velit convallis. Aenean posuere risus non velit egestas
                                    suscipit. Nunc finibus vel ante id euismod. Vestibulum ante ipsum primis in faucibus orci luctus
                                    et ultrices posuere cubilia Curae; Aliquam erat volutpat. Nulla vulputate pharetra tellus, in
                                    luctus risus rhoncus id.
                                </p> */}

                                <h2 class="text-xl font-bold mt-6 mb-4">Bio</h2>
                                <div class="mb-6">
                                    <div class="flex justify-between flex-wrap gap-2 w-full">
                                        <span class="text-gray-700 font-bold">Email</span>
                                        <p>
                                            <span class="text-gray-700 mr-2">{email}</span>
                                            {/* <span class="text-gray-700">2017 - 2019</span> */}
                                        </p>
                                    </div>
                                    <div class="flex justify-between flex-wrap gap-2 w-full">
                                        <span class="text-gray-700 font-bold">Contact Number</span>
                                        <p>
                                            <span class="text-gray-700 mr-2">{contactNumber}</span>
                                        </p>
                                    </div>
                                    <div class="flex justify-between flex-wrap gap-2 w-full">
                                        <span class="text-gray-700 font-bold">Location</span>
                                        <p>
                                            <span class="text-gray-700 mr-2">{location}</span>
                                        </p>
                                    </div>
                                    <div class="flex justify-between flex-wrap gap-2 w-full">
                                        <span class="text-gray-700 font-bold">Role</span>
                                        <p>
                                            <span class="text-gray-700 mr-2">{role}</span>
                                        </p>
                                    </div>
                                </div>
                                {/* <div class="mb-6">
                                    <div class="flex justify-between flex-wrap gap-2 w-full">
                                        <span class="text-gray-700 font-bold">Web Developer</span>
                                        <p>
                                            <span class="text-gray-700 mr-2">at ABC Company</span>
                                            <span class="text-gray-700">2017 - 2019</span>
                                        </p>
                                    </div>
                                    <p class="mt-2">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus est vitae
                                        tortor ullamcorper, ut vestibulum velit convallis. Aenean posuere risus non velit egestas
                                        suscipit.
                                    </p>
                                </div> */}
                                {/* <div class="mb-6">
                                    <div class="flex justify-between flex-wrap gap-2 w-full">
                                        <span class="text-gray-700 font-bold">Web Developer</span>
                                        <p>
                                            <span class="text-gray-700 mr-2">at ABC Company</span>
                                            <span class="text-gray-700">2017 - 2019</span>
                                        </p>
                                    </div>
                                    <p class="mt-2">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus est vitae
                                        tortor ullamcorper, ut vestibulum velit convallis. Aenean posuere risus non velit egestas
                                        suscipit.
                                    </p>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}