/* eslint-disable */

import React, { Component, useEffect, Suspense } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import './scss/style.scss'
import "../src/style/styles.css"
import LoginCheck from './loginCheck'
import PDFComponent from './components/PDFComponent'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'))
const Signup = React.lazy(() => import('./views/pages/login/Signup'))
const Register = React.lazy(() => import('./views/pages/register/Register'))
const Logout = React.lazy(() => import('./views/logout/Logout'))
const ContactWhatsapp = React.lazy(() => import('./components/ContactWhatsapp'))
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))

const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))
const HomePage = React.lazy(() => import('./views/pages/login/HomePage'))


class App extends Component {

  render() {
  
    return (
      <>
      <HashRouter>
        <Suspense fallback={loading}>
          <Routes>
          <Route exact path="/propor" name="Home Page" element={<PDFComponent dynamicData={"dynamicData"}/>} />
            
            <Route exact path="/" name="Home Page" element={<HomePage />} />
            <Route exact path="/login" name="Login Page" element={<Login />} />
            <Route exact path="/login/:sign" name="Login Page" element={<Login />} />
            <Route exact path="/signup" name="Signup Page" element={<Signup />} />
            <Route exact path="/logout" name="logout Page" element={<Logout />} />
            <Route exact path="/whatsappus" name="whatsapp Page" element={<ContactWhatsapp />} />

            <Route exact path="/logout" name="Logout" element={<Login />} />
            <Route exact path="/register" name="Register Page" element={<Register />} />
            <Route exact path="/logout" name="logout" element={<Register />} />
            <Route exact path="/404" name="Page 404" element={<Page404 />} />
            <Route exact path="/500" name="Page 500" element={<Page500 />} />
            <Route path="*" name="Home" element={<DefaultLayout />} />
          </Routes>
        </Suspense>
      </HashRouter>
      </>
    )
  }
}

export default App
