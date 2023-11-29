import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PersonalComponent } from './personal/personal.component';
import { FacturasComponent } from './facturas/facturas.component';
import { ContratosComponent } from './contratos/contratos.component';
import { ClienteComponent } from './cliente/cliente.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { TipoContratoComponent } from './tipo-contratos/tipo-contratos.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'Personal',component:PersonalComponent},
  {path:'Usuarios',component:UsuariosComponent},
  {path:'Facturas',component:FacturasComponent},
  {path:'Contratos',component:ContratosComponent},
  {path:'Cliente',component:ClienteComponent},
  {path:'tipocontrato',component:TipoContratoComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
