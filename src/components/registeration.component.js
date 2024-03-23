import React, { Component } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class SignUp extends Component {
    constructor(props) {
        super(props);
        
    }

    handleSignUp = async (e) => {
        e.preventDefault();
        // Check if passwords match
        if (this.state.password !== this.state.confirmPassword) {
            this.setState({ passwordMatchError: 'Passwords do not match' });
            return;
        }
        try {
            // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint for sign-in
            const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/user/register`, {
                // email: this.state.email,
                // password: this.state.password,

                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email,
                password: this.state.password,
                phoneNumber: this.state.phoneNumber,
                location: this.state.location,
                jobTitle: this.state.jobTitle,
                role: this.state.role,
                imgURL: this.state.imgURL,
            });

            // Assuming you have received the token in the response
            const token = response.data.tokenId;

            // Store the token in local storage
            // localStorage.setItem('token', token);

            // Handle successful sign-in, e.g., redirect to another page
            console.log('Sign-in successful');
            setTimeout(() => {
                window.location.href = '/SignIn';
            }, 2000);
            // Use react-toastify to display a success message
            toast.success('registeration In successful!', {
                position: 'top-right',
                autoClose: 3000, // Close the alert after 3 seconds
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

        } catch (error) {
            // Handle sign-in error, e.g., display an error message
            console.error('Sign-in failed', error.response.data);

            // Use react-toastify to display an error message
            toast.error('registeration failed. Please check your credentials.', {
                position: 'top-right',
                autoClose: 5000, // Close the alert after 5 seconds
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    };

    render() {
        return (
            <div>
                <div>
                    <ToastContainer />
                </div>
                <div className="flex flex-col px-5 ">
                    <div class="">
                        <div class="container mt-3 px-6 mx-auto">
                            <section class=" text-gray-800 background-radial-gradient">
                                <div class="px-6 py-12 md:px-12 text-center lg:text-left bg-gradient-to-r rounded-lg from-[#000000] from-10% via-[#2c2393] via-30% to-[#60c2ff] to-90%">
                                    <div class="container mx-auto xl:px-32">
                                        <div class="grid lg:grid-cols-2 gap-12 items-center">
                                            <div class="mt-1 lg:mt-0">
                                                <h1 class="text-4xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12"
                                                    style={{ color: "hsl(218, 81%, 95%)" }}>
                                                    SkillHop <br /></h1>
                                                <p class="mb-4 opacity-90 lead text-stone-50 font-extrabold uppercase" >
                                                    Connect With Friends and Have Share For Fun
                                                </p>
                                            </div>
                                            <div class="mb-12 lg:mb-0">
                                                <div class="block rounded-lg shadow-lg bg-white px-6 py-12 md:px-12">
                                                    <h2 class="text-3xl font-bold font-sans">Sign Up <span class="text-indigo-900"></span></h2>
                                                    <h3 class="text-lg font-bold mb-3 text-left"> <span class="text-indigo-900">Welcome Newbie</span></h3>
                                                    <form className='' onSubmit={this.handleSignUp}>
                                                        <div class="">
                                                            <div className="grid justify-between grid-cols-2 py-1 form-group">
                                                                <div class=" col-span-1 text-left">
                                                                    Email Address
                                                                </div>
                                                                <div class="col-span-1">
                                                                    <input type="email"
                                                                        required
                                                                        placeholder=' first name'
                                                                        autoComplete='off'
                                                                        className="form-control "
                                                                        value={this.state.email}
                                                                        onChange={(e) => this.setState({ email: e.target.value })}
                                                                    />
                                                                </div>

                                                                {/* <p className="block text-lg font-medium text-red-900 dark:text-white">{this.state.nicError}</p> */}
                                                            </div>

                                                            <div className="grid grid-cols-2 py-2 form-group">
                                                                <div class="col-span-1 text-left">
                                                                    Password
                                                                </div>
                                                                <div className='col-span-1'>
                                                                    <input type="password"
                                                                        autoComplete='off'
                                                                        required
                                                                        placeholder='********'

                                                                        className="form-control"
                                                                        value={this.state.password}
                                                                        onChange={(e) => this.setState({ password: e.target.value })}
                                                                    />
                                                                </div>

                                                            </div>
                                                            <div className="grid grid-cols-2 py-2 form-group">
                                                                <div class="col-span-1 text-left">
                                                                    Confirm Password
                                                                </div>
                                                                <div className='col-span-1'>
                                                                    <input type="password"
                                                                        autoComplete='off'
                                                                        required
                                                                        placeholder='********'
                                                                        className="form-control"
                                                                        value={this.state.confirmPassword}
                                                                        onChange={(e) => this.setState({ confirmPassword: e.target.value })}
                                                                    />
                                                                </div>
                                                                {this.state.passwordMatchError && (
                                                                    <p className="text-red-500">{this.state.passwordMatchError}</p>
                                                                )}
                                                            </div>
                                                            <div className="mt-2  text-center align-middle form-group">
                                                                <input
                                                                    className="w-full px-6 py-2.5 bg-[#3399e2] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                                                    type="submit" value="Hop Up" />
                                                            </div>

                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignUp;
