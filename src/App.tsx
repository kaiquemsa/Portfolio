import React, { useEffect, useState } from 'react';
import './App.css';
import DrawerAppBar from './components/navbar';

import Footer from './components/footer';
import Section from './components/section';

function App() {

  const [activyColor, setActivyColor] = useState(false);

  useEffect(function () {
    function posicionScroll() {
      if (window.scrollY > 10) {
        setActivyColor(true);
      } else {
        setActivyColor(false);
      }
    }
    window.addEventListener("scroll", posicionScroll);
  }, []);

  return (
    <>
    <DrawerAppBar action={activyColor}/>
    <Section />
    <Footer />
    </>
  );
}

export default App;
