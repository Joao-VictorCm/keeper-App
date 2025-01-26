import './App.css'
import Footer from './assets/components/Footer'
import Header from './assets/components/Header'
import Note from './assets/components/Note'
import CreateArea from './assets/components/CreateArea'
import { useState } from 'react'

function App() {
  
  const [notes, setNotes] = useState([])

  function addNote (newNote){
    setNotes(prevNotes =>{
      return[...prevNotes, newNote]
    })

  }

  function deleteNote(id){
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) =>{
        return index !== id
      })
    })
  }

  return (
    <div>
        <Header />
        <CreateArea onAdd={addNote}/>
        {notes.map((noteItem, index) =>{
          return <Note key={index} id={index} title={noteItem.title} content={noteItem.content}  onDelete={deleteNote}/>
        })}
        <Footer />
    </div>
    
  )
}

export default App


//DESAFIO:
//1. Implemente a funcionalidade adicionar nota.
//- Crie uma constante que monitore o título e o conteúdo.
//- Passa a nova nota de volta para o App.
//- Adiciona nova nota a um array.
//- Pegue o array e renderize componentes Note separados para cada item.

//2. Implemente a funcionalidade de exclusão de nota.
//- Retorno de chamada do componente Note para acionar uma função de exclusão.
//- Use a função filter para filtrar o item que precisa ser excluído.
//- Passa um id para o componente Note, passa de volta para o App ao deletar.

//Este é o resultado final que você deseja:
//https://pogqj.csb.app/

// Se você estiver executando isso localmente no VS Code, use os comandos:
//instalação npm
// para instalar os módulos do nó e
//npm executa dev
// para iniciar seu projeto react em seu navegador