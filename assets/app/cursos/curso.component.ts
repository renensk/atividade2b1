import { Component, Input, EventEmitter, Output } from "@angular/core";
import { Curso } from "./curso.model";
import { CursoService } from "./curso.services";

@Component({
  selector: "app-curso",
  templateUrl: "./curso.component.html",
  styles: [
    `
      .author {
        display: inline-block;
        font-style: italic;
        font-size: 12px;
        width: 80%;
      }
      .config {
        display: inline-block;
        text-align: right;
        font-size: 15px;
        width: 19%;
      }
    `,
  ],
})
export class CursoComponent {
  color = "blue";
  tam = 12;
  onMudaStyle() {
    this.color = "red";
    this.tam = 12;
  }

  @Input() cursoVarClasse: Curso = new Curso("", "");
  @Input("inputCurso") cursoVarClasseAlias: Curso = new Curso("", "");

  constructor(private cursoServiceObj: CursoService) {}

  onDeleteService() {
    this.cursoServiceObj.deleteCurso(this.cursoVarClasse).subscribe(
      (dadosSucesso) => console.log(dadosSucesso),
      (dadosErro) => console.log(dadosErro)
    );
  }
}
