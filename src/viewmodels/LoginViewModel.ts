// src/viewmodels/LoginViewModel.ts
import UserModel from '../models/UserModel';

export default class LoginViewModel {
  user: UserModel;

  constructor() {
    this.user = new UserModel('', '');
  }

  setUser(username: string, password: string) {
    this.user = new UserModel(username, password);
  }

  async login(): Promise<any> {
    if (!this.user.isValid()) {
      throw new Error("Username and password are required.");
    }

    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: this.user.username,
        password: this.user.password,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to login');
    }

    return response.json();
  }
}
