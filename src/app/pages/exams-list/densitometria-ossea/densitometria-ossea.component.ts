import { Component } from '@angular/core';
import { Exam } from '../../../models/Exam';
import { ExamService } from '../../../services/exam.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-densitometria-ossea',
  templateUrl: './densitometria-ossea.component.html',
  styleUrls: ['./densitometria-ossea.component.scss']
})
export class DensitometriaOsseaComponent {

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
