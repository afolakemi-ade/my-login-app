'use client';

import { useState } from 'react';
import styles from '../styles/Login.module.css';
import Image from 'next/image';
import { Eye, EyeOff } from 'lucide-react'; 

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPwd, setShowPwd] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (password.length < 4) {
      setError('Incorrect Password please try again');
    } else {
      alert('Login successful (demo)');
    }
  };

  return (
    <div className={styles.loginInner}>
      <div className={styles.brand}>
        <div className={styles.logo}>
          <Image src="/Union.svg" alt="logo" width={13.4} height={20.86} />
        </div>
      </div>

      <h1 className={styles.title}>Welcome back</h1>
      <p className={styles.subtitle}>Sign in to your account</p>

      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label}>Email</label>
        <input
          className={styles.input}
          type="email"
          value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder='samle@mail.com'
        />

        <label className={styles.label}>Password</label>
        <div className={styles.passwordWrapper}>
          <input
            className={`${styles.input} ${error ? styles.inputError : ''}`}
            type={showPwd ? 'text' : 'password'}
            value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder='Enter Password Here'
          />
          <button
            type="button"
            className={styles.eyeBtn}
            onClick={() => setShowPwd(!showPwd)}
          >
            {showPwd ? (
              <EyeOff size={18} color="#8E98A8" /> 
            ) : (
              <Eye size={18} color="#8E98A8" />
            )}
          </button>
        </div>

        {error && <div className={styles.errorText}>{error}</div>}

        <div className={styles.row}>
          <a className={styles.forgot} href="#">
            Forgot Password?
          </a>
        </div>

        <button className={styles.primaryBtn} type="submit">
          Sign in
        </button>

        <p className={styles.signupText}>
          Don't have an account? <a href="#" className={styles.create}>Create Account</a>
        </p>
      </form>
    </div>
  );
}
