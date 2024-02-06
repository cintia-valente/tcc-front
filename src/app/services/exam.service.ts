import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { Exam } from '../models/Exam';


@Injectable({
  providedIn: 'root'
})
export class ExamService {

  private apiUrl = `${environment.ApiUrl}/Exam`

  constructor(private http: HttpClient) { }
  
  getExams(): Observable<Exam[]> {
    return this.http.get<Exam[]>(this.apiUrl);
  }

  getExamsByAgeAndGender(age: number, gender: string): Observable<Exam[]> {
    const params = new HttpParams().set('age', age.toString()).set('gender', gender);
  
    return this.http.get<Exam[]>(`${this.apiUrl}/list-exams/${age}/${gender}`, { params });
  }
  
  getExamById(idExam: string): Observable<Exam> {
    const url = `${this.apiUrl}/${idExam}`;
    return this.http.get<Exam>(url).pipe(
      tap((data) => console.log('Data:', data)),
      catchError((error) => {
        console.error('Error:', error);
        return new Observable<never>(() => {});
      })
    );
  }
}
