import '../Login/Login.css'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/ticket');
  }

  return (
    <div className='loginScreen'>
      
      <nav>
        <h2>SysDaten</h2>
        <ul>
          <li>
            <a href='/login-suporte' className='suportelink'>Suporte</a>
          </li>
        </ul>
      </nav>

      <div>
        <form>
          <h1>Entre</h1>
          <input placeholder='Email' id='email' type='email'></input>
          <input placeholder='Senha' id='password' type='password'></input>
          <button onClick={handleClick}>Entrar</button>
          <a href='/cadastro'>Cadastre-se clicando aqui</a>

        </form>
      </div>
    </div>
  );
};

export default Login;
