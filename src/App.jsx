import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import MoviePage from "./pages/MoviePage"
import MovieBookingForm from "./pages/MovieBookingForm"

function App() {
  return (
    <div className="bg-primary
 h-[100vh] w-full overflow-x-hidden">
      {/* Navbar  */}
      <div className="xl:max-w-[1280px] w-full">
        <Navbar />
      </div>

      <div className="sm:mt-[130px] mt-[100px]">
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MoviePage />} />
          <Route path="/movie/:id/bookmovie" element={<MovieBookingForm />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
