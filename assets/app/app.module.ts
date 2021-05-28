import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { CursoComponent } from "./cursos/curso.component";
import { CursoListComponent } from "./cursos/curso-list.component";
import { CursoInputComponent } from "./cursos/curso-input.component";
import { CursosComponent } from "./cursos/cursos.component";
import { HeaderComponent } from "./header.component";
import { myrouting } from "./app.routing";

@NgModule({
  declarations: [
    AppComponent,
    CursoComponent,
    CursoListComponent,
    CursoInputComponent,
    CursosComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    myrouting,
    ReactiveFormsModule,
    HttpModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
