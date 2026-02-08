import { Student } from "./student.model";

export interface SchoolResponse {
    name: string;
    email: string;
    students: Student[];
}