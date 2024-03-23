import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar.component";
import Footer from "./components/footer.component";


import { Home } from './components/home.component';
import SignIn from './components/signIn.component';
import SignUp from './components/registeration.component';
import UserProfile from './components/userProfile.component';
import UpdateUserProfile from './components/editUserProfile.component';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/signIn" element={< SignIn />} />
          <Route exact path="/signUp" element={< SignUp />} />
          <Route exact path="/profile" element={< UserProfile />} />
          <Route exact path="/editProfile" element={< UpdateUserProfile />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );

}

export default App;
