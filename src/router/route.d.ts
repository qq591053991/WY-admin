import React from "react";
import { RouteObject } from "react-router-dom";

export type MenuItem = {
    label: React.ReactNode;
    key?: React.Key;
    icon?: React.ReactNode;
    children?: MenuItem[];
    type?: 'group';
    whiteList?: boolean;
    hideSidebar?: boolean;
};

export type RouteList = Omit<RouteObject, 'children'> & {
    redirect?: string;
    children?: RouteList[];
    alwaysShow?: boolean;
    meta: MenuItem;
};