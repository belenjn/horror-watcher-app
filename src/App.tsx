import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ExplorePage } from './components/explore-page/ExplorePage'
import { Login } from './components/login/Login'
import { NotFound } from './components/not-found/NotFound'
import { Register } from './components/register/Register'
import { WelcomePage } from './components/welcome-page/WelcomePage'

function App() {

  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
      <Route
          path="/welcome"
          element={<WelcomePage/>}
        />
        <Route
          path="/login"
          element={<Login/>}
        />
          <Route
          path="/register"
          element={<Register/>}
        />
        <Route
          path="/"
          element={
           <ExplorePage/>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
