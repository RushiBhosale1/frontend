/* eslint-disable */

import React from 'react'
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components/index'
import LoginCheck from 'src/loginCheck'
import WhatsAppIcon from 'src/components/Whatsapp'

const DefaultLayout = () => {
  
  return (
    
    <div>
          <WhatsAppIcon />

      <LoginCheck/> 
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <div className="body flex-grow-1 px-3">
          <AppContent />
        </div>
        <AppFooter />
      </div>
    </div>
  )
}

export default DefaultLayout
