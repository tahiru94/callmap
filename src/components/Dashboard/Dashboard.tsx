import { FC } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { DataGrid } from '@material-ui/data-grid';

import { ICallmapRecord } from 'models/callmap-record';
import columns from './columns';

interface IOwnProps {
    callmapRecords: ICallmapRecord[];
}

const useStyles = makeStyles((theme: Theme) => {
    return createStyles({
        root: { flexGrow: 1, width: '100%' },
        datagridWrapper: { height: 400, width: '100%' }
    });
});

const Dashboard: FC<IOwnProps> = (props): JSX.Element => {
    const classes = useStyles();
    const { callmapRecords } = props;

    return (
        <div className={classes.root}>
            <Typography variant="h3" gutterBottom>Callmap Records</Typography>
            <div className={classes.datagridWrapper}>
                <DataGrid
                    rows={callmapRecords}
                    columns={columns as any}
                    pageSize={10}
                    autoHeight={true}
                />
            </div>
        </div>
    );
}

export default Dashboard;