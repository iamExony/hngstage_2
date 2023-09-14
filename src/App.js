import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";
import Favorites from "./components/Favorites";

function App() {
  return (
    <>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" exact component={MovieList} />
          <Route path="/movie/:id" component={MovieDetails} />
          <Route path="/favorites" component={Favorites} />
        </Routes>
    </>
  );
}

export default App;
