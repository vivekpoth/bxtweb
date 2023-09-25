import './App.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import WWD from './pages/WWD'
import WWA from './pages/WWA'
import Resources from './pages/Resources';
import JoinUs from './pages/JoinUs'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/whoweare" exact element={<WWA />} />
          <Route path="/whatwedo" exact element={<WWD />} />
          <Route path="/resources" exact element={<Resources />} />
          <Route path="/joinus" exact element={<JoinUs />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
