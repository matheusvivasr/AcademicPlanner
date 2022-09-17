export const enum Rank {
    Mandatory = 'Disciplinas Obrigatórias',
    Elective = 'Disciplinas Optativas Eletivas',
    Free = 'Disciplinas Optativas Livres',
}

export const enum State {
    Done = 'Cumpridas',
    OnGoing = 'Cursando',
    YetToGo = 'Não cumpridas',
    MaybeToGO = 'Eletivas disponíveis',
}

/**
 * A disciplina cadastrada no JúpterWeb:
 * `deps`: requisitos;
 * `semester`: semetre ideal daquela disciplina (inteiro de 1 a 10)
 */
export interface SubjectModel {
    name: string;
    id: string;
    creditA: number;
    creditT: number;
    creditE: number;
    type: Rank;
    deps?: string[];
    semester?: number;
    status: State;
}

export interface SubjectUpdateStatus {
    id?: string;
    status?: State;
}
