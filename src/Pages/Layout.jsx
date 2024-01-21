import React from 'react'
import Navbars from '../components/Navbar'
import { Footer } from './Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
<>
<Navbars></Navbars>
<Outlet></Outlet>
<Footer></Footer>
</>
  )
}

export default Layout