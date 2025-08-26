import '../Cadastro/Cadastro.css'
import { useNavigate } from 'react-router-dom';

const Cadastro = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  }

  return (
    <div className='cadastroScreen'>

      <nav>
        <h2>SysDaten</h2>
        <ul>
          <li>
            <a href='/' className='suportelink'>Home</a>
          </li>
        </ul>
      </nav>
      <div>
        <form>
          <h1>Cadastre-se</h1>
          <br/>
          <input placeholder='seu nome' id='name' type="text"></input>
          <input placeholder='seu setor' id='sector' type="text"></input>
          <br/>
          <input placeholder='email' id='email' type='email'></input>
          <input placeholder='Senha' id='password' type='password'></input>
          <input placeholder='Confirme sua senha' id='password' type='password'></input>
          <button onClick={handleClick}>Cadastre-se</button>
          <a href='/'>Se já é cadastro, clique aqui para logar</a>
        </form>
      </div>
    </div>
  );
};

export default Cadastro;
