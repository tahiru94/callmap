import { FC, Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import ListView from '../ListView/ListView';
import { ICallmapRecord } from '../../models/callmap-record';
import { formatDate, formatPhoneNumber } from '../../utils';

interface IOwnProps {
    callmapRecord: ICallmapRecord;
}

const ViewCallmapRecord: FC<IOwnProps> = (props: any): JSX.Element => {
    const { callmapRecord } = props;
    return (
        <Fragment>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} lg={12}>
                    <Typography variant="h3" gutterBottom>Callmap Record</Typography>
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} lg={12}>
                    <Typography variant="h6" gutterBottom color="textSecondary">id: {callmapRecord.id}</Typography>
                </Grid>
            </Grid>
            <Grid container spacing={3} style={{ paddingTop: '16px' }}>
                <Grid item xs={12} sm={6} lg={6}>
                    <Typography variant="h5" color="primary">Created at</Typography>
                    <Typography variant="body1">{formatDate(callmapRecord.timestamp)}</Typography>
                </Grid>
                <Grid item xs={12} sm={6} lg={6}>
                    <Typography variant="h5" color="primary">Last Update</Typography>
                    <Typography variant="body1">{formatDate(callmapRecord.version)}</Typography>
                </Grid>
                <Grid item xs={12} sm={6} lg={6}>
                    <Typography variant="h5" color="primary">First name</Typography>
                    <Typography variant="body1">{callmapRecord.firstName}</Typography>
                </Grid>
                <Grid item xs={12} sm={6} lg={6}>
                    <Typography variant="h5" color="primary">Last name</Typography>
                    <Typography variant="body1">{callmapRecord.lastName}</Typography>
                </Grid>
                <Grid item xs={12} sm={6} lg={6}>
                    <Typography variant="h5" color="primary">Phone Number</Typography>
                    <Typography variant="body1">{formatPhoneNumber(callmapRecord.phoneNumber || '')}</Typography>
                </Grid>
                <Grid item xs={12} sm={6} lg={6}>
                    <Typography variant="h5" color="primary">Call Note</Typography>
                    <Typography variant="body1">{callmapRecord.callNote || ''}</Typography>
                </Grid>
                <Grid item xs={12} sm={6} lg={6}>
                    <Typography variant="h5" color="primary">Priority</Typography>
                    <Typography variant="body1">{callmapRecord.callNote || ''}</Typography>
                </Grid>
            </Grid>
            <Grid container spacing={3} style={{ paddingTop: '32px' }}>
                <Grid item xs={12} sm={6} lg={8}>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />} id="additionNotesAccordion">
                            <Typography variant="subtitle1">Additional Notes</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                                <div>
                                    {
                                        ((callmapRecord.additionalNotes! || []).length) ?
                                            <ListView>{callmapRecord.additionalNotes}</ListView> :
                                            <ListView>{['No Additional Notes']}</ListView>
                                    }
                                </div>
                            </div>
                        </AccordionDetails>
                    </Accordion>
                </Grid>
            </Grid>
        </Fragment>
    );
}

export default ViewCallmapRecord;