import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllocateSubjectsComponent } from './allocate-subjects.component';

describe('AllocateSubjectsComponent', () => {
  let component: AllocateSubjectsComponent;
  let fixture: ComponentFixture<AllocateSubjectsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllocateSubjectsComponent]
    });
    fixture = TestBed.createComponent(AllocateSubjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
