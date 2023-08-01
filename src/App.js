import { Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import MovieList from './components/MovieList'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={< Home />} />
        <Route path="/movieList" element={< MovieList />} />
      </Routes>
    </div>
  );
}

export default App;
