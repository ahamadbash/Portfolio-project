import About from './About';
import './App.css';
import Contact from './Contact';
import Edu from './Edu';
import Hi from './Hi';
import Img from './Img';

function App() {
  return (
    <div className="App">
      <h1 className='portfolio'>Portfolio</h1>
      <div className='dis'>
      <Hi/>
      <Img/>
      </div> 
      <Edu/> 
      <About/>
      <Contact/>

    </div>
  );
}

export default App;
