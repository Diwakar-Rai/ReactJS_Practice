import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import Carousel from './Components/Carousel'
import { Routing } from './Routing/Routing';
import Footer from './Components/Footer';
function App() {
  return (
   <>
    <Header />
    <Navbar />
    <Carousel />
    <Routing />
    <Footer/>
   </>
  );
}

export default App;
