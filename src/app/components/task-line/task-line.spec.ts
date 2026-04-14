import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskLineComponent } from './task-line';

describe('TaskLineComponent', () => {
  let component: TaskLineComponent;
  let fixture: ComponentFixture<TaskLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskLineComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TaskLineComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
