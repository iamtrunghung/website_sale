import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../data-type';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private HttpClient: HttpClient
  ) { }
  createUser(account: User){
    const url = 'https://api.escuelajs.co/api/v1/users';
    return this.HttpClient.post<User>(url,account);
  }
  getUser(id: number){
    return this.HttpClient.get<User>(`https://api.escuelajs.co/api/v1/users/${id}`);
  }
}
