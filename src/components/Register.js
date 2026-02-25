import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './auth.css';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    setMessage('');

    if (!username || !password || !confirm) {
      setMessage('error:Please fill in all fields.');
      return;
    }
    if (username.length < 3) {
      setMessage('error:Username must be at least 3 characters.');
      return;
    }
    if (password.length < 4) {
      setMessage('error:Password must be at least 4 characters.');
      return;
    }
    if (password !== confirm) {
      setMessage('error:Passwords do not match.');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      localStorage.setItem('user', JSON.stringify({ username, password }));
      setMessage('success:Account created! Redirecting to login...');
      setTimeout(() => navigate('/login'), 1500);
      setLoading(false);
    }, 600);
  };

  const isError = message.startsWith('error:');
  const isSuccess = message.startsWith('success:');
  const messageText = message.replace(/^(error:|success:)/, '');

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-header">
          <div className="auth-logo">⬡</div>
          <h1 className="auth-title">Create account</h1>
          <p className="auth-subtitle">Join us today, it's free</p>
        </div>

        <form onSubmit={handleRegister} className="auth-form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              placeholder="Choose a username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirm">Confirm Password</label>
            <input
              id="confirm"
              type="password"
              placeholder="Repeat your password"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              required
            />
          </div>

          {message && (
            <div className={isError ? 'auth-error' : 'auth-success'}>
              <span className="error-icon">{isError ? '!' : '✓'}</span>
              {messageText}
            </div>
          )}

          <button type="submit" className="auth-btn" disabled={loading}>
            {loading ? <span className="btn-spinner" /> : 'Create Account'}
          </button>
        </form>

        <p className="auth-footer">
          Already have an account?{' '}
          <Link to="/login" className="auth-link">Sign in here</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
