import Navbar from "./components/Navbar.component";
import Hello from "./components/Hello.component";
import About from "./components/About.component";
import Skills from "./components/Skills.component";
import Services from "./components/Services.component";
import Packages from "./components/Packages.component";
import Contact from "./components/Contact.component";
import Footer from "./components/Footer.component";
import { useRef } from "react";
import { Box } from "@mui/material";
import { Toaster } from "react-hot-toast";

function App() {
  const helloRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const servicesRef = useRef(null);
  const packagesRef = useRef(null);
  const contactRef = useRef(null);

  const handleScroll = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box sx={{ overflowX: "hidden" }}>
      <Toaster position="top-right" />
      <Navbar
        handleScroll={handleScroll}
        refs={{
          helloRef,
          aboutRef,
          skillsRef,
          servicesRef,
          packagesRef,
          contactRef,
        }}
      />

      <div ref={helloRef}>
        <Hello
          handleScroll={handleScroll}
          refs={{
            packagesRef,
          }}
        />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={skillsRef}>
        <Skills />
      </div>
      <div ref={servicesRef}>
        <Services />
      </div>
      {/* <div ref={packagesRef}>
        <Packages
          handleScroll={handleScroll}
          refs={{
            contactRef,
          }}
        />
      </div> */}
      <div ref={contactRef}>
        <Contact />
      </div>

      <Footer
        handleScroll={handleScroll}
        refs={{
          helloRef,
          aboutRef,
          skillsRef,
          servicesRef,
          packagesRef,
          contactRef,
        }}
      />
    </Box>
  );
}

export default App;
