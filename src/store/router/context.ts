import { createContext, DispatchWithoutAction } from "react";

export const RouteContext = createContext<{
    state: IRouter.RouteState,
    dispatch: (action: IRouter.Action) => any
}>({
    state: {
        asyncRoutes: []
    },
    dispatch() {
        return
    }
})