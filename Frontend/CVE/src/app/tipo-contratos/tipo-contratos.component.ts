import { Component } from '@angular/core';
import { ApiService } from 'src/service/ApiService';
import { ConfirmationService } from 'primeng/api';
import { tipocontrato } from 'src/model/tipocontrato';

@Component({
  selector: 'app-tipo-contratos',
  templateUrl: './tipo-contratos.component.html',
  styleUrls: ['./tipo-contratos.component.css'],
  providers: [ApiService, ConfirmationService]
})
export class TipoContratoComponent {
  constructor(private servicio:ApiService, private conf:ConfirmationService) {}

  visible:boolean = false;
  tipocontratos: tipocontrato[];
  tipocnuevo: tipocontrato =  new tipocontrato();
  actualizar:boolean = false;

  ngOnInit():void { 
    this.obtenerTipoContratos();
  }
  obtenerTipoContratos(){
    this.servicio.getTipoContratos().subscribe(lista =>{
      this.tipocontratos = lista;
    });
  }
  crearTipoContrato(){
    this.tipocnuevo = new tipocontrato();
    this.visible = true;
  }
  guardarTipoContrato(){
    if (this.actualizar){
      this.servicio.putTipoContrato(this.tipocnuevo).subscribe(()=>{
        this.obtenerTipoContratos();
        this.visible = false;
      });
    } else {
      this.servicio.postTipoContrato(this.tipocnuevo).subscribe(()=>{
        this.obtenerTipoContratos();
        this.visible = false;
      });
    }
  }
  eliminarTipoContrato(id:number){
    this.conf.confirm({
      message:'¿Desea eliminar este tamaño?',
        header:'Confirmacion',
        icon:'pi pi-exclamation-triangle',
        accept: () => {
          this.servicio.deleteTipoContratos(id.toString()).subscribe(()=>{
            this.obtenerTipoContratos();
          });
        },
        reject: () => {}
    });
  }
  actualizarTipoContrato(id:number) {
    this.servicio.getTipoContrato(id.toString()).subscribe(tipocontrato => {
      this.tipocnuevo = tipocontrato;
      this.visible = true;
      this.actualizar = true;
    });
  }

}
