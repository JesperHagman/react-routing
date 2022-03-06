import './App.css';
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from "./pages/Home";
import About from './pages/About';
import Profile from './pages/Profile';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <Router>
      <Routes>
        {["/", "/home"].map((path) => (
          <Route exact path={path} element={<Home />} />
        ))}
        <Route path="/about" exact element={<About />} />
        <Route path="/profile" exact element={<Profile />} />
        <Route exact path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}
export default App;
