import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
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

  // getExamsForAgeGender(): Observable<Exam[]> {
  //   return this.http.get<Exam[]>(this.apiUrl);
  // }
}
