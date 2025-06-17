import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

export interface UserObject{
  id?:number,
	userName:string,
  email:string,
  password:string,
	profile: ProfileObject
}

export interface ProfileObject {
  id?:number,
	age:number,
	height:number,
	weight:number
}


@Injectable({
  providedIn: 'root'
})

export class User {
  private baseURL = "http://localhost:2001/api/users";

  constructor(private http: HttpClient ) { }
    
  registerUser(user: UserObject) : Observable<UserObject> {
    return this.http.post<UserObject> (`${this.baseURL}/register`, user);
  }

  login(user:UserObject) : Observable<UserObject> {
    return this.http.post<UserObject> (`${this.baseURL}/login`, user);
  }

  getProfileById(id: number): Observable<ProfileObject> {
    return this.http.get<ProfileObject> (`${this.baseURL}/profile/${id}`);
  }

  //ENDPOINT: -> register, login, profile/id

}
