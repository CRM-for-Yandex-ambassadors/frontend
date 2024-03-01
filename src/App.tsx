import { Route, Routes } from 'react-router';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import Navbar from './components/Navbar/Navbar';
import './index.css';
import Sending from './pages/Sending/Sending';
import Budget from './pages/Budget/Budget';
import Analitics from './pages/Analitics/Analitics';

function App() {
  return (
    <div className="page">
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Main />} />
        <Route path="/sending" element={<Sending />} />
        <Route path="/budget" element={<Budget />} />
        <Route path="/analitics" element={<Analitics />} />
      </Routes>
    </div>
  );
}

export default App;
