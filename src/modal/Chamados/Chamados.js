import { useState, useEffect } from "react";
import Chamado from "../../components/Chamado/Chamado";

import '../Chamados/Chamados.css'

const Chamados = () => {
    const [chamados, setChamados] = useState([]);

    useEffect(() => {
        const novosChamados = [];
        for (let i = 0; i < 60; i++) {
            novosChamados.push(
                <Chamado 
                    key={i} 
                    id={`#000000${i + 1}`} 
                    user="Douglas Felipe" 
                    detail="Reiniciar o Zoip" 
                />
            );
        }
        setChamados(novosChamados);
    }, []); 

    return (
        <div className="chamadosContainer">
            <div className="chamadosList">
                {chamados}
            </div>
        </div>
    );
};

export default Chamados;
