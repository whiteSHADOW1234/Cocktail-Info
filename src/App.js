import React from 'react';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Alco from './components/Alco';
import NonAlco from './components/NonAlco';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="body">
        <NavBar />
        <Header />
        <Alco />
        <NonAlco />
        <Footer />
    </div>
  );
};

export default App;
