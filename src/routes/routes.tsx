import { IRoute } from '../models/route';

const AppRoutes: IRoute[] = [
    {
        path: '/',
        sidebarName: 'Dashboard',
        component: <div>Home</div>,
        showInSidebar: true,
    },
    {
        path: '/new',
        sidebarName: 'Add Callmap Record',
        component: <div>Add Callmap Record</div>,
        showInSidebar: true,
    },
    {
        path: '/edit/:id',
        component: <div>Edit Callmap Record</div>,
        showInSidebar: false,
    },
    {
        path: '/view/:id',
        component: <div>View Callmap Record</div>,
        showInSidebar: false
    },
    {
        path: '/all',
        sidebarName: 'Historic View',
        component: <div>Historic View</div>,
        showInSidebar: true
    },
];

export default AppRoutes;