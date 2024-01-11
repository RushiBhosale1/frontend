/* eslint-disable */
import React, { useEffect, useState } from 'react'

import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import { CChartLine } from '@coreui/react-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils'
import CIcon from '@coreui/icons-react'
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cibTwitter,
  cilCloudDownload,
  cilPeople,
  cilUser,
  cilUserFemale,
} from '@coreui/icons'

import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'
import avatar3 from 'src/assets/images/avatars/3.jpg'
import avatar4 from 'src/assets/images/avatars/4.jpg'
import avatar5 from 'src/assets/images/avatars/5.jpg'
import avatar6 from 'src/assets/images/avatars/6.jpg'

import WidgetsBrand from '../widgets/WidgetsBrand'
import WidgetsDropdown from '../widgets/WidgetsDropdown'
import { InvoiceFetch, InvoiceFetchAdmin } from 'src/urls/urls'
import useAxios from 'src/network/useAxios'
import moment from 'moment'
import { useSelector } from 'react-redux'
import { userDetails } from 'src/redux/reducers/userDetails.reducer'
import convertToPDF from 'src/components/convertToPdf'

const InvoiceAdmin = () => {
  const profile = useSelector(userDetails);


  const handleConvertToPDF = (paymentCheck) => {
    const htmlContent = `<div id="pdf-container"><div class="main-content"><img src="/static/media/paid.017369e94c412123dd85.webp" class="img-paid"><div class="section-1"><div class="section-1-header"><h1>INVOICE</h1><div class="text-inside-sec1"><b>OPTIPRIME</b><p>15 Sheikh Zayed Road, Office 302
    </p><p>Dubai, United Arab Emirates
    1</p></div></div><div class="logo-img"><img src="/static/media/optiprime.a06e0a4653069c405514.jpeg" alt="Img not available"></div></div><div class="section-2"><div class="sec-2-bill"><b>BILL TO</b><p>${paymentCheck?.user?.full_name}</p><p>${paymentCheck?.user?.user[0]?.company_address}</p></div><div class="sec-2-detail"><ul><b><li>Invoice #</li></b><b><li>Invoice Date</li></b><b><li>Status</li></b></ul><ul><li>${paymentCheck?.unique_id}</li><li>11/02/2023</li><li>Paid</li></ul></div></div><div class="section-3"><table><tr><th>QTY</th><th>DESCRIPTION</th><th>TIME</th><th>UNIT PRICE</th></tr><tr><td>1</td><td>Top-up made through net banking</td><td>${paymentCheck?.created_at}</td><td>$ ${paymentCheck?.amount}</td></tr></table></div><div class="section-4"><div><h3>TOTAL</h3><p>${paymentCheck?.file_name}</p></div></div><hr></div></div>`
    convertToPDF(htmlContent, 'Invoice.pdf');

  }

  // useAxios
  const [invoiceResponse, error, loading, Invoicefetch] = useAxios();

  //use State
  const [invoices , setInvoices] = useState([]);

  // Functions
  const mainCallingFunction = () => {
    fetchAllInvoices()
  }

  const fetchAllInvoices = () => {
    Invoicefetch(InvoiceFetchAdmin({ email: profile?.email }));
  };


  // UseStates
  useEffect(()=>{
    mainCallingFunction()
  },[])

  useEffect(()=>{
    if(invoiceResponse?.result == "success"){
      setInvoices(invoiceResponse?.data)
    }
  },[invoiceResponse])




  const tableExample = [
    {
      avatar: { src: avatar1, status: 'success' },
      user: {
        name: 'Yiorgos Avraamu',
        new: true,
        registered: 'Jan 1, 2021',
      },
      country: { name: 'USA', flag: cifUs },
      usage: {
        value: 50,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'success',
      },
      payment: { name: 'Mastercard', icon: cibCcMastercard },
      activity: '10 sec ago',
    },
    {
      avatar: { src: avatar2, status: 'danger' },
      user: {
        name: 'Avram Tarasios',
        new: false,
        registered: 'Jan 1, 2021',
      },
      country: { name: 'Brazil', flag: cifBr },
      usage: {
        value: 22,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'info',
      },
      payment: { name: 'Visa', icon: cibCcVisa },
      activity: '5 minutes ago',
    },
    {
      avatar: { src: avatar3, status: 'warning' },
      user: { name: 'Quintin Ed', new: true, registered: 'Jan 1, 2021' },
      country: { name: 'India', flag: cifIn },
      usage: {
        value: 74,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'warning',
      },
      payment: { name: 'Stripe', icon: cibCcStripe },
      activity: '1 hour ago',
    },
    {
      avatar: { src: avatar4, status: 'secondary' },
      user: { name: 'Enéas Kwadwo', new: true, registered: 'Jan 1, 2021' },
      country: { name: 'France', flag: cifFr },
      usage: {
        value: 98,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'danger',
      },
      payment: { name: 'PayPal', icon: cibCcPaypal },
      activity: 'Last month',
    },
    {
      avatar: { src: avatar5, status: 'success' },
      user: {
        name: 'Agapetus Tadeáš',
        new: true,
        registered: 'Jan 1, 2021',
      },
      country: { name: 'Spain', flag: cifEs },
      usage: {
        value: 22,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'primary',
      },
      payment: { name: 'Google Wallet', icon: cibCcApplePay },
      activity: 'Last week',
    },
    {
      avatar: { src: avatar6, status: 'danger' },
      user: {
        name: 'Friderik Dávid',
        new: true,
        registered: 'Jan 1, 2021',
      },
      country: { name: 'Poland', flag: cifPl },
      usage: {
        value: 43,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'success',
      },
      payment: { name: 'Amex', icon: cibCcAmex },
      activity: 'Last week',
    },
  ]

  return (
    <>

      <CRow>
        <CCol xs>
        <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead color="light">
                  <CTableRow>
                  <CTableHeaderCell className="text-center">S No.</CTableHeaderCell>

                    <CTableHeaderCell>Invoice</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Amount</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Actions</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Payment Method</CTableHeaderCell>
                    <CTableHeaderCell>Date & Time</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {invoices.map((row, index) => (
                    <CTableRow v-for="item in tableItems" key={index}>
                      <CTableDataCell className="text-center">
                       {index+1}
                      </CTableDataCell>
                      <CTableDataCell>
                        <div>{row.unique_id}</div>
                        <div className="small text-medium-emphasis">
                          {row.user.full_name}
                        </div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                      $ {(row.amount).toString()}
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <div style={{display:"flex", flexDirection:"column", gap:"0.5rem"}}>
                        <CButton  color={"light"}
                         onClick={()=>handleConvertToPDF(row)}

                        >Download</CButton>

                       
                        </div>
                        {/* <CIcon size="xl" icon={item.country.flag} title={item.country.name} /> */}
                      </CTableDataCell>
                      {/* <CTableDataCell>
                        <div className="clearfix">
                          <div className="float-start">
                            <strong>{item.usage.value}%</strong>
                          </div>
                          <div className="float-end">
                            <small className="text-medium-emphasis">{item.usage.period}</small>
                          </div>
                        </div>
                        <CProgress thin color={item.usage.color} value={item.usage.value} />
                      </CTableDataCell> */}
                      <CTableDataCell className="text-center">
                        Net Banking
                      </CTableDataCell>
                      <CTableDataCell>
                        <div className="small text-medium-emphasis">Created at</div>
                        {row?.created_at && moment(row?.created_at).format('MMMM DD, YYYY  -  HH:mm:ss')}
                      </CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
        </CCol>
      </CRow>
    </>
  )
}

export default InvoiceAdmin
