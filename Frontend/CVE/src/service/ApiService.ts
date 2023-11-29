import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Personal } from "src/model/Personal.model";
import { Usuarios } from "src/model/usuarios.model";
import { facturas } from "src/model/facturas.model";
import { contratos } from "src/model/contratos.model";
import { cliente } from "src/model/cliente.model";
import { tipocontrato } from "src/model/tipocontrato";
import { tipoestado } from "src/model/tipoestado";




@Injectable({
  providedIn: "root"
})


export class ApiService {
    private ApiUrl = "http://localhost:8000/CVE/"; // URL to web api
    private httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
    };
    constructor(private http: HttpClient) {
    }

    

    //*********************  PERSONAL *********** */
    //GET PERSONALES - PLURAL
    public getPersonales(): Observable<Personal[]> {
    return this.http.get<Personal[]>(this.ApiUrl + 'Personal')
    }

    //GET PERSONAL - SINGULAR
    public getPersonal(id:string): Observable<Personal> {
        return this.http.get<Personal>(this.ApiUrl + 'Personal/' + id)
    }

    //POST PERSONAL
    public postPersonal(pe:Personal):Observable<void>{
        let body = JSON.stringify(pe);
        return this.http.post<void>(this.ApiUrl + 'Personal/',body,this.httpOptions);
    }

    //DELETE PERSONAL
    public deletePersonal(id:string): Observable<void> {
        return this.http.delete<void>(this.ApiUrl + 'Personal/' + id)
    }

    //PUT PERSONAL
    public putPersonal(pe:Personal):Observable<void>{
        let body = JSON.stringify(pe);
        return this.http.put<void>(this.ApiUrl + 'Personal/' + pe.id + '/',body,this.httpOptions);
    }


    //*********************  USUARIOS*********** */

    //GET USUARIOS - PLURAL
    public getUsuarios(): Observable<Usuarios[]> {
        return this.http.get<Usuarios[]>(this.ApiUrl + 'Usuarios')
    }
    //GET USUARIO - SINGULAR
    public getUsuario(id:string): Observable<Usuarios> {
        return this.http.get<Usuarios>(this.ApiUrl + 'Usuarios/' + id)
    }

    //POST USUARIO
    public postUsuario(us:Usuarios):Observable<void>{
        let body = JSON.stringify(us);
        return this.http.post<void>(this.ApiUrl + 'Usuarios/',body,this.httpOptions);
    }

    //DELETE USUARIO
    public deleteUsuario(id:string): Observable<void> {
        return this.http.delete<void>(this.ApiUrl + 'Usuarios/' + id)
    }

    //PUT USUARIO
    public putUsuario(us:Usuarios):Observable<void>{
        let body = JSON.stringify(us);
        return this.http.put<void>(this.ApiUrl + 'Usuarios/' + us.id + '/',body,this.httpOptions);
    }




   //*********************  FACTURAS *********** */

    //GET FACTURAS - PLURAL
    public getFacturas(): Observable<facturas[]> {
        return this.http.get<facturas[]>(this.ApiUrl + 'Facturas')
    }
    //GET FACTURA - SINGULAR
    public getFactura(id:string): Observable<facturas> {
        return this.http.get<facturas>(this.ApiUrl + 'Facturas/' + id)
    }

    //POST FACTURA
    public postFactura(fa:facturas):Observable<void>{
        let body = JSON.stringify(fa);
        return this.http.post<void>(this.ApiUrl + 'Facturas/',body,this.httpOptions);
    }

    //DELETE FACTURA
    public deleteFactura(id:string): Observable<void> {
        return this.http.delete<void>(this.ApiUrl + 'Facturas/' + id)
    }

    //PUT FACTURA
    public putFactura(fa:facturas):Observable<void>{
        let body = JSON.stringify(fa);
        return this.http.put<void>(this.ApiUrl + 'Facturas/' + fa.id + '/',body,this.httpOptions);
    }



   //*********************  CONTRATOS *********** */

    //GET CONTRATOS - PLURAL
    public getContratos(): Observable<contratos[]> {
        return this.http.get<contratos[]>(this.ApiUrl + 'Contratos')
    }
    //GET CONTRATO - SINGULAR
    public getContrato(id:string): Observable<contratos> {
        return this.http.get<contratos>(this.ApiUrl + 'Contratos/' + id)
    }

    //POST CONTRATO
    public postContrato(co:contratos):Observable<void>{
        let body = JSON.stringify(co);
        return this.http.post<void>(this.ApiUrl + 'Contratos/',body,this.httpOptions);
    }

    //DELETE CONTRATO
    public deleteContrato(id:string): Observable<void> {
        return this.http.delete<void>(this.ApiUrl + 'Contratos/' + id)
    }

    //PUT CONTRATO
    public putContrato(co:contratos):Observable<void>{
        let body = JSON.stringify(co);
        return this.http.put<void>(this.ApiUrl + 'Contratos/' + co.id + '/',body,this.httpOptions);
    }



   //*********************  CLIENTES *********** */


    //GET CLIENTES - PLURAL
    public getClientes(): Observable<cliente[]> {
        return this.http.get<cliente[]>(this.ApiUrl + 'Cliente')
    }
    //GET CLIENTE - SINGULAR
    public getCliente(id:string): Observable<cliente> {
        return this.http.get<cliente>(this.ApiUrl + 'Cliente/' + id)
    }

    //POST CLIENTE
    public postCliente(cl:cliente):Observable<void>{
        let body = JSON.stringify(cl);
        return this.http.post<void>(this.ApiUrl + 'Cliente/',body,this.httpOptions);
    }

    //DELETE CLIENTE
    public deleteCliente(id:string): Observable<void> {
        return this.http.delete<void>(this.ApiUrl + 'Cliente/' + id)
    }

    //PUT CLIENTE
    public putCliente(cl:cliente):Observable<void>{
        let body = JSON.stringify(cl);
        return this.http.put<void>(this.ApiUrl + 'Cliente/' + cl.id + '/',body,this.httpOptions);
    }


     //*********************  TIPO CONTRATO *********** */
