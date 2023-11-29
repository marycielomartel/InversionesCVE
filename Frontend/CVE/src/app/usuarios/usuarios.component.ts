import { Component } from '@angular/core';
import { ApiService } from 'src/service/ApiService';
import { ConfirmationService } from 'primeng/api';
import { Usuarios } from 'src/model/usuarios.model';
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
  providers: [ApiService,ConfirmationService]
})
export class UsuariosComponent {
  constructor(private servicio:ApiService, private conf:ConfirmationService) {}

  visible:boolean = false;
  usuarios: Usuarios[];
  usuarioNueva: Usuarios =  new Usuarios();
  actualizar:boolean = false;

  //OBTENER PERSONALES
  ngOnInit():void {
    this.obtenerUsuario();
  }
  
  obtenerUsuario() {
    this.servicio.getUsuarios().subscribe(lista => {
      this.usuarios = lista;
    });
  }
  //CREAR PERSONALES
  crearUsuario(){
    this.usuarioNueva = new Usuarios();
    this.visible = true;
    this.actualizar = false;
  }
  //GUARDAR PERSONAL
  guardarUsuario(){
    if (this.actualizar){
      this.servicio.putUsuario(this.usuarioNueva).subscribe(()=>{
        this.obtenerUsuario();
        this.visible = false;
      });
    } else {
      this.servicio.postUsuario(this.usuarioNueva).subscribe(()=>{
        this.obtenerUsuario();
        this.visible = false;
      });
    }
  }
  //ELIMIAR PERSONAL
  eliminarUsuario(id:number) {
    this.conf.confirm({
      message: 'Desea eliminar a la Usuario??',
      header: 'Confirmacion',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.servicio.deleteUsuario(id.toString()).subscribe(()=>{
          this.obtenerUsuario();
        });
      },
      reject: () => {}
    });
  }  
  //ACTUALIZAR PERSONAL
  actualizarUsuario(id:number) {
    this.servicio.getUsuario(id.toString()).subscribe(usuario => {
      this.usuarioNueva = usuario;
      this.visible = true;
      this.actualizar = true;
    });
  }



}
