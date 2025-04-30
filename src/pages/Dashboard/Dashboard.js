import { useState } from 'react'

import '../Dashboard/Dashboard.css'
import historicoImg from '../../assets/img/historico.png'
import iventarioImg from '../../assets/img/iventário.png'
import suporteImg from '../../assets/img/suporte.png'

import Chamados from '../../modal/Chamados/Chamados'

const Dashboard = () => {

    const [tela, setTela] = useState('suporte')

    const handleChangeTela = (tela) => {
        if(tela === 'chamados'){
            window.location.reload()
        }
        else{
        setTela(tela)
        }
        console.log(tela)
    }

    return (
        <div className="dashboardScreen">
            <nav>
                <h1>SysDaten</h1>
                <a href='/'>sair</a>
            </nav>
            <div className='dashboardContainer'>
                <div className="sideBar">
                    <button onClick={() => handleChangeTela('chamados')}>
                        <img className='icon' src={suporteImg} alt='suporte'></img>
                    </button>
                    <button onClick={() => handleChangeTela('iventario')}>
                        <img className='icon' src={iventarioImg} alt='iventário'></img>
                    </button>
                    <button onClick={() => handleChangeTela('historico')}>
                        <img className='icon' src={historicoImg} alt='histórico de chamados'></img>
                    </button>


                </div>

                <div className="screensContainer">
                    {tela === 'suporte' && <Chamados/>}
                </div>
            </div>
        </div>
    )
}

export default Dashboard;