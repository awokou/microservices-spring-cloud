import axios from 'axios';

class StudentService {

    getStudents() {
        return axios.get('/api/students');
    }

    createStudent(student) {
        return axios.post('/api/students', student);
    }

    getStudentById(studentId) {
        return axios.get('/api/students/' + studentId);
    }

    updateStudent(student, studentId) {
        return axios.put('/api/students/' + studentId, student);
    }

    deleteStudent(studentId) {
        return axios.delete('/api/students/' + studentId);
    }
}

export default new StudentService()