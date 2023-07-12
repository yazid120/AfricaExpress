import React from 'react'
import { createContext,ReactDOM,useReducer,Children,Suspense } from 'react'
import Routing from './router';
import Footer from './views/Elements/Footer';
import NavBar from './views/Elements/NavBar';
import { initialState,reducer } from './reducer/UserReducer';

import { BrowserRouter, createBrowserRouter, Routes, Route } from "react-router-dom";

export const UserContext = createContext();

function App() {
  const [state , dispatch] = useReducer(reducer, initialState);
  return (
    <>
    <UserContext.Provider value={{state, dispatch}}>
    <div>
      <NavBar/>
    </div>
    <Routing/>
    <div>
      <Footer/>
    </div>
    </UserContext.Provider>
    </>
  )
}

export default App
