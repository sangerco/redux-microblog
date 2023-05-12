import React from 'react';
import Header from './components/Header';
import NavBar from './components/NavBar';
import AppRoutes from './AppRoutes';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Home />
      <AppRoutes />
    </div>
  );
}

export default App;
