import { useState } from 'react'
import './App.css'
import Layout from './layout/Layout'
import AppRouter from './routes/AppRouter';



function App() {
  return (
    <>
     <Layout children={<AppRouter/>}/>
    </>
  )
}

export default App;
