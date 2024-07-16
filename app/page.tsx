import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Video from "./components/Video";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
export default function Home(){
  return(
    <div>
<Nav/>
<Hero/>
<About/>
<Video/>
<Contact/> 
<Footer/>
    </div>
  )
}