import { Injectable } from '@angular/core';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loggedUser!: Login;
  logins: Login[] = [
    {
      username: 'alumno',
      password: '1234'
    },
    {
      username: 'camilo',
      password: '1234'
    }
  ]
  findByUsername(u: string): Login | undefined{
    return this.logins.find(l => l.username === u)
  }
  registerLoggedUser(login: Login){
    this.loggedUser = login;
  }

  isAuthenticated(): boolean {
    console.log(this.loggedUser)
    return this.loggedUser !== undefined
  }
  constructor() { }
}
