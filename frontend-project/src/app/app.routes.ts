import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'student',
        pathMatch: 'full'
    },
    {
        path: 'student',
        loadChildren: () => import('./features/student-list/student.routes').then(m => m.STUDENT_ROUTES),
        title: 'Listes student'
    },
];
