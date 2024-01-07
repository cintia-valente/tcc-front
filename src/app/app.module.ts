import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AppRoutingModule } from './app-routing.module';

// import { ToastrModule } from 'ngx-toastr';

// import { AuthService } from './core/auth/auth.service';
// import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
// import { TokenInterceptor } from './core/auth/token-inteceptor';

import { ExamsComponent } from './pages/exams/exams.component';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { PapanicolauComponent } from './pages/exams-list/papanicolau/papanicolau.component';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { DensitometriaOsseaComponent } from './pages/exams-list/densitometria-ossea/densitometria-ossea.component';
import { EletrocardiogramaComponent } from './pages/exams-list/eletrocardiograma/eletrocardiograma.component';
import { ExameDeUrinaComponent } from './pages/exams-list/exame-de-urina/exame-de-urina.component';
import { GlicemiaComponent } from './pages/exams-list/glicemia/glicemia.component';
import { GlicemiaEInsulinaComponent } from './pages/exams-list/glicemia-e-insulina/glicemia-e-insulina.component';
import { HemogramaCompletoComponent } from './pages/exams-list/hemograma-completo/hemograma-completo.component';
import { LipidogramaComponent } from './pages/exams-list/lipidograma/lipidograma.component';
import { MamografiaComponent } from './pages/exams-list/mamografia/mamografia.component';
import { ParasitologicoComponent } from './pages/exams-list/parasitologico/parasitologico.component';
import { PcrComponent } from './pages/exams-list/pcr/pcr.component';
import { PsaEToqueRetalComponent } from './pages/exams-list/psa-e-toque-retal/psa-e-toque-retal.component';
import { SorologiaComponent } from './pages/exams-list/sorologia/sorologia.component';
import { TesteErgometricoComponent } from './pages/exams-list/teste-ergometrico/teste-ergometrico.component';
import { TshT4Component } from './pages/exams-list/tsh-t4/tsh-t4.component';

@NgModule({
  declarations: [
    ExamsComponent,
    LoginComponent,
    DensitometriaOsseaComponent,
    EletrocardiogramaComponent,
    ExameDeUrinaComponent,
    GlicemiaComponent,
    GlicemiaEInsulinaComponent,
    HemogramaCompletoComponent,
    LipidogramaComponent,
    MamografiaComponent,
    PapanicolauComponent,
    ParasitologicoComponent,
    PcrComponent,
    PsaEToqueRetalComponent,
    SorologiaComponent,
    TesteErgometricoComponent,
    TshT4Component,
    NavBarComponent,
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule,
    BsDropdownModule.forRoot(),
    ToastrModule.forRoot(),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  // providers: [
   // AuthService,
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: TokenInterceptor,
    //   multi: true,
    // },
    // { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    // JwtHelperService,
 // ],
  bootstrap: [AppComponent],
})
export class AppModule {}
