import { useState } from 'react'
import { ArrowRight, UtensilsCrossed } from 'lucide-react'
import { Link } from 'react-router-dom'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const submit = event => {
    event.preventDefault()
    if (!email || !password) {
      setError('Enter your email and password to continue.')
      setSuccess(false)
      return
    }
    localStorage.setItem('zapmealUser', JSON.stringify({ email }))
    setError('')
    setSuccess(true)
  }

  return <main className="auth-page">
    <Link to="/login" className="brand"><span className="brand-mark"><UtensilsCrossed size={18} /></span><span>Zap<span>Meal</span></span></Link>
    <section className="auth-layout">
      <div className="auth-intro"><span className="eyebrow">Campus food, made easy</span><h1>Good food.<br /><em>Less waiting.</em></h1><p>Sign in to order ahead, choose your pickup time, and get back to your day.</p></div>
      <form className="auth-card" onSubmit={submit}>
        <span className="eyebrow">Student account</span>
        <h2>Welcome back</h2>
        <p className="auth-subtitle">Use your account to continue.</p>
        <label>Email<input type="email" autoComplete="email" value={email} onChange={event => setEmail(event.target.value)} placeholder="you@campus.edu" /></label>
        <label>Password<input type="password" autoComplete="current-password" value={password} onChange={event => setPassword(event.target.value)} placeholder="Your password" /></label>
        {error && <small className="error" role="alert">{error}</small>}
        {success && <small className="success-message" role="status">You are signed in.</small>}
        <button className="button full">Sign in <ArrowRight size={16} /></button>
        <p className="auth-switch">New to ZapMeal? <Link to="/register">Create an account</Link></p>
      </form>
    </section>
  </main>
}

export default Login
