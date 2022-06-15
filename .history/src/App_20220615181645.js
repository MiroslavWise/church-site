import { Routes, Route, Link } from "react-router-dom";
import {ThemeProvider} from 'bootstrap';
import Home from './pages/Home';

function App() {
  return (
  
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  )
}

export default App;
