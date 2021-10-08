import logo from './logo.svg';
import './App.css';
import MyNavbar from './components/MyNavbar';
import Greeting from './components/Greeting';
import Projects from './components/Projects';
import Education from './components/Education';

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <Greeting />
      <Projects />
      <Education />
    </div>
  );
}

export default App;
