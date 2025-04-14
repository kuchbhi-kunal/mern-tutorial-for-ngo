import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import Profile from './pages/Profile'
import About from './pages/About'
import SignIn from './pages/SignIn'
import Header from './components/header'
import PrivateRoute from './components/PrivateRoute'

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />

        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
        
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}
