import TechnologyList from './components/TechnologyList'
import { useState } from 'react'
import './App.css'

function App() {
  const [tecnologias, setTecnologias] = useState([
    'HTML',
    'CSS',
    'JavaScript',
    'React',
  ])

  const [mostrarTecnologias, setMostrarTecnologias] = useState(false)

  function adicionarGit() {
    if (!tecnologias.includes('Git e GitHub')) {
      setTecnologias([...tecnologias, 'Git e GitHub'])
    }
  }

  return (
    <main className="app">
      <section className="card">
        <p className="eyebrow">Meu primeiro projeto React</p>

        <h1>Laboratório de tecnologias</h1>

        <p>
          Estou praticando componentes, estado e eventos com React.
        </p>

        <div className="actions">
          <button onClick={() => setMostrarTecnologias(!mostrarTecnologias)}>
            {mostrarTecnologias ? 'Ocultar tecnologias' : 'Mostrar tecnologias'}
          </button>

          <button onClick={adicionarGit}>
            Adicionar Git e GitHub
          </button>
        </div>

        <p className="status">
          Tecnologias cadastradas: {tecnologias.length}
        </p>
      <TechnologyList
  technologies={tecnologias}
  visible={mostrarTecnologias}
/>
       
      </section>
    </main>
  )
}

export default App