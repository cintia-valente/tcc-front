import 'zone.js/testing';
import { ComponentFixture, TestBed, TestComponentRenderer, getTestBed, waitForAsync } from '@angular/core/testing';

import { ExamsComponent } from './exams.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule } from 'ngx-toastr';
import { ExamService } from '../../services/exam.service';
import { NO_ERRORS_SCHEMA, NgZone } from '@angular/core';
import { of } from 'rxjs';
import { Routes } from '@angular/router';
import { Exam } from '../../models/Exam';
import { Gender, Patient } from '../../models/Patient';

const mockPatient: Patient = {
  idPatient: '1',
  name: 'Teste',
  age: 33,
  gender: Gender.Feminino,
}

const mockExams: Exam[] = [
  {
    idExam: "0b9ad82e-7cb9-4087-8a1e-d2b0d27f1e27",
    description: 'Teste',
    idPatient: '1',
    name: "Eletrocardiograma",
    patient: mockPatient,
    urlLocations: "https://www.google.com/"
  }
];

class ExamServiceMock {
  getExamsByAgeAndGender(age: any, gender: any): any {
    return of(mockExams);
  }
}

const routes: Routes = [
  {
    path: 'exame',
    component: TestComponentRenderer,
  },
];

describe('ExamsComponent', () => {
  let component: ExamsComponent;
  let fixture: ComponentFixture<ExamsComponent>;
  let examService: ExamService;

  beforeEach(waitForAsync (() => {
     TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
       // RouterTestingModule.withRoutes(routes),
      ],
      declarations: [ExamsComponent],
      providers: [
        { provide: ExamService, useClass: ExamServiceMock },
        { provide: NgZone, useValue: { run(fn: any): any { return fn(); } } },
        FormBuilder,
      ],
    }).compileComponents();


  fixture = TestBed.createComponent(ExamsComponent);
    component = fixture.componentInstance;
    examService = TestBed.inject(ExamService);
    jest.spyOn(examService, 'getExamsByAgeAndGender').mockReturnValue(of(mockExams));

    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
