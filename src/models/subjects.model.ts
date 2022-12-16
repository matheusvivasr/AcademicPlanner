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

export const enum Unit {
    EESC = '18',
    IAU = '99',
    IFSC = '76',
    IQSC = '75',
    ICMC = '55',
    SLC = '90',
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
    unit: Unit;
}

export interface SubjectUpdateStatus {
    id?: string;
    status?: State;
}