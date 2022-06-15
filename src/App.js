import { Routes, Route, Link, Navigate } from "react-router-dom";
import {ThemeProvider} from 'bootstrap';
import Home from './pages/Home';
import logo from './pictures/logo/logo.svg'
import Navbar from './components/navbar/navbar';
import genRouteList from './routes/routes'

function App() {
  return (
  <div className="div_body">
    <footer>
      <Link to='/' className="link"><img src={logo} alt="logo" className="logo"/></Link>
    <Navbar />
    </footer>
    <Routes>
      <Route path="*" element={<Navigate to={'/'}  exact/>} />
      {
        genRouteList()
      }
    </Routes>
  </div>
  )
}

export default App;
