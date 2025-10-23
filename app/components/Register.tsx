'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Eye, EyeOff } from 'lucide-react'; 
import styles from '../styles/Register.module.css';

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPwd, setShowConfirmPwd] = useState(false);
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
      confirmPassword: '',
      terms: false,
  });

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const { name, value, type, checked } = e.target;
  setForm(prev => ({
    ...prev,
    [name]: type === 'checkbox' ? checked : value,
  }));
};


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Registered:', form);
    };
    

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        
        <Image
          src="/Frame.svg"
          alt="image"
          width={60}
          height={60}
          className={styles.frameImage}
        />

       
        <h1 className={styles.title}>Create Account</h1>
        <p className={styles.subtitle}>Join Payfonte to get started.</p>

   
        <form className={styles.form} onSubmit={handleSubmit}>
         
          <div className={styles.nameGroup}>
            <div className={styles.inputGroup}>
              <label>First Name</label>
              <input
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                placeholder="John"
                className={styles.input}
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <label>Last Name</label>
              <input
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                placeholder="Doe"
                className={styles.input}
                required
              />
            </div>
          </div>

      
                  <label className={styles.header}>Email</label>
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="samle@mail.com"
            className={styles.input}
            required
          />

         <div className={styles.passwordField}>
                      <label className={styles.header}>Create Password</label>
            <div className={styles.passwordWrapper}>
              <div className={styles.inputGroup}>
  <div className={styles.passwordContainer}>
    <input
      type={showPassword ? 'text' : 'password'}
      name="password"
      value={form.password}
      onChange={handleChange}
      placeholder="Enter Password Here"
      className={styles.passwordInput}
      required
    />
     <button
                type="button"
                className={styles.eyeBtn}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
  </div>
</div>

            </div>
          </div>

         
          <div className={styles.passwordField}>
                      <label className={styles.header}>Confirm Password</label>
            <div className={styles.passwordWrapper}>
              <div className={styles.inputGroup}>
  <div className={styles.passwordContainer}>
    <input
      type={showPassword ? 'text' : 'password'}
      name="password"
      value={form.password}
      onChange={handleChange}
      placeholder="Enter Password Here"
      className={styles.passwordInput}
      required
    />
     <button
                type="button"
                className={styles.eyeBtn}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
  </div>
</div>

            </div>
                  </div>
                  <div className={styles.checkboxContainer}>
  <input
    type="checkbox"
    id="terms"
    name="terms"
    checked={form.terms}
    onChange={handleChange}
    required
  />
  <label className={styles.terms}>
                          By clicking create account, you are agreeing to our <a href="/terms" className={styles.link}>Terms <span className={ styles.terms}>and</span> privacy Policy</a>
  </label>
</div>


        
          <button type="submit" className={styles.btn}>
            Create account
          </button>
        </form>

        <p className={styles.loginText}>
          Already have an account?{' '}
          <Link href="/" className={styles.loginLink}>
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}
