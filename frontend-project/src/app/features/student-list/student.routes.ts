import { Routes } from '@angular/router';
import { StudentList } from './student-list';
import { StudentCreate } from './student-create/student-create';
import { StudentShow } from './student-show/student-show';

export const STUDENT_ROUTES: Routes = [
    {
        path: '',
        component: StudentList
    },
    {
        path: "students/create",
        component: StudentCreate
    },
    {
        path: "students/:schoolId",
        component: StudentShow
    }
];