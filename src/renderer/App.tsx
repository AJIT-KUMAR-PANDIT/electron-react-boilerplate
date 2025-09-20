import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LiveLMStudio from './pages/livelm';
import Settings from './pages/Settings';
import Layout from './Layout';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout pageTitle="LiveLM Studio">
              <LiveLMStudio />
            </Layout>
          }
        />
        <Route
          path="/settings"
          element={
            <Layout pageTitle="Settings">
              <Settings />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}
