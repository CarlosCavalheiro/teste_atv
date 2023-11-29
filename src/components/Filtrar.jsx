function Filtrar({search, setSearch, filtro, setFiltro, setOrdem}) {
    return (
        <>
            <div className="filtrar">
                <h2>Filtrar</h2>
                <div className="conteudo">
                    
                    <input type="text" 
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Digite algo para filtrar..."/>

                    <select onChange={(e) => setFiltro(e.target.value)} value={filtro}>
                        <option value="Todos">Todos</option>
                        <option value="Concluido">Concluído</option>
                        <option value="Pendente">Pendente</option>
                    </select>

                    <button onClick={() => setOrdem('Crescente')}>
                        <span className="material-symbols-outlined">
                            arrow_downward
                        </span>
                    </button>
                    <button onClick={() => setOrdem('Decrescente')}>
                        <span className="material-symbols-outlined">
                            arrow_upward
                        </span>
                    </button>
                    
                </div>

            </div>

        </>
    )
}

export default Filtrar;