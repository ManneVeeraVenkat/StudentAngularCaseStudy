import { Component } from '@angular/core';
import { StudentServiceService } from '../StudentService/student-service.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Teacher } from '../Model/Teachers';
import { Classroom } from '../Model/Classroom';

@Component({
  selector: 'app-allocate-classrooms',
  templateUrl: './allocate-classrooms.component.html',
  styleUrls: ['./allocate-classrooms.component.css']
})
export class AllocateClassroomsComponent {

  allocationForm!: FormGroup;
  teachers: any[] = []; // Replace with the actual type of your teacher objects
  classrooms: any[] = []; // Replace with the actual type of your classroom objects

  constructor(private allocateService: StudentServiceService, private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
    this.getTeachers();
    this.getClassrooms();
  }

  createForm() {
    this.allocationForm = this.fb.group({
      teacherId: ['', Validators.required],
      classroomId: ['', Validators.required],
    });
  }

  getTeachers() {
    // Call your service to get the list of teachers
    this.allocateService.GetTeachers().subscribe(
      (teachers) => {
        this.teachers = teachers;
      },
      (error) => {
        console.error('Error fetching teachers', error);
      }
    );
  }

  getClassrooms() {
    // Call your service to get the list of classrooms
    this.allocateService.GetallClassrooms().subscribe(
      (classrooms) => {
        this.classrooms = classrooms;
      },
      (error) => {
        console.error('Error fetching classrooms', error);
      }
    );
  }

  onSubmit() {
    if (this.allocationForm.valid) {
      const allocationData = this.allocationForm.value;
      this.allocateService.AllocateClassrooms(allocationData).subscribe(
        (response) => {
          console.log('Allocation successful', response);
        },
        (error) => {
          console.error('Error allocating classroom', error);
        }
      );
    }
  }
}
