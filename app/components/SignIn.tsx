'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import styles from '../styles/SignIn.module.css';

export default function SignIn() {
  const router = useRouter();
  const [form, setForm] = useState({
    country: '',
    businessName: '',
    countryCode: '+234',
    phoneNumber: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Step 1 data:', form);
    router.push('/register');
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

              <h1 className={styles.title}>Welcome to Payfonte</h1>
        <p className={styles.subtitle}>Create an account to get started</p>

        <form className={styles.form} onSubmit={handleSubmit}>
        
          <label className={styles.label}>Select Country</label>
          <select
            name="country"
            value={form.country}
            onChange={handleChange}
            className={styles.select}
            required
          >
            <option value="">Select Country</option>
            <option value="Nigeria">Nigeria</option>
            <option value="France">France</option>
          </select>

        
          <label className={styles.label}>Business Name</label>
          <input
            name="businessName"
            value={form.businessName}
            onChange={handleChange}
            placeholder="Business name"
            className={styles.input}
            required
          />

        
          <label className={styles.label}>Phone Number</label>
          <div className={styles.phoneContainer}>
            <select
              name="countryCode"
              value={form.countryCode}
              onChange={handleChange}
              className={styles.countryCode}
            >
              <option value="+234">+234</option>
              <option value="+33">+33</option>
            
            </select>
            <input
              type="tel"
              name="phoneNumber"
              value={form.phoneNumber}
              onChange={handleChange}
              placeholder="Phone number"
              className={styles.phoneInput}
              required
            />
          </div>

          <button type="submit" className={styles.btn}>
            Continue
          </button>
        </form>
      </div>
    </div>
  );
}
