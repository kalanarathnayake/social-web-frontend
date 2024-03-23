import React, { useEffect } from 'react';

import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const NavBar = () => {
  const isAuthenticated = localStorage.getItem('token');
  const firstName = localStorage.getItem('FirstName');

  const logout = () => {
    // Remove the token from local storage
    localStorage.removeItem('token');
    // Reload the page
    setTimeout(() => {
      window.location.href = '/';
      // window.location.reload();
    }, 2000);

    toast.success('Logging out!', {
      position: 'top-right',
      autoClose: 2000, // Close the alert after 3 seconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  useEffect(() => {
    // Set session timeout after 3 hours (in milliseconds)
    const sessionTimeout = 3 * 60 * 60 * 1000; // 3 hours
    const lastActivity = localStorage.getItem('lastActivity');

    if (lastActivity && Date.now() - lastActivity > sessionTimeout) {
      // Clear session storage and logout if session has timed out
      localStorage.clear();
      logout();
    }

    // Update last activity timestamp
    localStorage.setItem('lastActivity', Date.now().toString());

  }, []);

  return (
    <div>
      <ToastContainer />

      <nav className="top-0 left-0 flex flex-col w-full px-6 py-4 bg-[#b1e2ff] shadow sm:flex-row sm:text-left sm:justify-between sm:items-baseline">
        <div className="mb-2 sm:mb-0">
          <Link to="/" className="px-2 pt-1 pb-2 text-xl font-bold text-white no-underline duration-300 bg-[#486cc7] rounded-lg hover:text-blue-950 hover:font-sans ">SKILLHOP <span className="px-1 pb-px mb-1 font-serif font-extrabold text-[#ffffff] bg-[#0f123d] border-2 border-black rounded-md">SH</span></Link>
        </div>

        <div className='flex-grow text-lg font-light text-center hover:text-blue-dark'>
          <Link to="/" className={`m-2 font-semibold text-black no-underline duration-300 hover:text-blue-800 hover:font-normal ${isAuthenticated ? 'hidden' : ''}`}>Home</Link>

          {isAuthenticated ? (
            <>
              {/* <Link to="/event" className={`m-2 font-semibold text-black no-underline duration-300 hover:text-blue-800 hover:font-normal ${!isAuthenticated ? 'hidden' : ''}`}>Event Dashboard</Link>| */}
              {/* <Link to="/teamConfirm" className={`m-2 font-semibold text-black no-underline duration-300 hover:text-blue-800 hover:font-normal ${!isAuthenticated ? 'hidden' : ''}`}>Team Confirmation</Link>|
              <Link to="/scoreBoard" className={`m-2 font-semibold text-black no-underline duration-300 hover:text-blue-800 hover:font-normal ${!isAuthenticated ? 'hidden' : ''}`}>Score Board</Link>|
              <Link to="/scoreBoard2" className={`m-2 font-semibold text-black no-underline duration-300 hover:text-blue-800 hover:font-normal ${!isAuthenticated ? 'hidden' : ''}`}>Score Number Board</Link> */}
            </>
          ) : null}
        </div>

        <div className='text-lg font-light hover:text-blue-dark'>
          {isAuthenticated ? (
            <>
              <div class="flex gap-3">
                <a href="/profile" className="px-4 pt-1 pb-2 text-xl font-bold text-black no-underline duration-300 bg-[#a3dcfd] rounded-lg hover:text-blue-950 border  ">Hi_{firstName}</a>
                <button onClick={logout} type="button" class="px-2 pt-1 pb-2 text-xl font-bold text-white no-underline duration-300 bg-[#486cc7] rounded-lg hover:text-blue-950 hover:font-s ">Logout</button>

              </div>
              {/* <button onClick={logout} className="m-2 font-semibold text-black no-underline duration-300 hover:text-blue-800 hover:font-normal">Logout</button> */}
            </>
          ) : (
            <>
              <button type="button" class="px-2 pt-1 pb-2 text-xl font-bold text-white no-underline duration-300 bg-[#486cc7] rounded-lg hover:text-blue-950 hover:font-s ">
                <Link to="/SignIn" className="m-2 text-lg font-bold text-white no-underline uppercase duration-300 hover:text-blue-800 hover:font-lg">Sign In</Link>
              </button>

            </>
          )}
        </div>
      </nav>
    </div>
  );
};

export default NavBar;

