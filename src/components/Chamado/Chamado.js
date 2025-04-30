import './Chamado.css'

const Chamado = ({id, user, detail}) => {
    return (
        <div className="chamado">
            <div >
                <p>ID: {id}</p>
                <p>Usuário: {user}</p>
                <p>Detalhe: {detail}</p>
            </div>
            <div className='actions'>
                <button>Atender</button>
                <button>Fechar</button>
            </div>
        </div>
    )
}

export default Chamado;