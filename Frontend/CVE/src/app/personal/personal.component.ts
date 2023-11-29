import { Component } from '@angular/core';
import { ApiService } from 'src/service/ApiService';
import { ConfirmationService } from 'primeng/api';
import { Personal } from 'src/model/Personal.model';
@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css'],
  providers: [ApiService,ConfirmationService]
})
export class PersonalComponent {
  constructor(private servicio:ApiService, private conf:ConfirmationService) {}

  visible:boolean = false;
  personales: Personal[];
  personalNueva: Personal =  new Personal();
  actualizar:boolean = false;

  //OBTENER PERSONALES
  ngOnInit():void {
    this.obtenerPersonal();
  }
  
  obtenerPersonal() {
    this.servicio.getPersonales().subscribe(lista => {
      this.personales = lista;
    });
  }
  //CREAR PERSONALES
  crearPersonal(){
    this.personalNueva = new Personal();
    this.visible = true;
    this.actualizar = false;
  }

  //GUARDAR PERSONAL
  guardarPersonal(){
    if (this.actualizar){
      this.servicio.putPersonal(this.personalNueva).subscribe(()=>{
        this.obtenerPersonal();
        this.visible = false;
      });
    } else {
      this.servicio.postPersonal(this.personalNueva).subscribe(()=>{
        this.obtenerPersonal();
        this.visible = false;
      });
    }
  }
  //ELIMIAR PERSONAL
  eliminarPersonal(id:number) {
    this.conf.confirm({
      message: 'Desea eliminar a la personal??',
      header: 'Confirmacion',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.servicio.deletePersonal(id.toString()).subscribe(()=>{
          this.obtenerPersonal();
        });
      },
      reject: () => {}
    });
  }  
  //ACTUALIZAR PERSONAL
  actualizarPersonal(id:number) {
    this.servicio.getPersonal(id.toString()).subscribe(personal => {
      this.personalNueva = personal;
      this.visible = true;
      this.actualizar = true;
    });
  }

}
