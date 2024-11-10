import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Users from '../users/Users'
import ErrorPage from '../users/errorPage/ErrorPage'

const AppRouter = () => {
  return (
    <>
    <Routes>
        <Route path='/users/*' element={<Users/>}></Route>
        <Route path='*' element={<ErrorPage/>}></Route>
    </Routes>
    </>
  )
}

export default AppRouter;