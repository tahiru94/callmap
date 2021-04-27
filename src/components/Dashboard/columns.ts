import { IColumn } from 'models/columns';
import actionRowFormatter from './actions';

const columns: IColumn[] = [
    {
        field: 'phoneNumber',
        headerName: 'Phone Number',
        width: 150,
        sortable: false,
    },
    {
        field: 'firstName',
        headerName: 'First Name',
        width: 140,
    },
    {
        field: 'lastName',
        headerName: 'Last Name',
        width: 140,
    },
    {
        field: 'callNote',
        headerName: 'Call Note',
        width: 320,
        sortable: false,
    },
    {
        field: 'priority',
        headerName: 'Priority',
        width: 120
    },
    {
        field: 'timestamp',
        headerName: 'Created At',
        width: 240,
    },
    {
        field: 'version',
        headerName: 'Last Modified',
        width: 240
    },
    {
        field: 'id',
        headerName: 'Actions',
        width: 150,
        renderCell: ({ value }: any) => {
            return actionRowFormatter(value);
        }
    }
];

export default columns;