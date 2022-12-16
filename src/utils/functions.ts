import {ss, NamedRanges} from './../constants/';

export const parseRowToSubject = (row: any[]) => ({
    name:parseDataToString(row[0]),
    id:parseDataToString(row[1]),
    creditA:parseDataToString(row[2]),
    creditT:parseDataToString(row[3]),
    creditE:parseDataToString(row[4]),
    type:parseDataToString(row[5]),
    semester:parseDataToString(row[6]),
    status:parseDataToString(row[7]),
});

export const parseDataToString = (data: any) => `${data}`.trim();
export const getAllSavedIDs = (): Set<string> => new Set(ss.getRangeByName(NamedRanges.AllSavedIDs).getValues().flat());
export const getTargetID = (): string => ss.getRangeByName(NamedRanges.TargetID).getValue();