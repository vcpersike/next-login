// src/pages/login.tsx
import LoginForm from '../components/LoginForm';
import LoginViewModel from '../viewmodels/LoginViewModel';

const Login = () => {
  const viewModel = new LoginViewModel();

  const handleLogin = async (username: string, password: string) => {
    viewModel.setUser(username, password);
    try {
      const result = await viewModel.login();
      console.log('Login Successful', result);
      // Implemente a navegação ou armazenamento de estado conforme necessário
    } catch (error) {
        console.error((error as Error).message);
      }
  };

  return <LoginForm onLogin={handleLogin} />;
}

export default Login;
