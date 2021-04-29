import axios from 'axios';
import Edit from '@material-ui/icons/Edit';
import Delete from '@material-ui/icons/Delete';
import Search from '@material-ui/icons/Search';

import { CALLMAP_API_OPERATION_BY_ID_URL } from 'constants/constants';

const actionRowWrapperStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    cursor: 'pointer'
}

const editRow = (id: string) => {
    window.location.replace(`/edit/${id}`);
}

const deleteRow = (id: string) => {
    axios.delete(`${CALLMAP_API_OPERATION_BY_ID_URL}/${id}`)
        .then((_) => {
            window.location.reload(); // Trigger reload and poll for data
        }).catch((_) => { });
}

const viewRow = (id: string) => {
    window.location.replace(`/view/${id}`);
}

const actionRowFormatter = (value: any) => {
    const output = (
        <div style={actionRowWrapperStyles}>
            <Edit color="primary" onClick={() => editRow(value as string)} />
            <Delete color="secondary" onClick={() => deleteRow(value as string)} />
            <Search color="action" onClick={() => viewRow(value as string)} />
        </div>
    );
    return output;
}

export default actionRowFormatter;