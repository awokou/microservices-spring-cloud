import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { School } from '../models/school.model';
import { SchoolResponse } from '../models/School-response.model';

@Injectable({
    providedIn: 'root',
})
export class SchoolService {

    constructor(private http: HttpClient) { }

    getAll(): Observable<School[]> {
        return this.http.get<School[]>('/api/schools');
    }

    getBySchoolId(schoolId: number): Observable<SchoolResponse[]> {
        return this.http.get<SchoolResponse[]>('/api/schools/' + schoolId);
    }

    createSchool(school: School): Observable<School> {
        return this.http.post<School>('/api/schools', school);
    }
}