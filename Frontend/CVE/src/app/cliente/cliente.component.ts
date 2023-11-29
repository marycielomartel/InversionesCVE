import { Component } from '@angular/core';
import { ApiService } from 'src/service/ApiService';
import { ConfirmationService } from 'primeng/api';
import { cliente } from 'src/model/cliente.model';
import { tipoestado } from 'src/model/tipoestado';
import { ImpresionService } from '../shared/services/impresion.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css'],
  providers: [ApiService, ConfirmationService],
  animations: [
    trigger('estadoFiltrar', [
      state('show', style({
        'max-height':'100%', 
        'transform': 'translate(12px)'

      })),
      state('hide', style({
        'max-height':'0', 
        'transform': 'translate(-100%)'
      })),
      transition('show => hide', animate('600ms ease-in-out')),
      transition('hide => show', animate('1000ms ease-in-out'))

    ])
  ],
})
export class ClienteComponent {
  filtroVisible = false;
  constructor(
    private servicio:ApiService, 
    private conf:ConfirmationService,
    private srvImpresion : ImpresionService

    ) {}

  visible:boolean = false;
  actualizar:boolean = false;
  clientes: cliente[];
  clienteNueva: cliente =  new cliente();
  
 
  listaEstado: tipoestado[];
  estadoSeleccionado: tipoestado;

  ngOnInit():void {
    this.obtenerCliente();
    this.obtenerTipoEstados();
  }
  
  obtenerCliente() {
    this.servicio.getClientes().subscribe(x => {
      this.clientes = x;
    });
  }
  
  obtenerTipoEstados(){
    this.servicio.getTipoEstados().subscribe(x =>{
      this.listaEstado = x;
    });
  }

  //CREAR CLIENTES
  crearCliente(){
    this.clienteNueva = new cliente();
    this.visible = true;
    this.actualizar = false;
  }

  //GUARDAR CLIENTE
  guardarCliente(){
    if (this.actualizar){
      this.clienteNueva.estado = this.estadoSeleccionado.id;
      console.log("ID de estado seleccionado:", this.clienteNueva.estado);
      this.servicio.putCliente(this.clienteNueva).subscribe(()=>{
        this.obtenerCliente();
        this.visible = false;
      });
    } else {
      this.clienteNueva.estado = this.estadoSeleccionado.id;
      console.log("ID de estado seleccionado:", this.clienteNueva.estado);
      this.servicio.postCliente(this.clienteNueva).subscribe(()=>{
        this.obtenerCliente();
        this.visible = false;
      });
    }
  }
  //ELIMIAR CLIENTE
  eliminarCliente(id:number) {
    this.conf.confirm({
      message: 'Desea eliminar el Cliente??',
      header: 'Confirmacion',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.servicio.deleteCliente(id.toString()).subscribe(()=>{
          this.obtenerCliente();
        });
      },
      reject: () => {}
    });
  }  
  //ACTUALIZAR CLIENTE
  actualizarCliente(id:number) {
    this.servicio.getCliente(id.toString()).subscribe(cliente => {
      this.clienteNueva = cliente;
      this.visible = true;
      this.actualizar = true;
    });
  }

  onImprimir(){
    const encabezado = ["Id", "Nombre", "Departamento", "Provincia"]
    const cuerpo = ["1111", "Luis", "Lima", "Lima"];
    this.srvImpresion.imprimir(encabezado, cuerpo, "Listado de Clientes", true);
  }

  get stateName(){
    return this.filtroVisible ? 'show' : 'hide'
  }

  mostrarFiltrar(){
    this.filtroVisible = !this.filtroVisible;
  }

}
