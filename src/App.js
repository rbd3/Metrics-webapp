import { Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={< />} />
        <Route path="/categories" element={< />} />
      </Routes>
    </div>
  );
}

export default App;
