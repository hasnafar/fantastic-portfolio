import './App.css';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Project from './components/Project';
import ContactMe from './components/ContactMe';

function App(props) {
  return (
    <div className="Main">
      <Header />
      <AboutMe />
      <Project />
      <ContactMe />
    </div>
  );
}

export default App;
