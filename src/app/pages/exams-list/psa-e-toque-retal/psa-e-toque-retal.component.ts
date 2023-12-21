import { Component } from '@angular/core';
import { Exam } from '../../../models/Exam';
import { ExamService } from '../../../services/exam.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-psa-e-toque-retal',
  templateUrl: './psa-e-toque-retal.component.html',
  styleUrls: ['./psa-e-toque-retal.component.scss']
})
export class PsaEToqueRetalComponent {

  exams: Exam[] = [];
  urlLocation!: string;
  loading: boolean = false;

  constructor(private examService: ExamService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.loading = true;
    this.findExamById();
  } 

  findExamById() {
    this.route.paramMap.subscribe((paramMap) => {
      const id = paramMap.get('idExam');
      if (id === null) {
        return;
      }
      console.log('ID', id);
      
      this.examService.getExamById(id).subscribe((data) => {
        this.exams = [data];
        this.loading = false;

        console.log(this.exams);
      });
    });
  }

  openUrl(url: string): void {
    window.open(url, '_blank');
  }
}
