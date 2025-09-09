import './App.css'
import Header from './components/Header';
import About from './components/About';
import Home from './components/Home';
import Services from './components/Services';
import ContactUs from './components/ContactUs';
import Skill from './components/Skill';

function App() {
  

  return (
    <>
    <div><Header></Header></div>
    <div><Home></Home></div>
    <div><About></About></div>
    
    <div><Skill></Skill></div>
    <div><Services></Services></div>
    <div><ContactUs></ContactUs></div>
    </>
  )
}

export default App
