import React, { useContext } from 'react';
import { useState } from 'react';
import Header from './componenets/header/Header';
import './App.css';
import { UserContext } from './utils/ContextApi';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoutes';
import HomePage from './componenets/homepage/HomePage';
import { Personal } from './componenets/Personal/Personal';
import Front from './componenets/header/Front';

function App() {

  const [user, setUser] = useState(null)

  return (
    <div className="App">
      <UserContext.Provider value={{ user, setUser }}>
        <Header />
      </UserContext.Provider>

      <Routes>
        <Route path="/" element={<Front />} />
        <Route element={<ProtectedRoute user={user} />}>
          <Route path="homepage" element={<HomePage />} />
          <Route path="personal" element={<Personal />} />
        </Route>
      </Routes>

    </div>

  );
}

export default App;
