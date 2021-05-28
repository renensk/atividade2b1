import { Component } from "@angular/core";
import { CursoService } from "./curso.services";
import { Curso } from "./curso.model";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-curso-input",
  templateUrl: "./curso-input.component.html",

  /* Passou a ser incorporado no Component app.component.ts
        que é o PAI desse Component providers: [CursoService] */
})
export class CursoInputComponent {
  constructor(private cursoService: CursoService) {}

  onClear(form: NgForm) {
    form.resetForm();
  }

  onSubmit(form: NgForm) {
    const cursoAux = new Curso(
      form.value.myNomengForm,
      form.value.myCoordngForm
    );
    this.cursoService.addCurso(cursoAux).subscribe(
      (dadosSucesso) => console.log(dadosSucesso),
      (dadosErro) => console.log(dadosErro)
    );
    console.log(form);
    form.resetForm;
  }
}
