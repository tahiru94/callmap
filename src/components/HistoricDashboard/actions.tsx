import Search from '@material-ui/icons/Search';

const actionRowWrapperStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    cursor: 'pointer'
}

const viewRow = (id: string) => {
    window.location.replace(`/view/${id}`);
}

const actionRowFormatter = (value: any) => {
    const output = (
        <div style={actionRowWrapperStyles}>
            <Search color="action" onClick={() => viewRow(value as string)} />
        </div>
    );
    return output;
}

export default actionRowFormatter;