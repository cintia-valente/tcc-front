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
    'Eletrocardiograma': '37b64c5f-5188-484f-b595-fd18e81b99d6',
    'Mamografia': '1d42680e-8c47-4f1a-bf49-1fb1b23678e4',
    'Hemograma completo': '861730e4-168b-41ed-a293-4b67e3211171',
    'Densitometria óssea': '07da538e-c5fd-427d-8343-cbe9a2fc8507',
    'TSH e T4': '7b0a6064-4eef-43c1-ac80-29ca07a8f242',
    'Teste ergométrico': '3bb1ccbe-a321-4761-8a8e-d0eec0bdc4d6',
    'Exame de urina': '22244443-c1d0-4cba-a2c6-e5bc00cbf21b',
    'PCR': 'bb0253ea-258d-4160-89e2-3b38c83d5a68',
    'Sorologia': '1658db77-5ec0-4cbf-b7b6-28427bf2833f',
    'Papanicolau': '1472e1b2-174b-41ff-8541-72f511ccd091',
    'Glicemia e insulina': 'd7d44cdf-dbe6-4526-a22b-7d6aa76850a8',
    'Parasitológico': 'a790ccee-dde9-47ef-9b22-917e5602d6dc',
    'PSA e toque retal': 'e94af675-fcba-4a2b-b938-1c0c639d5397',
    'Glicemia': '34e42041-f264-4d3c-9595-2e2e70605275',
    'Lipidograma': 'bf4c3ada-4ddf-41bd-8a2d-3bc5ae23a482'
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
