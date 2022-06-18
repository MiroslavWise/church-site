import { Routes, Route, Link, Navigate } from "react-router-dom";
import {ThemeProvider} from 'bootstrap';
import Home from './pages/Home';
import logo from './pictures/logo/logo.svg'
import youtube from './pictures/logo/icons8-youtube-play.svg'
import Navbar from './components/navbar/navbar';
import genRouteList from './routes/routes'

function App() {
  return (
  <div className="div_body">
    <div className="info">
      <text>Церковь "Слово Жизни" г. Столин</text>
      <text>Вс. 10:00 - 12:10</text>
    </div>
    <header>
      <Link to='/' className="link"><img src={logo} alt="logo" className="logo"/></Link>
    <Navbar />
    </header>
    <Routes>
      <Route path="*" element={<Navigate to={'/'}  exact/>} />
      {
        genRouteList()
      }
    </Routes>
    <footer>
      <text>Религиозная община «Церковь ЕХБ "Слово Жизни" г.Столин»</text>
      <a href='https://www.youtube.com/channel/UCdkoS1EHOQDsUNsEjYEN-vA' className="link" target='_blank '><img src={youtube} alt="youtube" className="youtube"/><text>Наш канал на YouTube</text></a>
      
    </footer>
  </div>
  )
}

export default App;
