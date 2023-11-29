import { Component } from '@angular/core';
import { ApiService } from 'src/service/ApiService';
import { ConfirmationService } from 'primeng/api';
import { facturas } from 'src/model/facturas.model';
import { tipoestado } from 'src/model/tipoestado';
@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.component.html',
  styleUrls: ['./facturas.component.css'],
  providers: [ApiService,ConfirmationService]
})
export class FacturasComponent {
  constructor(private servicio:ApiService, private conf:ConfirmationService) {}
  
  visible:boolean = false;
  facturas: facturas[];
  facturaNueva: facturas =  new facturas();
  actualizar:boolean = false;

  listaEstado: tipoestado[];
  estadoSeleccionado: tipoestado;
 
  ngOnInit():void {
    this.obtenerFactura();
    this.obtenerTipoEstados();
  }
  obtenerTipoEstados(){
    this.servicio.getTipoEstados().subscribe(x =>{
      this.listaEstado = x;
    });
  }
  
  obtenerFactura() {
    this.servicio.getFacturas().subscribe(lista => {
      this.facturas = lista;
    });
  }
  //CREAR FACTURAS
  crearFactura(){
    this.facturaNueva = new facturas();
    this.visible = true;
    this.actualizar = false;
  }

  //GUARDAR FACTURA
  guardarFactura(){
    if (this.actualizar){
      this.facturaNueva.estado = this.estadoSeleccionado.id;
      this.servicio.putFactura(this.facturaNueva).subscribe(()=>{
        this.obtenerFactura();
        this.visible = false;
      });
    } else {
      this.facturaNueva.estado = this.estadoSeleccionado.id;
      this.servicio.postFactura(this.facturaNueva).subscribe(()=>{
        this.obtenerFactura();
        this.visible = false;
      });
    }
  }
  //ELIMIAR FACTURA
  eliminarFactura(id:number) {
    this.conf.confirm({
      message: 'Desea eliminar a la Factura??',
      header: 'Confirmacion',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.servicio.deleteFactura(id.toString()).subscribe(()=>{
          this.obtenerFactura();
        });
      },
      reject: () => {}
    });
  }  
  //ACTUALIZAR FACTURA
  actualizarFactura(id:number) {
    this.servicio.getFactura(id.toString()).subscribe(factura => {
      this.facturaNueva = factura;
      this.visible = true;
      this.actualizar = true;
    });
  }

}
