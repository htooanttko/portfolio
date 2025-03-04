import { Stack } from '@mui/material'
import Navbar from './components/Navbar.component';
import Hello from './components/Hello.component';
import About from './components/About.component';
import Skills from './components/Skills.component';
import Services from './components/Services.component';
import Packages from './components/Packages.component';
import Footer from './components/Footer.component';

function App() {
  return (
    <>
      <Navbar />
      <Hello />
      <About />
      <Skills />
      <Services />
      <Packages />
      <Footer />
    </>
  );
}

export default App;
