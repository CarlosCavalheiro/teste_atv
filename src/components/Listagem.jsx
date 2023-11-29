function Listagem({item, concluirTarefa, removerTarefa}) {
    return (
        <>
            <div className="tarefa">
                <h3 style={{textDecoration: item.isConcluido ? 'line-through' : ''}}>{item.descricao}</h3>
                <div>
                    <button className="bt_concluir" 
                    onClick={() => concluirTarefa(item.id)}>Concluir</button>
                    <button className="bt_remover"
                    onClick={() => removerTarefa(item.id)}>Remover</button>
                </div>
            </div>
        </>
    )
}

export default Listagem;