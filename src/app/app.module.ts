import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { AppComponent }  from './app.component';
import { TipoObjetoComponent } from "./tipo-objeto-component";
import { MiObjetoComponent } from "./miObjeto-component";
import { TipoObjetoBusquedaComponent } from "./tipo-objeto-busqueda";
import { ObjetoComponent } from "./objetosComponent";

@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule],
  declarations: [AppComponent, TipoObjetoComponent,TipoObjetoBusquedaComponent, ObjetoComponent, MiObjetoComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
