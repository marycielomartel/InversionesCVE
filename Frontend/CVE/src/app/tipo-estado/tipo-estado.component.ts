import { Component } from '@angular/core';
import { ApiService } from 'src/service/ApiService';
import { ConfirmationService } from 'primeng/api';
import { tipoestado } from 'src/model/tipoestado';

@Component({
  selector: 'app-tipo-estado',
  templateUrl: './tipo-estado.component.html',
  styleUrls: ['./tipo-estado.component.css'],
  providers: [ApiService, ConfirmationService]
})
export class TipoEstadoComponent {
  constructor(private servicio:ApiService, private conf:ConfirmationService) {}

  visible:boolean = false;
  tipoestado: tipoestado[];
  tipoEnuevo: tipoestado =  new tipoestado();
  actualizar:boolean = false;

  ngOnInit():void { 
    this.obtenerTipoEstados();
  }
  obtenerTipoEstados(){
    this.servicio.getTipoEstados().subscribe(lista =>{
      this.tipoestado = lista;
    });
  }
  crearTipoEstado(){
    this.tipoEnuevo = new tipoestado();
    this.visible = true;
  }
  guardarTipoEstado(){
    if (this.actualizar){
      this.servicio.putTipoEstado(this.tipoEnuevo).subscribe(()=>{
        this.obtenerTipoEstados();
        this.visible = false;
      });
    } else {
      this.servicio.postTipoEstado(this.tipoEnuevo).subscribe(()=>{
        this.obtenerTipoEstados();
        this.visible = false;
      });
    }
  }
  eliminarTipoEstado(id:number){
    this.conf.confirm({
      message:'¿Desea eliminar este tamaño?',
        header:'Confirmacion',
        icon:'pi pi-exclamation-triangle',
        accept: () => {
          this.servicio.deleteTipoEstado(id.toString()).subscribe(()=>{
            this.obtenerTipoEstados();
          });
        },
        reject: () => {}
    });
  }
  actualizarTipoEstado(id:number) {
    this.servicio.getTipoEstado(id.toString()).subscribe(tipoestado => {
      this.tipoEnuevo = tipoestado;
      this.visible = true;
      this.actualizar = true;
    });
  }  

}
