import { Component, OnInit } from '@angular/core';
import { ExamService } from '../../services/exam.service';
import { Exam } from '../../models/Exam';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { throwError } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Gender } from '../../models/Patient';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exams',
  templateUrl: './exams.component.html',
  styleUrls: ['./exams.component.scss']
})
export class ExamsComponent implements OnInit {

  pacientForm!: FormGroup;
  exams!: Exam[];
  age!: number;
  gender!: string[];
  genderOptions = Object.values(Gender);

  examIdMap: { [examName: string]: string } = {
    'Eletrocardiograma': 'ef4564b9-6537-4ac0-9ac5-e0d12ad8f1f5',
    'Mamografia': '89a5ac53-60c0-479d-81ea-545ee1409b81',
    'Hemograma completo': '8b07b191-3732-4359-a309-05d8d3f09165',
    'Densitometria óssea': '73fd56cf-65d0-4558-9d7e-ff91dbb5f95b',
    'TSH e T4': '0cd08e05-af20-49e8-a951-46875d3e9f37',
    'Teste ergométrico': '32334b37-8b2a-4462-94d4-8710844f8599',
    'Exame de urina': '1e7a5f4d-9cf7-4eac-ad03-4c6470fc63a7',
    'PCR': 'd3331bc1-86d3-4e7d-b8ec-1250f0cb0aed',
    'Sorologia': '6b283795-5afb-4ab8-a583-f986d078ed87',
    'Papanicolau': 'f3b179d8-6a5f-4bfa-83ab-8c49c06ef80e',
    'Glicemia e insulina': '79eae44a-381f-45c8-97a8-0747d8b90651',
    'Parasitológico': 'a88de5b2-dbcc-4754-8a07-9edf859a2e90',
    'PSA e toque retal': '2d47211c-ddb9-43ef-a386-26150d4dfabc',
    'Glicemia': '06ae8176-d731-4aa3-9154-3f42bb61f39e',
    'Lipidograma': 'c181c118-d095-4611-b5cd-31d9bd3d0d84'
  };

  constructor(private fb: FormBuilder, private router: Router, private examService: ExamService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.formPacient();
    this.getExams();
  }

  formPacient(): void {
    this.pacientForm = this.fb.group({
      name: ['', Validators.required],
      age: [null, Validators.required],
      gender: [null, Validators.required],
    });
  }

  getExams() {
    if (this.pacientForm.valid) {

      const age = this.pacientForm.get('age')?.value;
      const gender = this.pacientForm.get('gender')?.value;

      this.examService.getExamsByAgeAndGender(age, gender).subscribe({
        next: (data) => {
          this.exams = data;
          console.log(data);

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

  enter(examName: string) {
    const examId = this.examIdMap[examName];

    if (examName === 'Eletrocardiograma') {
      this.router.navigate(['/exame/eletro', examId]);
    } else if (examName === 'Mamografia') {
      this.router.navigate(['/exame/mamografia', examId]);
    }
    else if (examName === 'Hemograma completo') {
      this.router.navigate(['/exame/hemograma', examId]);
    }
    else if (examName === 'Densitometria óssea') {
      this.router.navigate(['/exame/ossea', examId]);
    }
    else if (examName === 'TSH e T4') {
      this.router.navigate(['/exame/tsh-t4', examId]);
    }
    else if (examName === 'Teste ergométrico') {
      this.router.navigate(['/exame/ergo', examId]);
    }
    else if (examName === 'Exame de urina') {
      this.router.navigate(['/exame/urina', examId]);
    }
    else if (examName === 'PCR') {
      this.router.navigate(['/exame/pcr', examId]);
    }
    else if (examName === 'Sorologia') {
      this.router.navigate(['/exame/soro', examId]);
    }
    else if (examName === 'Papanicolau') {
      this.router.navigate(['/exame/papanicolau', examId]);
    }
    else if (examName === 'Glicemia e insulina') {
      this.router.navigate(['/exame/insulina', examId]);
    }
    else if (examName === 'Parasitológico') {
      this.router.navigate(['/exame/parasita', examId]);
    }
    else if (examName === 'PSA e toque retal') {
      this.router.navigate(['/exame/psa', examId]);
    }
    else if (examName === 'Glicemia') {
      this.router.navigate(['/exame/glicemia', examId]);
    }
    else this.router.navigate(['/exame/lipidograma', examId]);
  }
}
