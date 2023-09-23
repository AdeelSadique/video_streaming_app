import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Videos from './components/Videos';
import Footer from './components/Footer';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
function App() {
  function loggedUserFunc(user) {
    setLoggedUser(user);
  }

  const [loggedUser, setLoggedUser] = useState();

  useEffect(() => {
    loggedUserFunc();

    return () => {};
  }, [loggedUser]);

  // console.log(loggedUser);

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/videos" element={<Videos />} />
          <Route
            path="/login"
            element={<Login loggedUserFunc={loggedUserFunc} />}
          />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/dashboard"
            element={<Dashboard loggedUser={loggedUser} />}
          />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
