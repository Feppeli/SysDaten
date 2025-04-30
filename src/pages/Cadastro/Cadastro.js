import '../Cadastro/Cadastro.css'

const Cadastro = () => {

  const handleClick = () => {
    alert('funciona')
  }

  return (
    <div className='cadastroScreen'>
      <div>
        <form>
          <h1>Cadastre-se</h1>
          <input placeholder='Usuário' id='user' type='text'></input>
          <input placeholder='Senha' id='password' type='password'></input>
          <button onClick={handleClick}>Cadastre-se</button>
          <a href='/'>Se já é cadastro, clique aqui para logar</a>

        </form>
      </div>
    </div>
  );
};

export default Cadastro;
