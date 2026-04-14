import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Checkfilter } from './checkfilter';

describe('Checkfilter', () => {
  let component: Checkfilter;
  let fixture: ComponentFixture<Checkfilter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Checkfilter],
    }).compileComponents();

    fixture = TestBed.createComponent(Checkfilter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
