import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import NavBar from './components/nav-bar'
import LoginCard from './components/login-card'
import Home from './pages/nav-bar/home'
import PageOne from './pages/nav-bar/page-one'
import PageTwo from './pages/nav-bar/page-two'
import PageThree from './pages/nav-bar/page-three'

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/page-one' element={<PageOne/>} />
        <Route path='/page-two' element={<PageTwo/>} />
        <Route path='/page-three' element={<PageThree/>} />
      </Routes>
      <LoginCard />
    </Router>
  );
}

export default App;



{/* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> */}