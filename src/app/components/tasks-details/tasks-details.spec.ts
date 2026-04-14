import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksDetailsComponent } from './tasks-details';

describe('TasksDetails', () => {
  let component: TasksDetailsComponent;
  let fixture: ComponentFixture<TasksDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TasksDetailsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TasksDetailsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
