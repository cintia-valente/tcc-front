import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

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

@NgModule({
  declarations: [
    ExamsComponent,
    LoginComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule,
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
