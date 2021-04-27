import { FC } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';

interface IOwnProps {
    priorityFilter: string;
    handlePriorityFilterChange: (event: any) => void;
}

const useStyles = makeStyles((theme: Theme) => {
    return createStyles({
        root: { flexGrow: 1 },
        title: { paddingBottom: theme.spacing(1) },
        filterWrapper: { padding: theme.spacing(3, 3, 4, 4), marginBottom: theme.spacing(2) },
        radioGroupStyles: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' }
    });
});

const FilterPanel: FC<IOwnProps> = (props: any): JSX.Element => {
    const { priorityFilter, handlePriorityFilterChange } = props;
    const classes = useStyles();

    return (
        <Grid container spacing={3} className={classes.root}>
            <Grid item xs={12} sm={6} lg={12}>
                <Paper elevation={2} className={classes.filterWrapper}>
                    <Typography variant="h5" className={classes.title}>Filters</Typography>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6} lg={4}>
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
                </Paper>
            </Grid>
        </Grid >
    );
}

export default FilterPanel;