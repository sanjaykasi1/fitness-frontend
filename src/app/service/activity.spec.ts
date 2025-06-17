import { TestBed } from '@angular/core/testing';

import { Activity, ActivityObject, GoalObject } from './activity';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('Activity', () => {
  let service: Activity;
  let httpMock: HttpTestingController

  const dummyActivity : ActivityObject = {
    id:1,
    steps:1,
    distance:1,
    caloriesBurned:1,
    userId:1

  }

  const dummyGoal : GoalObject = {
    id:1,
    targetSteps:1,
    targetCalories:1,
    activity: {
      id:1,
      steps:1,
    distance:1,
    caloriesBurned:1,
    userId:1
  }
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [HttpClientTestingModule],
      providers : [Activity]
    });
    service = TestBed.inject(Activity);
    httpMock = TestBed.inject(HttpTestingController);
  });


  afterEach ( () => {
    httpMock.verify();
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('add activity by POST', () =>{
    service.postActivity(dummyActivity).subscribe ( (res) =>{
      expect(res).toEqual(dummyActivity);
    });

    const req = httpMock.expectOne(`http://localhost:2002/api/users/login`);
    expect(req.request.method).toBe('POST');
    req.flush(dummyActivity);

  });

  it('add goal by POST', () =>{
    service.postGoal(dummyGoal.id!, dummyGoal).subscribe ( (res) =>{
      expect(res).toEqual(dummyGoal);
    });

    const req = httpMock.expectOne(`http://localhost:2001/api/goals/${dummyGoal.id}`);
    expect(req.request.method).toBe('POST');
    req.flush(dummyGoal);

  });

  // it('get 1 by GET', () => {
  //   const id = 1;
  //   service.viewGoal(id).subscribe ( (res) =>{
  //     expect(res).toEqual(dummyGoal[]);
  //   })
  //   const req = httpMock.expectOne(`http://localhost:2001/api/users/profile/${passengerId}`);
  //   expect(req.request.method).toBe('GET');
  //   req.flush(dummyGoal);
  // })


});


  