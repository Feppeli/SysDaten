import '../Ticket/Ticket.css'
import { useNavigate } from 'react-router-dom';

const Ticket = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/dashboard');
  }

  return (
    <div className='ticketScreen'>
      
      <nav>
        <h2>SysDaten</h2>
        <ul>
          <li>
            <a href='/' className='suportelink'>Sair</a>
          </li>
        </ul>
      </nav>

      <div>
        <form>
          <h1>Preencha o formulário</h1>
            <textarea></textarea>
          <button onClick={handleClick}>Entrar</button>

        </form>
      </div>
    </div>
  );
};

export default Ticket;
