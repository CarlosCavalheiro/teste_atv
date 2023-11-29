import { useState } from "react";

function Cadastrar({addTarefa}) {
    const [descricao, setDescricao] = useState('');
    
    const cadastrar = (e) => {
        
        if(descricao == '') return; //não realiza o cadastro se descricao = ""
        
        addTarefa(descricao);

        setDescricao(''); //Limpa a variavel descricao
    }

    return (
        <>
        <h2>Cadastrar</h2>
        <div className="cadastrar">
            <input type="text" value={descricao} onChange={(e) => setDescricao(e.target.value)} placeholder="Informe a descrição da sua tarefa..." />
            <button className="bt_concluir" onClick={cadastrar} >Cadastrar</button>
        </div>

        </>
    )
}

export default Cadastrar;