// src/models/UserModel.ts
export default class UserModel {
    username: string;
    password: string;
  
    constructor(username: string, password: string) {
      this.username = username;
      this.password = password;
    }
  
    isValid(): boolean {
      return this.username.length > 0 && this.password.length > 0;
    }
  }
  