import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { IUser } from '../models/users.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiURL: string = '../../assets/json';
  private userData = new BehaviorSubject<IUser[]>([]);

  constructor(private httpClient: HttpClient) {}

  public loadUsers(): Observable<any>{
    return this.httpClient.get(`${this.apiURL}/users.json`);
  }

  public getUser(): Observable<IUser[]> {
    return this.userData.asObservable();
  }

  public setUser(item: IUser[]) {
    this.userData.next(item);
  }

  public resetUser() {
    this.userData.next([]);
  }

  public findPosition(r, d) {
    for(let i = 0; i < r.length; i++){
      if(d.id === r[i].id) {
        return i;
      }
    }
  }

}