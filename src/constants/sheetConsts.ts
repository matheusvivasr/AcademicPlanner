import {ss} from './globalConsts';

export enum SheetName {
    NewSubjectsInput = '[Desejadas]',
    OnGoingSubjects = '[Grade atual]',
    DoneSubjectsInput = '[Cursadas]',
    DoneSubjectsDB =  '[BD - Cursadas]',
    AllSubjectsDB = '[BD - Disciplinas]',
    MissingSubjectsDB = '[BD - Não Cursadas]',
}

export const sheets = {
    newSubjectsInput: ss.getSheetByName(SheetName.NewSubjectsInput),
    doneSubjectsInput: ss.getSheetByName(SheetName.DoneSubjectsInput),
    onGoingSubjects: ss.getSheetByName(SheetName.OnGoingSubjects),
    doneSubjectsDB: ss.getSheetByName(SheetName.DoneSubjectsDB),
    allSubjectsDB: ss.getSheetByName(SheetName.AllSubjectsDB),
    missingSubjectsDB: ss.getSheetByName(SheetName.MissingSubjectsDB),
};