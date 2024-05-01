// src/components/LoginForm.tsx
import { FC } from 'react';
import styles from '../styles/home.module.css';

interface LoginFormProps {
  onLogin: (username: string, password: string) => void;
}

const LoginForm: FC<LoginFormProps> = ({ onLogin }) => {
  let username = '';
  let password = '';

  return (
    <div className={styles.loginBox}>
      <form className={styles.loginForm} onSubmit={(e) => {
        e.preventDefault();
        onLogin(username, password);
      }}>
        <input
          type="text"
          className={styles.loginInput}
          placeholder="Username"
          onChange={(e) => username = e.target.value}
          required
        />
        <input
          type="password"
          className={styles.loginInput}
          placeholder="Password"
          onChange={(e) => password = e.target.value}
          required
        />
        <button type="submit" className={styles.loginButton}>Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
