import '../Login/Login.css'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/dashboard');
  }

  return (
    <div className='loginScreen'>
      <div>
        <form>
          <h1>Entre</h1>
          <input placeholder='Usuário' id='user' type='text'></input>
          <input placeholder='Senha' id='password' type='password'></input>
          <button onClick={handleClick}>Entrar</button>
          <a href='/cadastro'>Cadastre-se clicando aqui</a>

        </form>
      </div>
    </div>
  );
};

export default Login;
