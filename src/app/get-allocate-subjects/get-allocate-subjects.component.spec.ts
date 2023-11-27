import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllocateSubjectsComponent } from './get-allocate-subjects.component';

describe('GetAllocateSubjectsComponent', () => {
  let component: GetAllocateSubjectsComponent;
  let fixture: ComponentFixture<GetAllocateSubjectsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetAllocateSubjectsComponent]
    });
    fixture = TestBed.createComponent(GetAllocateSubjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
