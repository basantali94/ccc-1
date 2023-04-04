import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Copmponents/Home/Home';
import Navs from './Copmponents/Nav/Navs';
import { Fragment } from 'react';
import Footer from './Copmponents/footer/Footer';
import { useState } from 'react';
import Contact from './Copmponents/contactUs/Contact';
function App() {

  const [scroll , setScroll] = useState('')
  const [cont , setCont] = useState('')
  const [us , setUs] = useState('')


  window.onscroll =() => {


    if(window.scrollY >= 500){
      setCont('container')
    }else{
      setCont('')
    }


    if(window.scrollY >= 600){
      setScroll('scroll')
    }else{
      setScroll('')
    }

    if(window.scrollY >= 1000){
      setUs('container')
    }else{
      setUs('')
    }


  }


  return (
    <div className="App">
      <>
        <Navs scroll={scroll} />
         <Home cont={cont} us ={us}/>
             
             <Contact />
          
         <Footer />
      </>
      </div>
  );
}

export default App;
