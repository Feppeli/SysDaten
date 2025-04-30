import './App.css';
import Login from './pages/Login/Login';
import Cadastro from './pages/Cadastro/Cadastro';
import Dashboard from './pages/Dashboard/Dashboard';
import Loginsuporte from './pages/Loginsuporte/Loginsuporte';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Ticket from './pages/Ticket/Ticket';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} /> {/* Tela de Login */}
        <Route path="/cadastro" element={<Cadastro />} /> {/* Tela de Cadastro */}
        <Route path="/dashboard" element={<Dashboard />} /> {/* Tela Principal*/}
        <Route path="/login-suporte" element={<Loginsuporte />} /> {/* Tela Principal*/}
        <Route path="/ticket" element={<Ticket />} /> {/* Tela Principal*/}
      </Routes>
    </Router>
  );
}

export default App;
