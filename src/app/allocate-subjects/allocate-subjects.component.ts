import { Component } from '@angular/core';
import { Subjects } from '../Model/Subjects';
import { StudentServiceService } from '../StudentService/student-service.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Teacher } from '../Model/Teachers';

@Component({
  selector: 'app-allocate-subjects',
  templateUrl: './allocate-subjects.component.html',
  styleUrls: ['./allocate-subjects.component.css']
})
export class AllocateSubjectsComponent {
  allocationForm!: FormGroup;
  teachers: any[] = []; // Replace with the actual type of your teacher objects
  subjects: any[] = []; // Replace with the actual type of your classroom objects

  constructor(private allocateService: StudentServiceService, private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
    this.getTeachers();
    this.getsubjects();
  }

  createForm() {
    this.allocationForm = this.fb.group({
      teacherId: ['', Validators.required],
      subjectId: ['', Validators.required],
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

  getsubjects() {
    // Call your service to get the list of classrooms
    this.allocateService.GetSubjects().subscribe(
      (subjects) => {
        this.subjects = subjects;
      },
      (error) => {
        console.error('Error fetching subjects', error);
      }
    );
  }

  onSubmit() {
    if (this.allocationForm.valid) {
      const allocationData = this.allocationForm.value;
      this.allocateService.AllocateSubjects(allocationData).subscribe(
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
