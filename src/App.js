import './App.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Cookies from './components/Cookies'
import Home from './pages/Home'
import WWD from './pages/WWD'
import WWA from './pages/WWA'
import Resources from './pages/Resources';
import JoinUs from './pages/JoinUs'
import SFAworkday from './pages/SFAworkday'
import POworkday from './pages/POworkday'
import TFAworkday from './pages/TFAworkday'
import PM from './pages/PM'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Cookies />
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/whoweare" exact element={<WWA />} />
          <Route path="/whatwedo" exact element={<WWD />} />
          <Route path="/resources" exact element={<Resources />} />
          <Route path="/joinus" exact element={<JoinUs />} />'
          <Route path="/SeniorFunctionalAnalystWorkday" exact element={<SFAworkday />} />'
          <Route path="/ProductOwnerWorkday" exact element={<POworkday />} />'
          <Route path="/TechnoFunctionalAnalystWorkday" exact element={<TFAworkday />} />'
          <Route path="/ProjectManager" exact element={<PM />} />'
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
