import React from 'react'
import { createContext,ReactDOM,useReducer,Children,Suspense } from 'react'
import Routing from './router';
import { initialState,reducer } from './reducer/UserReducer';


export const UserContext = createContext();

function App() {
  const [state , dispatch] = useReducer(reducer, initialState);
  return (
    <>
    <UserContext.Provider value={{state, dispatch}}>
      <Routing/>
    </UserContext.Provider>
    </>
  )
}

export default App
