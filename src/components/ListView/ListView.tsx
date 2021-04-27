import { FC } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme: Theme) => {
    return createStyles({
        root: {
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column'
        },
        title: {
            margin: theme.spacing(4, 0, 2)
        }
    });
});

const ListView: FC = (props: any) => {
    const classes = useStyles();

    const generateListItems = () => {
        const output = props.children.map((item: string) => {
            return (
                <ListItem key={item}>
                    <ListItemText primary={item} />
                </ListItem>
            );
        });

        return output;
    }

    return (
        <div className={classes.root}>
            <List>
                {generateListItems()}
            </List>
        </div>
    );
}

export default ListView;