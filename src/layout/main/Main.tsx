import React from 'react'
import Users from '../../users/Users'
import './Main.css'
import AppRouter from '../../routes/AppRouter'

interface Props{
  children: React.ReactNode
}

const Main = (props: Props) => {
  return (
    <main className='container'>
      {props.children}
    </main>
  );
}

export default Main
