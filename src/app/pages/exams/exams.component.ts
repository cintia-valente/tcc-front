import { Component, OnInit } from '@angular/core';
import { ExamService } from '../../services/exam.service';
import { Exam } from '../../models/Exam';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { throwError } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Gender } from '../../models/Patient';

@Component({
  selector: 'app-exams',
  templateUrl: './exams.component.html',
  styleUrls: ['./exams.component.scss']
})
export class ExamsComponent implements OnInit{

  pacientForm!: FormGroup;
  exams: Exam[] = [];
  age!: number;
  gender!: string[];
  genderOptions = Object.values(Gender);

  constructor(private fb: FormBuilder, private examService: ExamService, private toastr: ToastrService) {}

  ngOnInit(): void {
    this.formPacient();
  }

  formPacient(): void {
    this.pacientForm = this.fb.group({
      name: ['', Validators.required],
      age: [null, Validators.required],
      gender: [null, Validators.required],
    });
  }

  getExams() {
    if(this.pacientForm.valid) {

      const age = this.pacientForm.get('age')?.value;
      const gender = this.pacientForm.get('gender')?.value;
      
      this.examService.getExamsByAgeAndGender(age, gender).subscribe({
        next: (data) => {
          this.exams = data;
        },
        error: (error: HttpErrorResponse) => {
          this.toastr.error(
            'Erro ao buscar os dados. Por favor, tente novamente mais tarde.'
          );

          return throwError(() => error);
        },
      });
    } else {
      console.warn('Idade e sexo obrigatórios.');
    }
  }
}
