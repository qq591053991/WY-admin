import { RouteList } from "@/router/route"

export as namespace IRouter

export interface RouteState {
    asyncRoutes: RouteList[]
}

type Action = { type: 'SET_ASYNC_ROUTES', payload: RouteList[] }