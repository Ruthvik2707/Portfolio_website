import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home_content/Content'
import Contact from './Components/Contact_content/Contact_content'
import About from './Components/About_content/About_content'
import Skills from './Components/sliding_cards/sliding_card'
import Blogs from './Components/UnderConstruction_page/UnderConstruction_content/UnderConstruction_content'
import Projects from './Components/Projects/Projects';

function App() {
  return (
    <div className="main">
      <div class='navbar'>
        <Navbar/>
      </div>
      <div class='page'>
        <div>
          <Home/>
        </div>
        <div class='about'>
          < About/>
        </div>
        <div class='skills'>
          <Skills/>
        </div>
        <div class='projects'>
          <Projects/>
        </div>
        <div>
          <Blogs/>
        </div>
        <div class='contact'>
          <Contact/>
        </div>
      </div>
    </div>
  );
}

export default App;
