import { Routes, RouterModule } from "@angular/router";
import { CursoComponent } from "./cursos/curso.component";

const APP_ROUTES: Routes = [
  { path: "", redirectTo: "/cursos", pathMatch: "full" },
  { path: "cursos", component: CursoComponent },
];

export const myrouting = RouterModule.forRoot(APP_ROUTES);
