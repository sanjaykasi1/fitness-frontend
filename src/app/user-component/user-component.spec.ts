import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user-component';
import { By } from '@angular/platform-browser';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserComponent],
      declarations:[]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call registerUser() when form submit', () =>{
    spyOn(component, 'registerUser');
    const form = fixture.debugElement.query(By.css('form'));
    form.triggerEventHandler('ngSubmit', null)
    expect(component.registerUser).toHaveBeenCalled()
  })

  it('should call login() when form submit', () =>{
    spyOn(component, 'login');
    const form = fixture.debugElement.query(By.css('form'));
    form.triggerEventHandler('ngSubmit', null)
    expect(component.login).toHaveBeenCalled()
  })
  
  
  it('it should bind "age" input to profile - age', ()=>{
      const input = fixture.debugElement.query(By.css('input[name="amount"]')).nativeElement;
      input.value = 100
      input.dispatchEvent(new Event('input'));
      fixture.detectChanges();
      expect(component.viewProfile.age).toEqual(100);
  })

});

