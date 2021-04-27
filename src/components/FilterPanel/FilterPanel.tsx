import { FC } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Button from '@material-ui/core/Button';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

interface IOwnProps {
    priorityFilter: string;
    handlePriorityFilterChange: (event: any) => void;
    handlePriorityFilterClear: (event: any) => void;
}

const useStyles = makeStyles((theme: Theme) => {
    return createStyles({
        root: { flexGrow: 1, marginBottom: theme.spacing(2) },
        radioGroupStyles: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
        buttonActions: { display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end' }
    });
});

const FilterPanel: FC<IOwnProps> = (props: any): JSX.Element => {
    const { priorityFilter, handlePriorityFilterChange, handlePriorityFilterClear } = props;
    const classes = useStyles();

    return (
        <Grid container spacing={3} className={classes.root}>
            <Grid item xs={12} sm={6} lg={12}>
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} id="filters">
                        <Typography variant="h5" color="primary">Filters</Typography>
                    </AccordionSummary>
                    <AccordionDetails>

                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={12} lg={12}>
                                <FormControl component="fieldset">
                                    <FormLabel component="legend">Priority</FormLabel>
                                    <RadioGroup aria-label="priority" name="priority" value={priorityFilter} onChange={(event: any) => handlePriorityFilterChange(event)}>
                                        <FormControlLabel value="Low" control={<Radio />} label="Low" />
                                        <FormControlLabel value="Medium" control={<Radio />} label="Medium" />
                                        <FormControlLabel value="High" control={<Radio />} label="High" />
                                    </RadioGroup>
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid container spacing={3} className={classes.buttonActions}>
                            <Grid item xs={12} sm={6} lg={4}>
                                <Button variant="contained" color="secondary" onClick={(event: any) => handlePriorityFilterClear(event)}>Clear Filters</Button>
                            </Grid>
                        </Grid>
                    </AccordionDetails>
                </Accordion>
            </Grid>
        </Grid >
    );
}

export default FilterPanel;