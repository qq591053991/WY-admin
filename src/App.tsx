import { useContext, useEffect, useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RouteProvider, useRouteContext } from './store/router'


function App() {

  return (
    <>
      <RouteProvider>
        <Text />
      </RouteProvider>
    </>
  )
}

function Text() {
  const [state, dispatch] = useRouteContext()
  console.log(state)
  useEffect(() => {
    setTimeout(() => {
      dispatch({
        type: 'SET_ASYNC_ROUTES',
        payload: [{ path: '/' }, { path: '/login' }]
      })
    }, 3000);
  }, [])
  return <></>
}

export default App
