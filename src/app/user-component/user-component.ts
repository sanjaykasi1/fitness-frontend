import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProfileObject, User, UserObject } from '../service/user';
import { Activity, ActivityObject, GoalObject } from '../service/activity';

@Component({
  selector: 'app-user-component',
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './user-component.html',
  styleUrl: './user-component.css'
})

export class UserComponent implements OnInit{

  ngOnInit(): void {
  }
  users: UserObject[]=[];
  profiles:ProfileObject[]=[];

  viewProfile!: ProfileObject
  profileId = 0

  existUser : UserObject ={
	userName:'',
  email:'',
  password:'',
	profile: {
    id:0,
	  age:0,
	  height:0,
	  weight:0
    }
  }

  newUser : UserObject ={
    userName:'',
    email:'',
    password:'',
    profile: {
      id:0,
      age:0,
      height:0,
      weight:0
      }
    }
  registerBool : boolean = false
  loginBool : boolean = true
  dashboard : boolean = false

  constructor (private userService: User, private activityService: Activity, private cdr: ChangeDetectorRef) {}

  register() :void{
    this.registerBool=true
  }
  
  registerUser() : void{
      this.userService.registerUser(this.newUser).subscribe(data =>{
        this.users.push(data)
        this.newUser = {
          id: 0,
          userName:'',
          email:'',
          password:'',
          profile: {
            id:0,
            age:0,
            height:0,
            weight:0
            }
          }
        this.cdr.detectChanges()
      })
      this.registerBool=false
  }


  
  login() : void {
    this.userService.login(this.existUser).subscribe(data =>{
      this.users.push(data)
      this.cdr.detectChanges()
      this.dashboard = true
      this.loginBool = false
    })
  
  }
  getProfileById(id: number) { 
    this.userService.getProfileById(id).subscribe( data =>{
      this.viewProfile = data;
      this.cdr.detectChanges()
      
    })
  }

  postActivityBool : boolean = false;
  getActivityBool : boolean = false;
  postGoalsBool : boolean = false;
  getGoalsBool : boolean = false;

  goToPostActivity(){
    this.postActivityBool= true
  }
  getActivity(){
    this.getActivityBool= true
  }
  postGoals(){
    this.postGoalsBool= true
  }
  getGoals() {
    this.getGoalsBool= true
  }

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
      id:0,
      targetSteps:0,
      targetCalories:0,
      activity: {
        steps:0,
      distance:0,
      caloriesBurned:0,
      userId:0
      }
  } 

  
      postGoal(id: number): void {
        this.postActivityBool  = false;
        this.getActivityBool  = false;
        this.getGoalsBool = false;
        this.activityService.postGoal(id, this.existGoal).subscribe( data =>{
          this.goals.push(data)
          this.cdr.detectChanges()
        })
      }
  
      viewGoal(id:number) : void {
        this.postActivityBool  = false;
        this.getActivityBool  = false;
        this.postGoalsBool  = false;
        this.activityService.viewGoal(id).subscribe(data =>{
          this.goals = data;
          this.cdr.detectChanges();
        })
      }
  
      postActivity() : void {
        this.getActivityBool  = false;
        this.postGoalsBool  = false;
        this.getGoalsBool = false;
        this.activityService.postActivity(this.existActivity).subscribe( data =>{
          this.activities.push(data)
          this.cdr.detectChanges()
          this.postActivityBool = false
        })
      }
  
      getActivityByUserId(id: number) : void  {
        this.getGoalsBool = false;
        this.activityService.getActivityByUserId(id).subscribe(data =>{
          this.activities = data;
          this.cdr.detectChanges();
        })
      }
    
}

//   newPayment : Payment = { id: 0, amount:0 , paymentDate:new Date() , paymentMethod: paymentMethod.PayPal, paymentStatus: paymentStatus.Failed};
//   updatePaymentData:Payment={
//     id: 0, amount:0 , paymentDate:new Date() , paymentMethod: paymentMethod.PayPal, paymentStatus: paymentStatus.Failed
//   };

//   constructor(private paymentService: PaymentService, private cdr: ChangeDetectorRef) {}

//   addPayment() : void {
//     this.paymentService.addPayment(this.newPayment).subscribe( (data) => 
//     {
//       this.payments.push(data);
//       this.newPayment= { id: 0, amount:0 , paymentDate:new Date() , paymentMethod: paymentMethod.PayPal, paymentStatus: paymentStatus.Failed};
//       this.cdr.detectChanges();
//     }
//     )
//   }

//   viewPayments() : Payment[] {
//     this.paymentService.allPayment().subscribe (data => 
//     {
//       this.payments=data;
//       this.cdr.detectChanges();
//     }
//     );
//     return this.payments;
//   }

//   viewPayment(id: number): void{
//     this.paymentService.viewPayment(id).subscribe (data =>
//     {
//       this.viewPaymentDetail = data;
//       this.cdr.detectChanges();
//     }
//     )
//   }

//   deletePayment(id: number): void{
//     this.paymentService.deletePayment(id).subscribe(
//       ()=>{
//         this.payments = this.payments.filter(p => p.id != id);
//         this.cdr.detectChanges();
//     })
//   }
//   populateUpdateForm(payment:Payment):void{
//     this.updatePaymentData={...payment};
//   }
//   updatePayment() {
//     this.paymentService.updatePayment(this.updatePaymentData.id!,this.updatePaymentData).subscribe(() =>{
//       this.viewPayments();

//       this.updatePaymentData= {
//         id: 0, amount:0 , paymentDate:new Date() , paymentMethod: paymentMethod.PayPal, paymentStatus: paymentStatus.Failed
//       } 
//     });
//   }

  
// }


