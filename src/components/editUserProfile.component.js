import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from "sweetalert2";

export default function UpdateUserProfile() {
    // State variables to manage component state
    const [id, setId] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [location, setLocation] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    const [role, setRole] = useState('');
    const [imgURL, setImgUrl] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordsMatch, setPasswordsMatch] = useState(true); // State to track if passwords match

    // Fetch supply data from the server on component mount
    useEffect(() => {
        setId(localStorage.getItem('UserDbId'));
        alert(id)
        setFirstName(localStorage.getItem('FirstName'));
        setLastName(localStorage.getItem('LastName'));
        setEmail(localStorage.getItem('Email'));
        setContactNumber(localStorage.getItem('ContactNumber'));
        setLocation(localStorage.getItem('Location'));
        setJobTitle(localStorage.getItem('JobTitle'));
        setRole(localStorage.getItem('Role'));
        setImgUrl(localStorage.getItem('ImgUrl'));
        setPassword(localStorage.getItem('Password'));

    }, [])

    // Function to check if passwords match
    useEffect(() => {
        setPasswordsMatch(password === confirmPassword);
    }, [password, confirmPassword]);

    // Function to delete a supply item
    const updateAPIData = (e) => {
    e.preventDefault();

    // Check if passwords match
    if (!passwordsMatch) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Passwords do not match',
            background: '#fff',
            showConfirmButton: true,
            confirmButtonText: 'Okay',
            confirmButtonColor: '#f2220f',
            iconColor: '#60e004',
            timer: 2800000
        });
        return; // Stop further execution
    }

    // Validate individual fields
    const missingFields = [];
    if (!firstName) missingFields.push('First Name');
    if (!lastName) missingFields.push('Last Name');
    if (!email) missingFields.push('Email');
    if (!password) missingFields.push('Password');
    if (!location) missingFields.push('Location');
    if (!contactNumber) missingFields.push('Contact Number');
    if (!jobTitle) missingFields.push('Job Title');
    if (!imgURL) missingFields.push('Profile Picture');

    if (missingFields.length > 0) {
        // Alert the user about missing fields
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: `Please fill out the following fields: ${missingFields.join(', ')}`,
            background: '#fff',
            showConfirmButton: true,
            confirmButtonText: 'Okay',
            confirmButtonColor: '#f2220f',
            iconColor: '#60e004',
            timer: 2800000
        });
        return; // Stop further execution
    }

    const user = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        location: location,
        phoneNumber: contactNumber,
        jobTitle: jobTitle,
        imgURL: imgURL,
        role: role,
    };

    console.log(user);

    axios.put(`http://localhost:5000/user/${id}`, user)
        .then(res => {
            console.log(res.status);
            if (res.status === 200) {
                Swal.fire({
                    icon: 'success',
                    title: 'Successful',
                    text: 'Supply has been Updated!!',
                    background: '#fff',
                    showConfirmButton: true,
                    confirmButtonText: 'Okay',
                    confirmButtonColor: '#0712e0',
                    iconColor: '#60e004',
                    timer: 2800000
                }).then(() => {
                    window.location = '/supply';
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Error in updating!',
                    background: '#fff',
                    showConfirmButton: true,
                    confirmButtonText: 'Okay',
                    confirmButtonColor: '#f2220f',
                    iconColor: '#60e004',
                    timer: 2800000
                });
            }
        });
};


    return (
        <div className='py-5'>
            <div class="bg-[#fff]">
                <div class="container mx-auto py-8">
                    <div class="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4 pb-16">
                        <div class="col-span-4 sm:col-span-3">
                            <div class="bg-white shadow rounded-lg p-6">
                                <div class="flex flex-col items-center">
                                    <img src="https://randomuser.me/api/portraits/men/94.jpg" class="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0">

                                    </img>
                                    <h1 class="text-xl font-bold "> {firstName}_{lastName}</h1>
                                    <p class="text-gray-700">{jobTitle}</p>
                                    <div class="mt-6 flex flex-wrap gap-4 justify-center">
                                        {/* <a href="#" class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"></a> */}
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
                                <h2 class="text-2xl font-bold mb-4">Update Your Bio</h2>
                                {/* <p class="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus est
                                    vitae tortor ullamcorper, ut vestibulum velit convallis. Aenean posuere risus non velit egestas
                                    suscipit. Nunc finibus vel ante id euismod. Vestibulum ante ipsum primis in faucibus orci luctus
                                    et ultrices posuere cubilia Curae; Aliquam erat volutpat. Nulla vulputate pharetra tellus, in
                                    luctus risus rhoncus id.
                                </p> */}

                                {/* <h2 class="text-xl font-bold mt-6 mb-4">Bio</h2> */}
                                <form className='' >
                                    <div class="">
                                        <div className="grid grid-cols-2 gap-4 form-group">
                                            <div class="">
                                                <label className='block mb-2 text-lg font-medium text-gray-900 '>
                                                    FirstName
                                                </label>
                                                <input type="text"
                                                    required

                                                    className="form-control"
                                                    value={firstName}
                                                    onChange={(e) => setFirstName(e.target.value)}

                                                />
                                            </div>
                                            <div className="form-group">
                                                <label className='block mb-2 text-lg font-medium text-gray-900 '>
                                                    Last Name
                                                </label>
                                                <input type="text"
                                                    required
                                                    className="form-control"
                                                    value={lastName}
                                                    onChange={(e) => setLastName(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <p />
                                        <div className="grid grid-cols-2 gap-4 form-group">

                                            <div className="form-group">
                                                <label className='block mb-2 text-lg font-medium text-gray-900 '>
                                                    Email
                                                </label>
                                                <input type="email"
                                                    required
                                                    className="form-control"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label className='block mb-2 text-lg font-medium text-gray-900 '>
                                                    Contact Number
                                                </label>
                                                <input type="number"
                                                    required
                                                    className="form-control"
                                                    value={contactNumber}
                                                    onChange={(e) => setContactNumber(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <p />
                                        <div className="grid grid-cols-2 gap-4 form-group">


                                            <div class="">
                                                <label className='block mb-2 text-lg font-medium text-gray-900 ' >
                                                    Location
                                                </label>
                                                <input
                                                    type="text"
                                                    required
                                                    value={location}
                                                    className="form-control"
                                                    onChange={(e) => setLocation(e.target.value)}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label className='block mb-2 text-lg font-medium text-gray-900 '>
                                                    Job Title
                                                </label>
                                                <input type="text"
                                                    required
                                                    className="form-control"
                                                    value={jobTitle}
                                                    onChange={(e) => setJobTitle(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <p />
                                        <div class="">
                                            <label className='block mb-2 text-lg font-medium text-gray-900 ' >
                                                Profile Picture
                                            </label>
                                            <input type="text"
                                                required
                                                className="form-control"
                                                value={imgURL}
                                                onChange={(e) => setImgUrl(e.target.value)}
                                            />
                                        </div>
                                        <div class="">
                                            <label className='block mb-2 text-lg font-medium text-gray-900 ' >
                                                Password
                                            </label>
                                            <input
                                                type="password"
                                                required
                                                className="form-control"
                                                // value={}
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                        </div>
                                        <div class="">
                                            <label className='block mb-2 text-lg font-medium text-gray-900 ' >
                                                Confirm Password
                                            </label>
                                            <input
                                                type="password"
                                                required
                                                className="form-control"
                                                value={confirmPassword}
                                                onChange={(e) => setConfirmPassword(e.target.value)}
                                            />
                                        </div>
                                        {!passwordsMatch && <p className="text-red-500">Passwords do not match</p>}
                                        <p />

                                        <div className="text-center align-middle form-group">
                                            <input className='text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mt-4 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800' type="submit" value="Update" onClick={updateAPIData} />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}