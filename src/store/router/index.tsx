import React, { ComponentType, useContext, useReducer } from "react";
import { RouteContext } from "./context";
import reducer from "./reducer";

export const initState: IRouter.RouteState = await new Promise((resolve) => {
    setTimeout(() => {
        resolve({
            asyncRoutes: [{ path: '/', meta: { label: '首页' } }]
        })
    }, 100);
})

export const RouteProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(reducer, initState)
    return <RouteContext.Provider value={{ state, dispatch }}>
        {children}
    </RouteContext.Provider>
}


export const useRouteContext = () => {
    const { state, dispatch } = useContext(RouteContext)
    return [state, dispatch]
}