import './App.css';
import Login from './pages/Login/Login';
import Cadastro from './pages/Cadastro/Cadastro';
import Dashboard from './pages/Dashboard/Dashboard';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} /> {/* Tela de Login */}
        <Route path="/cadastro" element={<Cadastro />} /> {/* Tela de Cadastro */}
        <Route path="/dashboard" element={<Dashboard />} /> {/* Tela Principal*/}
      </Routes>
    </Router>
  );
}

export default App;
