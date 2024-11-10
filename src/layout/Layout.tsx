import React, { useState } from 'react';
import Header from './header/Header';
import Main from './main/Main';
import Footer from './footer/Footer';

export interface Props{
  children: React.ReactNode
}

const Layout = ({children}: Props) => { 
  return (
    <div className='app-container'>
      <Header/>
      <Main children={children}/>
      <Footer/>
    </div>
  )
}

export default Layout
