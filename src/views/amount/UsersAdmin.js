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
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
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
import { InvoiceFetch, userFetchDetails } from 'src/urls/urls'
import useAxios from 'src/network/useAxios'
import moment from 'moment'
import { Input, Radio } from 'antd'
import { useSelector } from 'react-redux'
import { userDetails } from 'src/redux/reducers/userDetails.reducer'

const UsersAdmin = () => {
  const profile = useSelector(userDetails);
  useEffect(()=>{
    console.log(profile)
  },[profile])
  const options = [
    {
      label: 'Topup',
      value: 'topup',
    },
    {
      label: 'Withdraw',
      value: 'withdraw',
    }
  ];

  // useAxios
  const [invoiceResponse, error, loading, Invoicefetch] = useAxios();
  const [userData, userDataError, uesrDataLoading, userDataFetch] = useAxios();


  //use State
  const [invoices , setInvoices] = useState([]);
  const [visible, setVisible] = useState(false);
  const [value3, setValue3] = useState('topup');



  // Functions
  const mainCallingFunction = () => {
    fetchAllInvoices()
  }

  const fetchAllInvoices = () => {
    Invoicefetch(InvoiceFetch({ email: 'yatin@gmail.com' }));
  };

  const onChange3 = ({ target: { value } }) => {
    console.log('radio4 checked', value);
    setValue3(value);
  };
  const fetchDashboardUserData = () => {
    if(profile?.email) userDataFetch(userFetchDetails({ email: profile?.email }));
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
  useEffect(() => {
    fetchDashboardUserData();
  }, [profile]);
console.log("data", userData?.data);



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
        <CModal backdrop="static" visible={visible} onClose={() => setVisible(false)} >
        <CModalHeader>
          <CModalTitle>Modal title</CModalTitle>
        </CModalHeader>
        <CModalBody>
        <Radio.Group options={options} onChange={onChange3} value={value3} optionType="button" />
        <Input defaultValue="0" style={{marginTop:"1rem"}} />
      <p>You have selected to <span style={{color:value3=="topup"?"green":"red", fontSize:"1.1rem"}}>{value3.toUpperCase()}</span> the amount.</p>
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setVisible(false)}>
            Close
          </CButton>
          <CButton color="primary">Submit</CButton>
        </CModalFooter>
      </CModal>

      <CRow>
        <CCol xs>

        <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead color="light">
                  <CTableRow>
                    {/* <CTableHeaderCell className="text-center">
                      <CIcon icon={cilPeople} />
                    </CTableHeaderCell> */}
                    <CTableHeaderCell>User</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Company</CTableHeaderCell>
                    <CTableHeaderCell>Total Amount</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Amount Actions</CTableHeaderCell>
                    {/* <CTableHeaderCell>Activity</CTableHeaderCell> */}
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {userData && userData?.data?.map((item, index) => (
                    <CTableRow v-for="item in tableItems" key={index}>
                      {/* <CTableDataCell className="text-center">
                        <CAvatar size="md" src={item.avatar.src} status={item.avatar.status} />
                      </CTableDataCell> */}
                      <CTableDataCell>
                        <div>{item.user.full_name}</div>
                        <div className="small text-medium-emphasis">
                          <span>{item.user.email}</span>
                          {item.user.registered}
                        </div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                      <div>{item.brand_name}</div>
                      </CTableDataCell>
                      <CTableDataCell>
                      <div>$ {item.user?.coins_user[0]?.coin || 0}</div>

                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                       <CButton onClick={() => setVisible(!visible)} variant='outline'>Wallet</CButton>
                      </CTableDataCell>
                      {/* <CTableDataCell>
                        <div className="small text-medium-emphasis">Last login</div> */}
                        {/* <strong>{item.activity}</strong> */}
                      {/* </CTableDataCell> */}
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
        </CCol>
      </CRow>
    </>
  )
}

export default UsersAdmin
