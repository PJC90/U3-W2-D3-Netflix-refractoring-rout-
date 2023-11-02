import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css'
import NavbarNetflix from './Components/NavbarNetflix'
import TitlePage from './Components/TitlePage'
import FooterNetflix from './Components/FooterNetflix'

import LogIn from './Components/LogIn'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import MovieDetails from './Components/MovieDetails'

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex h-100 flex-column">
        <NavbarNetflix />
        <TitlePage />
        <div className="flex-grow-1">
          <Routes>
            <Route element={<LogIn />} path="/login" />
            <Route element={<Home />} path="/" />
            <Route element={<MovieDetails />} path="/movie-details/:movieId" />
          </Routes>
        </div>
        <FooterNetflix />
      </div>
    </BrowserRouter>
  )
}

export default App
//prova a mettere il footer nel container
