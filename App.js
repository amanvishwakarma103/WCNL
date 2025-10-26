import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Welcome from './components/Welcome';
import Counter from './components/Counter';
import FormExample from './components/FormExample';
import ListExample from './components/ListExample';
import RefExample from './components/RefExample';
import Home from './pages/Home';
import About from './pages/About';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <div className="components-section">
          <h1>React Experiment Components</h1>
          <Welcome name="User" />
          <Counter />
          <FormExample />
          <ListExample />
          <RefExample />
        </div>
      </div>
    </Router>
  );
}

export default App;
