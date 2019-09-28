import { Component, Input } from '@angular/core'
import { Objeto } from "./objeto";
import { NgForm } from "@angular/forms";
import { Http } from "@angular/http";

@Component({
    selector: 'mi-objeto',
    template: `
        
        <div *ngIf="objetoDetalle">
            <form (ngSubmit)="onSubmit(f)" #f="ngForm" >
                <label>Estado:</label>
                <input type="text" ngModel name="estado">
                <label>Numero de Orden:</label>
                <input type="text" ngModel name="numeroOrden">  
                <label>Codigo de tipo de objeto:</label>
                <input type="text" ngModel name="codigo">
                <label>Descripcion:</label>
                <input type="text" ngModel name="descripcion">  
                <label>Precio:</label>
                <input type="text" ngModel name="precio">  
                <button type="submit">MODIFICAR</button>  
                <button (click)="borrarObjeto()">BORRAR</button>
            </form>
        </div> 
    `
})



export class MiObjetoComponent{
    @Input()
    objetoDetalle:Objeto
    constructor(private http: Http) {}

    onSubmit(form: NgForm) {
        const { value: body } = form;
        console.log(this.objetoDetalle)
        this.http.put("https://proyecto-backend-jsa-2.herokuapp.com/api/objeto/"+this.objetoDetalle._id, body)
          .subscribe(res => {
              console.log(body);
          });  
      }
      borrarObjeto(){
        this.http.delete("https://proyecto-backend-jsa-2.herokuapp.com/api/objeto/"+this.objetoDetalle._id)
        .subscribe(res => {
            console.log(res);
        });  
    }
}