//Get TipoContrato
    public getTipoContratos(): Observable<tipocontrato[]> {
        return this.http.get<tipocontrato[]>(this.ApiUrl +"tipocontrato")
    }
    //Get Tamaño
    public getTipoContrato(id:string): Observable<tipocontrato> {
        return this.http.get<tipocontrato>(this.ApiUrl +"tipocontrato/" + id)
    }
    //Post
    public postTipoContrato(tipocontrato:tipocontrato):Observable<void>{
        let body = JSON.stringify(tipocontrato);
        return this.http.post<void>(`${this.ApiUrl}tipocontrato/`,body,this.httpOptions);
    }
    //Delete
    public deleteTipoContratos(id:string): Observable<void> {
        return this.http.delete<void>(this.ApiUrl +"tipocontrato/" + id)
    }
    //Put
    public putTipoContrato(tipocontrato:tipocontrato):Observable<void>{
        let body = JSON.stringify(tipocontrato);
        return this.http.put<void>(this.ApiUrl +'tipocontrato/'+ tipocontrato.id + '/',body,this.httpOptions);
    }

    //*********************  TIPO ESTADO *********** */

//Get TipoEstado
    public getTipoEstados(): Observable<tipoestado[]> {
        return this.http.get<tipoestado[]>(this.ApiUrl +"tipoestado")
    }
    //Get Tamaño
    public getTipoEstado(id:string): Observable<tipoestado> {
        return this.http.get<tipoestado>(this.ApiUrl +"tipoestado/" + id)
    }
    //Post
    public postTipoEstado(tipoestado:tipoestado):Observable<void>{
        let body = JSON.stringify(tipoestado);
        return this.http.post<void>(`${this.ApiUrl}tipoestado/`,body,this.httpOptions);
    }
    //Delete
    public deleteTipoEstado(id:string): Observable<void> {
        return this.http.delete<void>(this.ApiUrl +"tipoestado/" + id)
    }
    //Put
    public putTipoEstado(tipoestado:tipoestado):Observable<void>{
        let body = JSON.stringify(tipoestado);
        return this.http.put<void>(this.ApiUrl +'tipoestado/'+ tipoestado.id + '/',body,this.httpOptions);
    }
}



  