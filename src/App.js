import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/nav';
import './App.css'
import Courses from './components/courses/courses';
import Footer from './components/footer/footer';
import InfoPage from './components/inside-course/courseinside';
import RobotForm from './components/form/form';


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/courses" element={<Courses />} />
          <Route path="/info/:subject" element={<InfoPage />} />
          <Route path="/form" element={<RobotForm/>}/>
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
