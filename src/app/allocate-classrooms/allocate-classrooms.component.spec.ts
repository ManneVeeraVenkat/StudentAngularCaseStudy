import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllocateClassroomsComponent } from './allocate-classrooms.component';

describe('AllocateClassroomsComponent', () => {
  let component: AllocateClassroomsComponent;
  let fixture: ComponentFixture<AllocateClassroomsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllocateClassroomsComponent]
    });
    fixture = TestBed.createComponent(AllocateClassroomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
