import { useState } from 'react'
import './App.css'
import About from "./components/About/About.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import ContactUs from "./components/ContactUs/ContactUs.jsx";
import Services from "./components/Services/Services.jsx";
import NewServices from "./components/NewServices/NewServices.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
            <Navbar />
            <main>
                <About />
                <ContactUs />
                <Services />
                <ContactUs />
                <NewServices />
            </main>
            <Footer />
    </>
  )
}

export default App
