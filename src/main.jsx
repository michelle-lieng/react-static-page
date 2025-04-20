import { createRoot } from 'react-dom/client'
import './index.css'

function Navbar() {
  return (
    <nav className="navbar">
        <img src="src\assets\react.svg" width="40px" alt="React logo"/>
        <h1>ReactFacts</h1>
    </nav>
  )
}

function MainContent() {
  return (
    <div className="mainContent">
      <h1>Fun facts about React</h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on GitHub</li>
        <li>Is maintained by Meta</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </div>
  )
}

const root = createRoot(document.querySelector('#root'));
root.render(
  <div id="container">
    <Navbar />
    <MainContent />
  </div>
);
