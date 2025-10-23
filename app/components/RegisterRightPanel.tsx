'use client';
import Image from 'next/image';
import styles from '../styles/RegisterRightPanel.module.css';
import CountrySelector from './CountrySelector';

export default function RegisterRightPanel() {
  return (
      <div className={styles.rightPanel}>
        

          <div className={styles.content}>
               <Image src='/Progress bar.svg' alt='ProgressBar' width={454} height={4} />
      <div className={styles.header}>
        <div className={styles.logo}>
          <Image src="/Subtract.svg" alt="Logo" width={55.57} height={22.46} />
          <span className={styles.logoText}>Fonte</span>
                  </div>
                  <div className={styles.country}>
                      <CountrySelector />
                      </div>
      </div>
        <h1 className={styles.title}>Welcome to Payfonte Welcome to Payfonte</h1>
        <p className={styles.subtitle}>Create an account to get started</p>
        <div className={styles.imageWrapper}>
              <div className={styles.picture}>
                  <Image src='/Vector.svg' alt='picture' width={670} height={440.84} />
                  </div>
              </div>
              </div>
             
    </div>
  );
}
