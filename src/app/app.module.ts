import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { ClassroomsComponent } from './classrooms/classrooms.component';
import { TeachersComponent } from './teachers/teachers.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { AllocateSubjectsComponent } from './allocate-subjects/allocate-subjects.component';
import { AllocateClassroomsComponent } from './allocate-classrooms/allocate-classrooms.component';
import { StudentDetailReportComponent } from './student-detail-report/student-detail-report.component';
import { GetAllocateSubjectsComponent } from './get-allocate-subjects/get-allocate-subjects.component';


@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    ClassroomsComponent,
    TeachersComponent,
    SubjectsComponent,
    AllocateSubjectsComponent,
    AllocateClassroomsComponent,
    StudentDetailReportComponent,
    GetAllocateSubjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
