import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ExamsComponent } from './pages/exams/exams.component';
import { LoginComponent } from './pages/login/login.component';
import { PapanicolauComponent } from './pages/exams-list/papanicolau/papanicolau.component';
import { EletrocardiogramaComponent } from './pages/exams-list/eletrocardiograma/eletrocardiograma.component';
//import { MamografiaComponent } from './pages/exams-list/mamografia/mamografia.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'exames', component: ExamsComponent },
  { path: 'exame/:idExam', component: PapanicolauComponent },
  { path: 'exame/:idExam', component: EletrocardiogramaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
