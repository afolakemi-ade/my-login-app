// app/components/RightPanel.tsx
import styles from '../styles/RightPanel.module.css';
import Image from 'next/image';
import CountrySelector from './CountrySelector';

export default function RightPanel() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.logoSmall}><Image src="/Subtract.svg" alt="logo" width={55.57} height={22.46} /><div className={styles.fonte}>fonte</div><div className={styles.flagpackButton}><button className={styles.en}><CountrySelector/></button></div></div>
        <h2 className={styles.heroTitle}>Welcome to Payfonte Welcome to payfonte</h2>
        <p className={styles.heroSubtitle}>Create an account to get started</p>
      </div>

    
      <div className={styles.man}>
        <Image src='/Group 55.svg' alt='man' width={228.54} height={300} />
      </div>
    </div>
  );
}
