import React from 'react';

export interface IRoute {
    path: string;
    sidebarName?: string;
    icon?: React.ComponentType;
    component: React.ComponentType | JSX.Element;
    showInSidebar: boolean;
}