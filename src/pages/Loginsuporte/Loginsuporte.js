import '../Loginsuporte/Loginsuporte.css'
import { useNavigate } from 'react-router-dom';

const Loginsuporte = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/dashboard');
    }

    return (
        <div className='loginScreenSuporte'>

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
                    <h1>SysDaten</h1>
                    <input placeholder='Email' id='email' type='email'></input>
                    <input placeholder='Senha' id='password' type='password'></input>
                    <button onClick={handleClick}>Entrar</button>

                </form>
            </div>
        </div>
    );
};

export default Loginsuporte;
