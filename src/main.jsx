import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

//1. Crie um novo aplicativo React.
//2. Crie um componente App.jsx.
//3. Crie um componente Header.jsx que renderize um elemento <header>
//para mostrar o nome do aplicativo Keeper em um <h1>.
//4. Crie um componente Footer.jsx que renderize um elemento <footer>
//para mostrar uma mensagem de copyright em um <p> com um ano atualizado dinamicamente.
//5. Crie um componente Note.jsx para mostrar um elemento <div> com um
//<h1> para o título e <p> para o conteúdo.
//6. Certifique-se de que o site final tenha o estilo do exemplo mostrado aqui:
//https://l1pp6.csb.app/

//DICA: Você precisará estudar as classes no arquivo estilos.css para aplicar um estilo.

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
