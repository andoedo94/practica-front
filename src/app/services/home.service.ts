import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private httpClient: HttpClient) { }

  public getUsers(): Observable<User[]> {   
    return this.httpClient.get<User[]>(`${environment.apiUrl}/users`);    
  }

  public UpdateUser(user: User): Observable<any> {   
    return this.httpClient.put<any>(`${environment.apiUrl}/users`, user);    
  }
}
