import { Routes, Route, Link } from "react-router-dom";
import {ThemeProvider} from 'bootstrap';
import Home from './pages/Home';

function App() {
  return (
  <div className="div_body">
    <footer>sdf</footer>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </div>
  )
}

export default App;
