import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Student } from '../Model/Student';
import { Classroom } from '../Model/Classroom';
import { Subjects } from '../Model/Subjects';
import { Teacher } from '../Model/Teachers';
import { AllocateSubject } from '../Model/AllocateSubject';
import { AllocateClassroom } from '../Model/AllocateClassroom';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {
  // private StudentUrl='https://localhost:7036'
  private StudentUrl = 'https://localhost:7290'

  constructor(private http: HttpClient) { }

  createStudent(studentToCreate: Student,classroomId: number): Observable<any> {
   
    
    // Student?classroomId=1 Assuming your API endpoint is at /api/student/create with a query parameter for classroomId
    const url = `${this.StudentUrl}/api/Student?classroomId=${classroomId}`;

    return this.http.post(url, studentToCreate);
  }
 
  getStudentById(studentId: number): Observable<Student> {
    return this.http.get<Student>(`${this.StudentUrl}/Student/GetById?StudentId=${studentId}`);
  }
 
 
  deleteStudentById(studentId: number): Observable<void> {
    return this.http.delete<void>(`${this.StudentUrl}/Student/DeleteById?StudentId=${studentId}`);
  }

 
  getAllStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.StudentUrl}/GetAll`);
  }


  updateStudent(studentId: number, updatedStudent: Student): Observable<Student> {
    return this.http.put<Student>(`${this.StudentUrl}/UpdateStudent/studentId?studentId=${studentId}`, updatedStudent);
  }
 //https://localhost:7290/api/Classroom
  GetallClassrooms(): Observable<Classroom[]> {
    return this.http.get<Classroom[]>(`${this.StudentUrl}/api/Classroom`)
  }
  GetallClassroom(classroomId:number): Observable<Classroom> {
    return this.http.get<Classroom>(`${this.StudentUrl}/api/ClassRoom/${classroomId}`)
  }
  //https://localhost:7290/api/Subject
  GetSubjects(): Observable<Subjects[]> {
    return this.http.get<Subjects[]>(`${this.StudentUrl}/api/Subject`)
  }
  //https://localhost:7290/api/Teacher
  GetTeachers(): Observable<Teacher[]> {
    return this.http.get<Teacher[]>(`${this.StudentUrl}/api/Teacher`)
  }
  //https://localhost:7290/api/AllocateSubject
  AllocateSubjects(allocateSubject: AllocateSubject): Observable<AllocateSubject> {
    return this.http.post<AllocateSubject>(`${this.StudentUrl}/api/AllocateSubject`, allocateSubject)
  }
  //https://localhost:7290/api/AllocateClassroom
  AllocateClassrooms(allocateClassroom: any): Observable<AllocateClassroom> {
    return this.http.post<any>(`${this.StudentUrl}/api/AllocateClassroom`, allocateClassroom)
  }
}
