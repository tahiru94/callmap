import React, { FC, useState } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';

import Routes from 'routes/routes';
import { IRoute } from 'models/route';

const useStyles = makeStyles((theme: Theme) => {
    return createStyles({
        root: { flexGrow: 1 },
        menuButton: { marginRight: theme.spacing(2) },
        title: { flexGrow: 1 },
        drawer: { width: 300 },
        fullList: { width: 'auto' },
        menuItem: { alignContent: 'center' },
        listItemText: { paddingLeft: theme.spacing(1) }
    });
});

const NavigationBar: FC = (props: any) => {
    const classes = useStyles();
    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent): void => {
        const shiftOrTab = (event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift';

        if (event.type === 'keydown' && shiftOrTab) {
            return;
        }

        setIsOpen(open);
    }

    const activeRoute = (routeName: string): boolean => {
        return props.location.pathname === routeName;
    }

    const getSidebarRoutes = (): IRoute[] => {
        const output = Routes.filter((route) => route.showInSidebar);
        return output;
    }

    const generateLinks = (): JSX.Element[] => {
        const sidebarRoutes = getSidebarRoutes();
        const output = sidebarRoutes.map((route: IRoute) => {
            return (
                <NavLink to={route.path} style={{ textDecoration: 'none' }} key={route.path}>
                    <MenuItem selected={activeRoute(route.path)} className={classes.menuItem}>
                        {route.icon ? <route.icon /> : ''}
                        <ListItemText primary={route.sidebarName} className={classes.listItemText} />
                    </MenuItem>
                </NavLink>
            );
        });

        return output;
    }

    return (
        <div>
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>Callmap</Typography>
                    </Toolbar>
                </AppBar>
            </div>
            <Drawer classes={{ paper: classes.drawer }} open={isOpen} onClose={toggleDrawer(false)}>
                <div className={classes.fullList} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
                    <MenuList>
                        {generateLinks()}
                    </MenuList>
                </div>
            </Drawer>
        </div>
    );
}

export default withRouter(NavigationBar);