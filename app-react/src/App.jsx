import { useState } from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import TechnologyList from './components/TechnologyList'
import './App.css'
import GitHubProfile from './components/GitHubProfile'
import PrimeReactDemo from './components/PrimeReactDemo'

function Home() {
  return (
    <section className="card">
      <p className="eyebrow">Portfólio React</p>
      <h1>Bem-vindo ao meu laboratório</h1>
      <p>Use o menu para conhecer as tecnologias e o projeto.</p>
    </section>
  )
}

function Sobre() {
  return (
    <section className="card">
      <p className="eyebrow">Sobre o projeto</p>
      <h1>Aprendendo React na prática</h1>
      <p>
        Este projeto reúne exercícios de componentes, estado, eventos e rotas.
      </p>
    </section>
  )
}

function Tecnologias() {
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
    <section className="card">
      <p className="eyebrow">Componentes e estado</p>
      <h1>Laboratório de tecnologias</h1>

      <p>Praticando estado, eventos e componentes com React.</p>

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
  )
}

function App() {
  return (
    <main className="app">
      <nav className="navigation">
        <NavLink to="/">Início</NavLink>
        <NavLink to="/tecnologias">Tecnologias</NavLink>
        <NavLink to="/sobre">Sobre</NavLink>
        <NavLink to="/perfil">Perfil GitHub</NavLink>
        <NavLink to="/primereact">PrimeReact</NavLink>
        
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tecnologias" element={<Tecnologias />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/perfil" element={<GitHubProfile />} />
        <Route path="/primereact" element={<PrimeReactDemo />} />
        <Route path="/prime" element={<PrimeReactDemo />} />
        </Routes>
    </main>
  )
}

export default App