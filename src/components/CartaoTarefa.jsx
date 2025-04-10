import './CartaoTarefa.css';
import { useState } from 'react';

function CartaoTarefa (props) {
    const tarefa = props.tarefa;

    const alternarBotao = () => {
        props.alterarStatusTarefa(tarefa); // Notifica o componente pai
    };

    return (
        <div className={`cartao ${tarefa.status ? 'ativado' : 'desativado'}`}>
            <div style={{display: 'flex', width: '100%'}}>
                <button id='alterar-botao' onClick={alternarBotao}></button>
                
                <div>
                    <h2>{tarefa.nome}</h2>
                    <p>{tarefa.descricao}</p>
                </div>
            </div>

            <button id='remover-botao' onClick={() => props.removerTarefa(props.index)} style={{alignSelf: 'center'}}>X</button>
        </div>
    );
}

export default CartaoTarefa;