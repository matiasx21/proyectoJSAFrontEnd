import { Component,OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Http } from "@angular/http";
import firefox = require('selenium-webdriver/firefox');
import { Objeto } from './objeto';

@Component({
  selector: 'objetos',
  templateUrl: './objetosComponent.html',
})


export class ObjetoComponent implements OnInit { 
  objetos: any = [];
  objetoElegido: Objeto;
  ngOnInit() {
    this.mostrarObjetos();
  }
  tituloNuevoObjeto = 'Nuevo Objeto';
  tituloListadoObjeto = 'Todos Objetos'


constructor(private http: Http) {}

 onSubmit(form: NgForm) {
  const { value: body } = form;
  this.http.post("http://proyecto-backend-jsa-2.herokuapp.com/api/objeto", body)
    .subscribe(res => {
      this.mostrarObjetos();
    });  
}



mostrarObjetos() {
  this.http
    .get("http://proyecto-backend-jsa-2.herokuapp.com/api/objeto")
    .subscribe(res => {
      this.objetos = res.json();
    });
}

elegirObjeto(_objeto: Objeto): void {
  this.objetoElegido = _objeto;
}




 }




