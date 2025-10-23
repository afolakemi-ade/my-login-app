import ForgotPassword from '../components/ForgotPassword';
import ForgotPasswordRightPanel from '../components/ForgotPasswordRightPanel';
import styles from '../styles/ForgotPassword.module.css';

export default function RegisterPage() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <ForgotPassword />
      </div>
      <div className={styles.right}>
        <ForgotPasswordRightPanel />
      </div>
    </div>
  );
}
