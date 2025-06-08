import './App.css'
import AppProvider from './context/AppProvider'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route} from "react-router-dom"


const App = () => {
  return (
    <AppProvider>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
      </BrowserRouter>
    </AppProvider>
  )
}

export default App
