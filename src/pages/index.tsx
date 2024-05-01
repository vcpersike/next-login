// src/pages/index.tsx
import LoginForm from '../components/LoginForm';
import styles from '../styles/home.module.css'; // Importe o CSS Module
import { useState } from 'react';

export default function Home() {
  const [loginStatus, setLoginStatus] = useState('');

  function handleLogin(username: string, password: string) {
    console.log("Dados de login:", username, password);
    setLoginStatus('Login bem-sucedido! Bem-vindo, ' + username);
  }

  return (
    <div className={styles.container}>
      <h1>Bem-vindo à minha aplicação!</h1>
      <LoginForm onLogin={handleLogin} />
      {loginStatus && <p>{loginStatus}</p>}
    </div>
  );
}
