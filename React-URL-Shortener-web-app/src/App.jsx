import React, { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import './App.css'
import Home from './Home'

import Shortener from './Shortener'
import List from './List'

function App() {
  //const [count, setCount] = useState(0)
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('urls')) || [];
    setUrls(saved);
  }, []);

  const handleShorten = (longUrl, shortCode) => {
    setUrls([
      ...urls,
      { longUrl, shortCode, clicks: 0 }
    ]);
  };

  return (
    <>
      <h1>React URL Shortener Web App</h1>
    <Router>
      <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Shortener">Url Shortener</Link></li>
        <li><Link to="/List">List of the Shortened Urls</Link></li>
      </ul>
      </div>
      <nav>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Shortener' element={<Shortener/>}/>
        </Routes>
      </nav>
    </Router>
    </>
  )
}

export default App
