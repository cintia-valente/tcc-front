import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ExamsComponent } from './pages/exams/exams.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'exames', component: ExamsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
