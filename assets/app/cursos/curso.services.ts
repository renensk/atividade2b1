import { Curso } from "./curso.model";
import { Injectable, EventEmitter } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
import "rxjs/add/operator/map";
import { Observable } from "rxjs";

@Injectable()
export class CursoService {
  private cursoSService: Curso[] = [];

  constructor(private http: Http) {}

  //Recebendo Cursos
  getCursos()
  {
    return this.http.get('http://localhost:3000/api/cursos')
  }
}
