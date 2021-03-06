export interface ICallmapRecord {
    id?: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    callNote: string;
    priority: string;
    version?: string;
    timestamp?: string;
    additionalNotes?: string[];
}

export interface ICallmapRecordResponse extends ICallmapRecord {
    _id?: string;
    id: string;
    version: string;
    timestamp: string;
}