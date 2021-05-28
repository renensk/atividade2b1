export class Curso {
  cursoId?: string;
  nome: string;
  coordenador: string;

  constructor(nome: string, coordenador: string, cursoId?: string) {
    this.cursoId = cursoId;
    this.nome = nome;
    this.coordenador = coordenador;
  }
}
