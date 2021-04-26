export interface IColumn {
    field: string;
    headerName: string;
    width: number;
    sortable?: boolean;
    renderCell?: Function;
}