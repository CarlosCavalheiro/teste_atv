import { useState } from 'react'
import './App.css'
import Cadastrar from './components/Cadastrar'
import Filtrar from './components/Filtrar'
import Listagem from './components/Listagem'

function App() {

  const [listaTarefas, setListaTarefa] = useState([
    { id: 1, descricao: "Comprar itens (comida) para viagem", isConcluido: false },
    { id: 2, descricao: "Reunião de conselho de classe", isConcluido: true},
    { id: 3, descricao: "Reservar hotel para treinamento ProEducador", isConcluido: false}
  ])

  const addTarefa = (txt_descricao) => {
    const newListaTarefa = [...listaTarefas, {
      id: Math.floor(Math.random()*100000),
      descricao: txt_descricao,
      isConcluido: false
    }]

    setListaTarefa(newListaTarefa);
  }

  const concluirTarefa = (id) => {
    const newListaTarefa = [...listaTarefas];

    newListaTarefa.map(item => {
      if(item.id === id){
        item.isConcluido = !item.isConcluido;
      }
    })
    
    setListaTarefa(newListaTarefa);
  }

  const removerTarefa = (id) => {
    const newListaTarefa = [...listaTarefas].filter(item =>
      item.id !== id 
    )

    setListaTarefa(newListaTarefa);
  }

  const [search, setSearch] = useState('');
  const [filtro, setFiltro] = useState('Todos')
  const [ordem, setOrdem] = useState('');

  return (
    <>
      <div className='app'>
        <h1>Lista de Tarefas</h1>
        <Cadastrar addTarefa={addTarefa} />
        <Filtrar search={search} setSearch={setSearch} 
                 filtro={filtro} setFiltro={setFiltro}
                 setOrdem={setOrdem}
                 />
        {
          listaTarefas
          .filter(item => {
            if(filtro == "Concluido"){
              return item.isConcluido === true
            } else if(filtro == "Pendente"){
              return item.isConcluido === false
            } else {
              return item;
            }
          })
          .filter(item => { 
            if(item.descricao.toLowerCase().includes(search.toLowerCase()))
              return item; 
          })
          .sort((a,b) => {
            if(ordem == "Crescente"){
              return a.descricao.localeCompare(b.descricao)
            }else if(ordem == "Decrescente"){
              return b.descricao.localeCompare(a.descricao)
            }else{
              return false;
            }
          })
          .map((item) => (
            <Listagem key={item.id} item={item} 
            concluirTarefa={concluirTarefa} 
            removerTarefa={removerTarefa} />
          ))
        }
      </div>

    </>
  )
}

export default App
