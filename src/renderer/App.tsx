import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LiveLMStudio from './pages/livelm';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LiveLMStudio />} />
      </Routes>
    </Router>
  );
}
