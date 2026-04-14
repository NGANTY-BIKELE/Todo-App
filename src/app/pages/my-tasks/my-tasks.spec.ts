import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTasksComponent } from './my-tasks';

describe('MyTasks', () => {
  let component: MyTasksComponent;
  let fixture: ComponentFixture<MyTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyTasksComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MyTasksComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
