import { useState, useEffect } from 'react';

import './ListaTarefas.css';
import CartaoTarefa from './CartaoTarefa';

function ListaTarefas() {
    const localTarefas = localStorage.getItem('tarefas');
    
    // verifica se já existem tarefas no localStorage e as captura, se não fica uma variável vazia
    const [tarefas, setTarefas] = useState(localTarefas ? JSON.parse(localTarefas) : []); // Alterado para lista
    const [novaTarefa, setNovaTarefa] = useState('');

    const adicionarTarefa = () => {
        if (novaTarefa.trim() !== '') {

            const tarefa = {nome: novaTarefa, status: 0};

            setTarefas([...tarefas, tarefa]);
            setNovaTarefa('');
        }
    };

    // passa por todas as tarefas e remove a com o índice específico
    const removerTarefa = (indice) => {
        setTarefas(tarefas.filter((_, i) => i !== indice));
    }

    // função executada ao clicar na checkbox
    const alterarStatusTarefa = (tarefaAlterada) => {

        // passa por cada tarefa e altera apenas a tarefa que foi clicada
        setTarefas(tarefas.map(tarefa =>
            tarefa.nome === tarefaAlterada.nome
                ? {...tarefa, status: !tarefa.status}
                : tarefa
        ));
    };

    // ------------------------------------------------------------------------

    // salva as alterações da variável tarefas dentro do LocalStorage
    useEffect(() => {
        localStorage.setItem('tarefas', JSON.stringify(tarefas));
    }, [tarefas])

    return (
        <div id="lista">
            <div id="cabecalho">
                <button>Ordernar</button>
                <div id='novaTarefa'>
                    <input
                        type="text"
                        value={novaTarefa}
                        onChange={(e) => setNovaTarefa(e.target.value)}
                        placeholder="Nova tarefa"
                    />
                    <button onClick={adicionarTarefa}>Adicionar</button>
                </div>
            </div>

            {tarefas.map((tarefa, indice) => (
                <CartaoTarefa 
                    key={indice} 
                    tarefa={tarefa} 
                    alterarStatusTarefa={alterarStatusTarefa}
                    removerTarefa={removerTarefa}
                    index={indice}
                />
            ))}
        </div>
    );
}

export default ListaTarefas;