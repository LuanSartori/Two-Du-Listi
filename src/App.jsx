import './App.css';

import ListaTarefas from './components/ListaTarefas';
import NavbarSite from './components/NavbarSite';

function App() {
  return (
    <>
      <NavbarSite />

      <section id="mainContent">

        <ListaTarefas />

      </section>

    </>
  )
}

export default App
