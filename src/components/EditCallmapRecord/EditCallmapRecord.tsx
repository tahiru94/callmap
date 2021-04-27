import { ChangeEventHandler, FC, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import ListView from '../ListView';
import { ICallmapRecord } from '../../models/callmap-record';

interface IOwnProps {
    originalCallmapRecord: ICallmapRecord;
    newCallmapRecord: ICallmapRecord;
    additionalNote: string;
    redirect: string | undefined;
    onTextFieldChange: (event: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>) => void;
    onSelectFieldChange: (event: any) => void;
    onAddAdditionalNote: (event: any) => void;
    handleFormSubmit: (event: any) => void;
    handleFormCancel: (event: any) => void;
}

const NewCallmapRecord: FC<IOwnProps> = (props): JSX.Element => {
    const {
        originalCallmapRecord,
        newCallmapRecord,
        additionalNote,
        redirect,
        onTextFieldChange,
        onSelectFieldChange,
        onAddAdditionalNote,
        handleFormSubmit,
        handleFormCancel
    } = props;
    if (redirect) {
        return (
            <Redirect to={redirect} />
        );
    } else {
        return (
            <Fragment>
                <Typography variant="h3" gutterBottom>Edit Callmap Record</Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} lg={2}>
                        <TextField
                            required
                            id="firstName"
                            name="firstName"
                            label="First name"
                            value={newCallmapRecord.firstName || originalCallmapRecord.firstName}
                            fullWidth
                            onChange={(event: any) => onTextFieldChange(event)}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} lg={2}>
                        <TextField
                            required
                            id="lastName"
                            name="lastName"
                            label="Last name"
                            value={newCallmapRecord.lastName || originalCallmapRecord.lastName}
                            fullWidth
                            onChange={(event: any) => onTextFieldChange(event)}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} lg={2}>
                        <InputLabel>Priority</InputLabel>
                        <Select
                            labelId="priority"
                            id="priority"
                            name="priority"
                            value={newCallmapRecord.priority || originalCallmapRecord.priority}
                            onChange={(event: any) => onSelectFieldChange(event)}
                        >
                            <MenuItem value={'Low'}>Low</MenuItem>
                            <MenuItem value={'Medium'}>Medium</MenuItem>
                            <MenuItem value={'High'}>High</MenuItem>
                        </Select>
                    </Grid>
                </Grid>
                <Grid container spacing={3} style={{ paddingTop: '8px' }}>
                    <Grid item xs={12} sm={6} lg={2}>
                        <TextField
                            required
                            id="phoneNumber"
                            name="phoneNumber"
                            label="Phone number"
                            value={newCallmapRecord.phoneNumber || originalCallmapRecord.phoneNumber}
                            fullWidth
                            onChange={(event: any) => onTextFieldChange(event)}
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={3} style={{ paddingTop: '24px' }}>
                    <Grid item xs={12} sm={6} lg={4}>
                        <TextField
                            required
                            id="callNote"
                            name="callNote"
                            label="Call Note"
                            value={newCallmapRecord.callNote || originalCallmapRecord.callNote}
                            fullWidth
                            onChange={(event: any) => onTextFieldChange(event)}
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={3} style={{ paddingTop: '32px' }}>
                    <Grid item xs={12} sm={6} lg={4}>
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />} id="additionNotesAccordion">
                                <Typography variant="subtitle1">Additional Notes</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                                        <TextField
                                            id="additionalNote"
                                            name="additionalNote"
                                            label="Additional Note"
                                            value={additionalNote}
                                            onChange={(event: any) => onTextFieldChange(event)}
                                        />
                                        <Button color="primary" onClick={(event: any) => onAddAdditionalNote(event)}>Add</Button>
                                    </div>
                                    <div>
                                        {
                                            (newCallmapRecord.additionalNotes!.length || originalCallmapRecord.additionalNotes!.length) ?
                                                <ListView>
                                                    {[...originalCallmapRecord.additionalNotes!, ...newCallmapRecord.additionalNotes!]}
                                                </ListView> :
                                                ''
                                        }
                                    </div>
                                </div>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>
                </Grid>
                <Grid container spacing={3} style={{ paddingTop: '32px' }}>
                    <Grid item xs={12} sm={6} lg={4}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Button variant="contained" color="primary" onClick={(event: any) => handleFormSubmit(event)}>Update Record</Button>
                            <Button variant="contained" color="secondary" onClick={(event: any) => handleFormCancel(event)}>Cancel Update</Button>
                        </div>
                    </Grid>
                </Grid>
            </Fragment>
        );
    }
}

export default NewCallmapRecord;