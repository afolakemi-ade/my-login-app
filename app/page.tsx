// app/page.tsx
import LoginForm from './components/LoginForm';
import RightPanel from './components/RightPanel';
import styles from './styles/Login.module.css';

export default function HomePage() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.left}>
          <LoginForm />
        </div>
        <div className={styles.right}>
          <RightPanel />
        </div>
      </div>
    </div>
  );
}
