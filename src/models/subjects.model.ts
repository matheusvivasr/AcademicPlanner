export class Subject {
    name: string;

    id: string;//codigo da disciplina

    creditA: number;//creditos-aula

    creditT: number;//creditos-trabalho

    creditE: number;//creditos-estagio

    type: string;//optativa/livre/obrigatoria

    deps: Subject[];//requisitos

    optHalf: number;//semestre ideal

    status: string;

}