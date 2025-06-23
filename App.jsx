
import { useState } from 'react'

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [username, setUsername] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    if (username.trim()) {
      setLoggedIn(true)
    }
  }

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Aplicativo do Luiggi | Analista Bac Bo Pro IA</h1>
      {!loggedIn ? (
        <form onSubmit={handleLogin}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Digite seu nome"
            style={{ padding: '0.5rem', marginRight: '1rem' }}
          />
          <button type="submit" style={{ padding: '0.5rem 1rem' }}>Entrar</button>
        </form>
      ) : (
        <div>
          <h2>Bem-vindo, {username}!</h2>
          <p>Última previsão da IA:</p>
          <div style={{ marginBottom: '1rem' }}>
            🔵 Azul | 🔴 Vermelho | 🟡 Empate
          </div>
          <p><strong>Recomendação:</strong> 🔴 Vermelho - 99,93%</p>
          <a
            href="https://go.aff.lotogreen.com/oj1663mr"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              marginTop: '1rem',
              background: 'red',
              color: '#fff',
              padding: '0.75rem 1.5rem',
              textDecoration: 'none',
              borderRadius: '10px'
            }}
          >
            Jogar Agora
          </a>
        </div>
      )}
    </div>
  )
}
