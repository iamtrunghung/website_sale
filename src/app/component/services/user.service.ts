import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../data-type';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private HttpClient: HttpClient,
    private router: Router
  ) { }
  createUser(account: User) {
    const url = 'https://fakestoreapi.com/users';
    return this.HttpClient.post<User>(url, JSON.stringify(account));
  }
  getUser(id: number) {
    return this.HttpClient.get<User>(`https://fakestoreapi.com/users/${id}`);
  }
  checkLogin(account: User) {
    this.HttpClient.post<User>('https://api.escuelajs.co/api/v1/auth/login', account).subscribe((result: any) => {
      console.log('result',result);
      localStorage.setItem('token', result.access_token);
      this.router.navigate(['/']);
    })
  }
  getProfile() {
    const token = localStorage.getItem('token');
    if(token){
      console.log('token',token);
      let headers = new HttpHeaders().set("Authorization", `bearer ${token}`);
      return this.HttpClient.get<User>('https://api.escuelajs.co/api/v1/auth/profile', { headers })
    }
    return;
  }
  logout() {
    return localStorage.removeItem('token');
  }
}
