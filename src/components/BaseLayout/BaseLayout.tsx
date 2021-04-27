import { FC } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme: Theme) => {
    return createStyles({
        root: { flexGrow: 1, width: '100%' },
        pagePadding: { padding: theme.spacing(6, 6, 10, 10) }
    })
});

const BaseLayout: FC = (props: any): JSX.Element => {
    const classes = useStyles();
    return (
        <Grid container className={classes.root}>
            <Grid item xs={12} md={12} lg={12}>
                <Grid container className={classes.pagePadding}>
                    {props.children}
                </Grid>
            </Grid>
        </Grid>
    );
}

export default BaseLayout;