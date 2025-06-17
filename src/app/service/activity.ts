import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface ActivityObject{
  id?:number,
  steps:number
  distance:number,
  caloriesBurned:number
  userId:number
}

export interface GoalObject{
  id?:number,
  targetSteps:number,
  targetCalories:number,
  activity:ActivityObject
}

@Injectable({
  providedIn: 'root'
})
export class Activity {

  private baseURL = "http://localhost:2002/api";

  constructor(private http: HttpClient ) { }
    
  getActivityByUserId(id: number) : Observable<ActivityObject[]> {
    return this.http.get<ActivityObject[]> (`${this.baseURL}/user/${id}`);
  }

  postGoal(id:number, goal:GoalObject): Observable<GoalObject> {
    return this.http.post<GoalObject> (`${this.baseURL}/goals/${id}`, goal);
  }

  postActivity(activity: ActivityObject) : Observable<ActivityObject>{
    return this.http.post<ActivityObject> (`${this.baseURL}/activities`, activity);
  }

  viewGoal(id:number) :Observable<GoalObject[]>{
    return this.http.get<GoalObject[]> (`${this.baseURL}/goals/user/${id}`)
  }

}
