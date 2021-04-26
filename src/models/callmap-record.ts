export interface ICallmapRecord {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    callNote: string;
    priority: string;
    additionalNotes?: string[];
}

export interface ICallmapRecordResponse extends ICallmapRecord {
    _id?: string;
    id: string;
    version: string;
    timestamp: string;
}