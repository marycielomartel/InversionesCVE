import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

//Imports de PrimeNG
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { CalendarModule } from 'primeng/calendar';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { AccordionModule } from 'primeng/accordion';
import { AvatarModule } from 'primeng/avatar';
import { PanelModule } from 'primeng/panel';
import { CarouselModule } from 'primeng/carousel';
import { PaginatorModule } from 'primeng/paginator';


//CLASES
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonalComponent } from './personal/personal.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { FacturasComponent } from './facturas/facturas.component';
import { ContratosComponent } from './contratos/contratos.component';
import { ClienteComponent } from './cliente/cliente.component';
import { TipoContratoComponent } from './tipo-contratos/tipo-contratos.component';
import { TipoEstadoComponent } from './tipo-estado/tipo-estado.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { ReporteComponent } from './reporte/reporte.component';


@NgModule({
  declarations: [
    AppComponent,
    PersonalComponent,
    UsuariosComponent,
    FacturasComponent,
    ContratosComponent,
    ClienteComponent,
    TipoContratoComponent,
    TipoEstadoComponent,
    LoginComponent,
    RegisterComponent,
    NavComponent,
    HomeComponent,
    ReporteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AvatarModule,
    AccordionModule,
    PanelModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    TableModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    ConfirmDialogModule,
    CalendarModule,
    MultiSelectModule,
    DropdownModule,
    AutoCompleteModule,
    CarouselModule,
    ReactiveFormsModule,
    PaginatorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
