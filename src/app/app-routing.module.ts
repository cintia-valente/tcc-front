import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ExamsComponent } from './pages/exams/exams.component';
import { LoginComponent } from './pages/login/login.component';
import { PapanicolauComponent } from './pages/exams-list/papanicolau/papanicolau.component';
import { EletrocardiogramaComponent } from './pages/exams-list/eletrocardiograma/eletrocardiograma.component';
import { ExameDeUrinaComponent } from './pages/exams-list/exame-de-urina/exame-de-urina.component';
import { MamografiaComponent } from './pages/exams-list/mamografia/mamografia.component';
import { HemogramaCompletoComponent } from './pages/exams-list/hemograma-completo/hemograma-completo.component';
import { DensitometriaOsseaComponent } from './pages/exams-list/densitometria-ossea/densitometria-ossea.component';
import { TshT4Component } from './pages/exams-list/tsh-t4/tsh-t4.component';
import { TesteErgometricoComponent } from './pages/exams-list/teste-ergometrico/teste-ergometrico.component';
import { PcrComponent } from './pages/exams-list/pcr/pcr.component';
import { SorologiaComponent } from './pages/exams-list/sorologia/sorologia.component';
import { GlicemiaEInsulinaComponent } from './pages/exams-list/glicemia-e-insulina/glicemia-e-insulina.component';
import { ParasitologicoComponent } from './pages/exams-list/parasitologico/parasitologico.component';
import { PsaEToqueRetalComponent } from './pages/exams-list/psa-e-toque-retal/psa-e-toque-retal.component';
import { GlicemiaComponent } from './pages/exams-list/glicemia/glicemia.component';
import { LipidogramaComponent } from './pages/exams-list/lipidograma/lipidograma.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'exames', component: ExamsComponent },
  { path: 'exame/eletro/:idExam', component: EletrocardiogramaComponent },
  { path: 'exame/mamografia/:idExam', component: MamografiaComponent },
  { path: 'exame/hemograma/:idExam', component: HemogramaCompletoComponent },
  { path: 'exame/ossea/:idExam', component: DensitometriaOsseaComponent },
  { path: 'exame/tsh-t4/:idExam', component: TshT4Component },
  { path: 'exame/ergo/:idExam', component: TesteErgometricoComponent },
  { path: 'exame/urina/:idExam', component: ExameDeUrinaComponent },
  { path: 'exame/pcr/:idExam', component: PcrComponent },
  { path: 'exame/soro/:idExam', component: SorologiaComponent },
  { path: 'exame/papanicolau/:idExam', component: PapanicolauComponent },
  { path: 'exame/insulina/:idExam', component: GlicemiaEInsulinaComponent },
  { path: 'exame/parasita/:idExam', component: ParasitologicoComponent },
  { path: 'exame/psa/:idExam', component: PsaEToqueRetalComponent },
  { path: 'exame/glicemia/:idExam', component: GlicemiaComponent },
  { path: 'exame/lipidograma/:idExam', component: LipidogramaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
