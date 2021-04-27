import { IRoute } from '../models/route';
import Home from '@material-ui/icons/Home';
import Add from '@material-ui/icons/Add';

import DashboardContainer from '../containers/DashboardContainer';
import NewCallmapRecordContainer from '../containers/NewCallmapRecordContainer';

const AppRoutes: IRoute[] = [
    {
        path: '/',
        sidebarName: 'Dashboard',
        icon: Home,
        component: DashboardContainer,
        showInSidebar: true,
    },
    {
        path: '/new',
        sidebarName: 'Add Callmap Record',
        icon: Add,
        component: NewCallmapRecordContainer,
        showInSidebar: true,
    },
    {
        path: '/edit/:id',
        component: () => <div>Edit Callmap Record</div>,
        showInSidebar: false,
    },
    {
        path: '/view/:id',
        component: () => <div>View Callmap Record</div>,
        showInSidebar: false
    },
    {
        path: '/all',
        sidebarName: 'Historic View',
        component: () => <div>Historic View</div>,
        showInSidebar: true
    },
];

export default AppRoutes;