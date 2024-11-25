import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";
import MovieList from "./routes/MovieList";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/movie/:id" element={<Detail/>}/>
        <Route path="/" element={<Home />}/>
        <Route path="/movielist" element={<MovieList/>}/>
      </Routes>
    </Router>
  );
}

export default App;