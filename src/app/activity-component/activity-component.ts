import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Activity, ActivityObject, GoalObject } from '../service/activity';

@Component({
  selector: 'app-activity-component',
  imports: [HttpClientModule, FormsModule, CommonModule],
  templateUrl: './activity-component.html',
  styleUrl: './activity-component.css'
})
export class ActivityComponent {

  userId !: number
  getGoal ?: GoalObject;
  activities:ActivityObject[]=[]
  goals:GoalObject[]=[]

  existActivity : ActivityObject = {
    steps:0,
    distance:0,
    caloriesBurned:0,
    userId:0
  }

  findActivity : ActivityObject = {
    steps:0,
    distance:0,
    caloriesBurned:0,
    userId:0
  }

  existGoal : GoalObject = {
    targetSteps:0,
    targetCalories:0,
    activity: this.existActivity
}

  constructor (private activityService: Activity, private cdr: ChangeDetectorRef) {}

    postGoal(id: number): void {
      this.activityService.postGoal(id, this.existGoal).subscribe( data =>{
        this.goals.push(data)
        this.cdr.detectChanges()
      })
    }

    viewGoal(id:number) : void {
      this.activityService.viewGoal(id).subscribe(data =>{
        this.goals = data;
        this.cdr.detectChanges();
      })
    }

    postActivity() : void {
      this.activityService.postActivity(this.existActivity).subscribe( data =>{
        this.activities.push(data)
        this.cdr.detectChanges()
      })
    }

    getActivityByUserId(id: number) : void  {
      this.activityService.getActivityByUserId(id).subscribe(data =>{
        this.activities = data;
        this.cdr.detectChanges();
      })
    }

}
