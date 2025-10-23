import Register from '../components/Register';
import RegisterRightPanel from '../components/RegisterRightPanel';
import styles from '../styles/Register.module.css';

export default function RegisterPage() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Register />
      </div>
      <div className={styles.right}>
        <RegisterRightPanel />
      </div>
    </div>
  );
}
