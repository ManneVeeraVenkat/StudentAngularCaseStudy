import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StudentsComponent } from './students/students.component';

import { AllocateSubjectsComponent } from './allocate-subjects/allocate-subjects.component';
import { AllocateClassroomsComponent } from './allocate-classrooms/allocate-classrooms.component';

const routes: Routes = [
  { path: 'add-student', component: StudentsComponent },
  { path: 'allocate-subject', component: AllocateSubjectsComponent }, 
  { path: 'allocate-classroom', component: AllocateClassroomsComponent }, 
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
