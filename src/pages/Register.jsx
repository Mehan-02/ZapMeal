import { useState } from 'react'
import { ArrowRight, UtensilsCrossed } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'

function Register() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ name: '', email: '', password: '' })
  const [error, setError] = useState('')

  const updateField = event => setForm({ ...form, [event.target.name]: event.target.value })
  const submit = event => {
    event.preventDefault()
    if (!form.name || !form.email || !form.password) {
      setError('Complete all fields to create your account.')
      return
    }
    if (form.password.length < 6) {
      setError('Password must be at least 6 characters.')
      return
    }
    localStorage.setItem('zapmealAccount', JSON.stringify(form))
    navigate('/login')
  }

  return <main className="auth-page">
    <Link to="/login" className="brand"><span className="brand-mark"><UtensilsCrossed size={18} /></span><span>Zap<span>Meal</span></span></Link>
    <section className="auth-layout">
      <div className="auth-intro"><span className="eyebrow">Join the campus break</span><h1>Make every<br /><em>pickup faster.</em></h1><p>Create an account to save your details and keep your next order moving.</p></div>
      <form className="auth-card" onSubmit={submit}>
        <span className="eyebrow">Create account</span>
        <h2>Start with ZapMeal</h2>
        <p className="auth-subtitle">It only takes a minute.</p>
        <label>Full name<input name="name" autoComplete="name" value={form.name} onChange={updateField} placeholder="Your name" /></label>
        <label>Email<input name="email" type="email" autoComplete="email" value={form.email} onChange={updateField} placeholder="you@campus.edu" /></label>
        <label>Password<input name="password" type="password" autoComplete="new-password" value={form.password} onChange={updateField} placeholder="At least 6 characters" /></label>
        {error && <small className="error" role="alert">{error}</small>}
        <button className="button full">Create account <ArrowRight size={16} /></button>
        <p className="auth-switch">Already have an account? <Link to="/login">Sign in</Link></p>
      </form>
    </section>
  </main>
}

export default Register
