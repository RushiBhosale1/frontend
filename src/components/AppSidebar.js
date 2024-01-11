/* eslint-disable */

import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { CSidebar, CSidebarBrand, CSidebarNav, CSidebarToggler } from '@coreui/react'
import CIcon from '@coreui/icons-react'

import { AppSidebarNav } from './AppSidebarNav'

import { logoNegative } from 'src/assets/brand/logo-negative'
import { sygnet } from 'src/assets/brand/sygnet'

import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'
import translogo from "src/components/OPTIPRIMETrans1.png"
// sidebar nav config
import {_customer_nav, __admin_nav} from '../_nav'
import { userDetails } from 'src/redux/reducers/userDetails.reducer'


const AppSidebar = () => {
  const profile = useSelector(userDetails);
  const [navigation, setNavigation] = useState([]);


  useEffect(()=>{
    console.log("sdsadasda", profile)
    if(profile?.role == "customer"){
      setNavigation(_customer_nav)
    }
    else if(profile?.role == "admin"){
      setNavigation(__admin_nav)
    }

  },[profile])
  const dispatch = useDispatch()
  const unfoldable = useSelector((state) => state.sidebarUnfoldable)
  const sidebarShow = useSelector((state) => state.sidebarShow)

  return (
    <CSidebar
      position="fixed"
      unfoldable={unfoldable}
      visible={sidebarShow}
      onVisibleChange={(visible) => {
        dispatch({ type: 'set', sidebarShow: visible })
      }}
    >
      <CSidebarBrand className="d-none d-md-flex" to="/">
        <img src={translogo} style={{width:"80%", height:"auto", marginBottom:"2rem", marginTop:"1.5rem", marginLeft:"-3rem"}}/>
        {/* <CIcon className="sidebar-brand-full" icon={logoNegative} height={35} />
        <CIcon className="sidebar-brand-narrow" icon={sygnet} height={35} /> */}
      </CSidebarBrand>
      <CSidebarNav>
        <SimpleBar>
          <AppSidebarNav items={navigation} />
        </SimpleBar>
      </CSidebarNav>
      <CSidebarToggler
        className="d-none d-lg-flex"
        onClick={() => dispatch({ type: 'set', sidebarUnfoldable: !unfoldable })}
      />
    </CSidebar>
  )
}

export default React.memo(AppSidebar)
