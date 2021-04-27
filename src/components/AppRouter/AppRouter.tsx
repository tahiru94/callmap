import { FC, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import Routes from '../../routes/routes';
import NavigationBar from '../NavigationBar';
import { IRoute } from '../../models/route';

const AppRouter: FC = (): JSX.Element => {
    return (
        <Fragment>
            <NavigationBar />
            <Switch>
                {(Routes.map((route: IRoute | any) => {
                    return (
                        <Route exact path={route.path} key={route.path}>
                            <route.component />
                        </Route>
                    );
                }))}
            </Switch>
        </Fragment>
    );
}

export default AppRouter;