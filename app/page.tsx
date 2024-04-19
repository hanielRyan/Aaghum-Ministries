"use client";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Videos from "./components/Videos";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
export default function Home(){
  return(
    <div>
      <NavBar/>
      <Hero/>
      <About/>
      <Videos/>
      <Contact/>
      <Footer/>
    </div>
  )
}