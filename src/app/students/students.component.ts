import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentServiceService } from '../StudentService/student-service.service';

import { Classroom } from '../Model/Classroom';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {
  studentForm!: FormGroup;
  classrooms: Classroom[] = [];

  constructor(
    private service: StudentServiceService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.createForm();
    this.getClassrooms();
  }

  createForm() {
    this.studentForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      contactPerson: ['', Validators.required],
      contactNo: ['', Validators.required],
      emailAddress: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      age: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      classroom: ['', Validators.required]
    });
  }

  getClassrooms() {
    this.service.GetallClassrooms().subscribe(classrooms => (this.classrooms = classrooms));
  }

  calculateAge() {
    const dateOfBirthControl = this.studentForm.get('dateOfBirth');
    const ageControl = this.studentForm.get('age');

    if (dateOfBirthControl && ageControl) {
      const dateOfBirth = dateOfBirthControl.value;
      if (dateOfBirth) {
        const birthDate = new Date(dateOfBirth);
        const today = new Date();
        const age = today.getFullYear() - birthDate.getFullYear();
        ageControl.setValue(age); // Update the age in the form
      }
    }
  }

  onSubmit() {
    if (this.studentForm.valid) {
      const classroomControl = this.studentForm.get('classroom');
  
      if (classroomControl && classroomControl.value) {
        const classroomId = classroomControl.value;
  
        // Call the student service to create a new student
        this.service.createStudent(this.studentForm.value, classroomId).subscribe(
          response => {
            // Handle success
            console.log('Student created successfully', response);
          },
          error => {
            // Handle error
            console.error('Error creating student', error);
            // Display an error message to the user, e.g., using a toaster or alert
          }
        );
      } else {
        // Display an error message to the user that classroom is required
        console.error('Classroom is required.');
      }
    } else {
      // Display a general validation error message to the user
      console.error('Form is invalid. Please check the fields.');
    }
  }
  
  
}
 // ngOnInit(): void {
  //   this.Student = new FormGroup({
      
  //     FirstName: new FormControl("", Validators.compose([Validators.required])),
  //     LastName: new FormControl("", Validators.compose([Validators.required])),
  //     ContactPerson: new FormControl("", Validators.compose([Validators.required])),
  //     ContactNo: new FormControl("", Validators.compose([Validators.required])),
  //     EmailAddress: new FormControl("", Validators.compose([Validators.required])),
  //     DateOfBirth: new FormControl("", Validators.compose([Validators.required])),
  //     Classroom: new FormControl("", Validators.compose([Validators.required]))

  //   });
  // }
  // Onsubmit() {
    
  //     this.Service.createStudent(this.Student.value).subscribe(response => {
  //       console.log('Student data and  uploaded successfully', response);
  //       this.Student.reset();
  //     },
  //       error => {
  //         console.error('Error uploading student data', error);
  //       })
    


  // }
