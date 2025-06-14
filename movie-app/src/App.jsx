import './App.css'
import AppProvider from './context/AppProvider'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Search from './pages/Search'


const App = () => {
  return (
    <AppProvider>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/search' element={<Search />} />
          </Routes>
      </BrowserRouter>
    </AppProvider>
  )
}

export default App
