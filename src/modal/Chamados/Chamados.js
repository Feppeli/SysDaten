import { useState, useEffect } from "react";
import Chamado from "../../components/Chamado/Chamado";

import '../Chamados/Chamados.css'

const Chamados = () => {
    // Usando useState para armazenar os chamados
    const [chamados, setChamados] = useState([]);

    useEffect(() => {
        // Criando um array de chamados dentro do useEffect
        const novosChamados = [];
        for (let i = 0; i < 60; i++) {
            novosChamados.push(
                <Chamado 
                    key={i} // A key é necessária para ajudar o React a identificar os elementos
                    id={`#000000${i + 1}`} 
                    user="Douglas Felipe" 
                    detail="Reiniciar o Zoip" 
                />
            );
        }
        setChamados(novosChamados); // Atualiza o estado com os novos chamados
    }, []); // O array vazio faz com que o useEffect execute apenas uma vez, após o componente ser montado

    return (
        <div className="chamadosContainer">
            {/* Renderizando os chamados dentro de um contêiner rolável */}
            <div className="chamadosList">
                {chamados}
            </div>
        </div>
    );
};

export default Chamados;
