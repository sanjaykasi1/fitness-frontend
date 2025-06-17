import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityComponent } from './activity-component';
import { By } from '@angular/platform-browser';

describe('ActivityComponent', () => {
  let component: ActivityComponent;
  let fixture: ComponentFixture<ActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActivityComponent],
      declarations:[]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call postGoal() when form submit', () =>{
    spyOn(component, 'postGoal');
    const form = fixture.debugElement.query(By.css('form'));
    form.triggerEventHandler('ngSubmit', null)
    expect(component.postGoal).toHaveBeenCalled()
  })

  it('should call postActivity() when form submit', () =>{
    spyOn(component, 'postActivity');
    const form = fixture.debugElement.query(By.css('form'));
    form.triggerEventHandler('ngSubmit', null)
    expect(component.postActivity).toHaveBeenCalled()
  })


});




