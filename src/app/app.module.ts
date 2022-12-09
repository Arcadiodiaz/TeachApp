import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentsComponent } from './students/students.component';
import { CalendarComponent } from './calendar/calendar.component';
import { SettingsComponent } from './settings/settings.component';
import { HeaderComponent } from './header/header.component';

import { OverlayModule } from "@angular/cdk/overlay";
import { CdkMenuModule } from "@angular/cdk/menu";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//importamos las clases para trabajaŕcon firebase
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { provideAuth, getAuth} from '@angular/fire/auth';

//importar configuracion de firebase
import { environment } from 'src/environments/environment';
import { ShowComponent } from './qualifications/show/show.component';
import { CreateComponent } from './qualifications/create/create.component';
import { EditComponent } from './qualifications/edit/edit.component';
import { HomeComponent } from './landingPage/home/home.component';
import { LoginComponent } from './landingPage/login/login.component';
import { RegisterComponent } from './landingPage/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SidenavComponent,
    DashboardComponent,
    StudentsComponent,
    CalendarComponent,
    SettingsComponent,
    HeaderComponent,
    ShowComponent,
    CreateComponent,
    EditComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    OverlayModule,
    CdkMenuModule,
    AngularFireAuthModule, //modulo para trabajar con firestore
    AngularFirestoreModule, //modulo para trabajar con firestore
    FormsModule, // modulo para formularios (create y edit)
    ReactiveFormsModule, // modulo para formularios (create y edit)
    provideAuth(() => getAuth()), // modulo para trabajar con autenticacion

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
