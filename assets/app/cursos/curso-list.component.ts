import { Curso } from "./curso.model";
import { Component, OnInit } from "@angular/core";
import { CursoService } from "./curso.services";

@Component({
  selector: "app-curso-list",
  template: `
    <div class="col-mds-8 col-md-offset-2">
      <app-curso
        [cursoVarClasse]="crs"
        (editClicked_MessageMetodoClasse)="crs.content = $event"
        *ngFor="let crs of cursoS"
      >
      </app-curso>
    </div>
  `,
  /* Passou a ser incorporado no Component app.component.ts
      que é o PAI desse Component providers: [MessageService] */
})
export class CursoListComponent implements OnInit {
  cursoS: Curso[] = [
    new Curso("Computação", "Eduardo"),
    new Curso("Curso de Jogar Dado", "Cassiano"),
    new Curso("Direito", "Ninguém"),
  ];

  constructor(private cursoService: CursoService) {}

  ngOnInit(): void {
    this.cursoService.getCursos().subscribe(
      (dadosSucesso: Curso[]) => {
        this.cursoS = dadosSucesso;
        console.log(dadosSucesso);
      },
      (dadosErro) => console.log(dadosErro)
    );
  }
}
