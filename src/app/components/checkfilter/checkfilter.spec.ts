import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckfilterComponent } from './checkfilter';

describe('Checkfilter', () => {
  let component: CheckfilterComponent;
  let fixture: ComponentFixture<CheckfilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckfilterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CheckfilterComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
