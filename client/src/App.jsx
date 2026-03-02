import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-white selection:text-black overflow-x-hidden w-full">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
