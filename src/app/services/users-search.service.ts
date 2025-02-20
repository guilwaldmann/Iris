import { Injectable, signal } from '@angular/core';
import { data } from '../skeleton/data';

interface UserData {
  id: string,
  name: string,
  email: string,
  age: string,
}

@Injectable({
  providedIn: 'root'
})
export class UsersSearchService {

  constructor() { }
  data = data
  users = data

  InputSearch(event: Event | null) {
    if(event == null || event.target == null) {
      this.users = data
      return this.users 
    }
    const inputValue = (event.target as HTMLInputElement).value

    const filteredUsers = this.users.filter((user) => {
      user.name.toLowerCase().includes(inputValue.toLowerCase()) || user.email.toLowerCase().includes(inputValue.toLowerCase())
    })
    
    this.users = filteredUsers
    return this.users
  }
}
