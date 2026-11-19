import { useEffect, useState } from 'react'

function GitHubProfile() {
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function loadProfile() {
      try {
        const response = await fetch(
          'https://api.github.com/users/diogoamarante091',
        )

        if (!response.ok) {
          throw new Error('Não foi possível carregar o perfil.')
        }

        const data = await response.json()
        setProfile(data)
      } catch (requestError) {
        setError(requestError.message)
      } finally {
        setLoading(false)
      }
    }

    loadProfile()
  }, [])

  if (loading) {
    return <section className="card">Carregando perfil...</section>
  }

  if (error) {
    return <section className="card">{error}</section>
  }

  return (
    <section className="card profile">
      <img src={profile.avatar_url} alt={`Foto de ${profile.login}`} />

      <p className="eyebrow">Requisição com useEffect</p>
      <h1>{profile.name ?? profile.login}</h1>
      <p>{profile.bio ?? 'Estudante de Desenvolvimento Full Stack.'}</p>

      <p className="status">
        Repositórios públicos: {profile.public_repos} · Seguidores: {profile.followers}
      </p>

      <a
        href={profile.html_url}
        target="_blank"
        rel="noreferrer"
      >
        Ver perfil no GitHub
      </a>
    </section>
  )
}

export default GitHubProfile