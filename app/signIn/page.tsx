import SignIn from '../components/SignIn';
import RegisterRightPanel from '../components/RegisterRightPanel';
import styles from '../styles/SignIn.module.css';

export default function RegisterPage() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <SignIn />
      </div>
      <div className={styles.right}>
        <RegisterRightPanel />
      </div>
    </div>
  );
}
