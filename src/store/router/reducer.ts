const reducer = (state: IRouter.RouteState, action: IRouter.Action) => {
    switch (action.type) {
        case 'SET_ASYNC_ROUTES':
            return {
                ...state,
                asyncRoutes: action.payload
            }

        default:
            state.asyncRoutes = action.payload
            return state
    }
}

export default reducer