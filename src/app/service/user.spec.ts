import { TestBed } from '@angular/core/testing';

import { ProfileObject, User, UserObject } from './user';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('User', () => {
  let service: User;
  let httpMock: HttpTestingController

  const dummyUser :UserObject= {
    id:1,
    userName:'',
    email:'',
    password:'',
	  profile: {
    id:1,
	  age:1,
	  height:1,
	  weight:1
    }
  }

  const dummyProfile :ProfileObject= {
    id:1,
	  age:1,
	  height:1,
	  weight:1
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [HttpClientTestingModule],
      providers : [User]
    });
    service = TestBed.inject(User);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach ( () => {
    httpMock.verify();
  })

  it('should be created', () => {
    expect(service).toBeTruthy();

  });

  it('add by POST', () =>{
    service.login(dummyUser).subscribe ( (res) =>{
      expect(res).toEqual(dummyUser);
    });

    const req = httpMock.expectOne(`http://localhost:2001/api/users/login`);
    expect(req.request.method).toBe('POST');
    req.flush(dummyUser);

  });

  it('add by POST', () =>{
    service.registerUser(dummyUser).subscribe ( (res) =>{
      expect(res).toEqual(dummyUser);
    });

    const req = httpMock.expectOne(`http://localhost:2001/api/users/register`);
    expect(req.request.method).toBe('POST');
    req.flush(dummyUser);

  });

  it('get 1 by GET', () => {
    const passengerId = 1;
    service.getProfileById(passengerId).subscribe ( (res) =>{
      expect(res).toEqual(dummyProfile);
    })
    const req = httpMock.expectOne(`http://localhost:2001/api/users/profile/${passengerId}`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyProfile);
  })

});

  

  