import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Teacher } from '../classes/Teacher';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  private baseUrl = 'http://127.0.0.1:8000/api/teachers';

  constructor(private http: HttpClient) {
  }

  login(teacher: Teacher): Observable<any> {
    return this.http.post(this.baseUrl + `/login`, teacher);
  }

  list(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  loggedIn() {
    return (localStorage.getItem('user_type') == 'teacher');
  }

  getCount(): Observable<any> {
    return this.http.get(`${this.baseUrl}/count`);
  }

  deleteTeacherById(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  insertTeacher(teacher: Teacher): Observable<any> {
    return this.http.post(`${this.baseUrl}`, teacher);
  }

  getTeacherByUsername(username: string) {
    return this.http.get(`${this.baseUrl}/${username}`);
  }

  updateTeacher(teacher: Teacher): Observable<any> {
    return this.http.put(`${this.baseUrl}`, teacher);
  }

  getCourses(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/id/${id}/courses`);
  }
}
