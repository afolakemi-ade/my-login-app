'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Eye, EyeOff } from 'lucide-react'; 
import styles from '../styles/ForgotPassword.module.css';

export default function Register() {

  const [form, setForm] = useState({
    
    email: '',
 
  });

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const { name, value, type, checked } = e.target;
 
};


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Registered:', form);
    };
    

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        
        <Image
          src="/Union.svg"
          alt="image"
          width={13.4}
          height={20.86}
          className={styles.frameImage}
        />

       
        <h1 className={styles.title}>Forget Password</h1>
        <p className={styles.subtitle}>Sign in into your account</p>

   
        <form className={styles.form} onSubmit={handleSubmit}>
    
         <label className={styles.header}>Email</label>
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="samle@mail.com"
            className={styles.input}
            required
          />
         
          


        
          <button type="submit" className={styles.btn}>
            Send
          </button>
        </form>

        <p className={styles.loginText}>
        
          <Link href="/" className={styles.loginLink}>
            Back to Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
