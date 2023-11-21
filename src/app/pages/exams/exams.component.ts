import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamService } from '../../services/exam.service';
import { Exam } from '../../models/Exam';

@Component({
  selector: 'app-exams',
  templateUrl: './exams.component.html',
  styleUrls: ['./exams.component.scss']
})
export class ExamsComponent implements OnInit{

  exams: Exam[] = [];

  constructor(private examService: ExamService) {}

  ngOnInit(): void {
   this.getExams();
  }

  getExams() {
    this.examService.getExams().subscribe(data => {
      console.log(data);   
    });
  }
}
