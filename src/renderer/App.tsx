import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LiveLMStudio from './pages/livelm';
import Settings from './pages/Settings';
import RecentChats from './pages/RecentChats';
import Help from './pages/Help';
import Support from './pages/Support';
import StreamChat from './pages/StreamChat';
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
        <Route
          path="/recent-chats"
          element={
            <Layout pageTitle="Recent Chats">
              <RecentChats />
            </Layout>
          }
        />
        <Route
          path="/help-support"
          element={
            <Layout pageTitle="Help & Support">
              <Help />
            </Layout>
          }
        />
        <Route
          path="/support"
          element={
            <Layout pageTitle="Support">
              <Support />
            </Layout>
          }
        />
        <Route
          path="/stream-chat"
          element={
            <Layout pageTitle="Stream Chat">
              <StreamChat />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}
