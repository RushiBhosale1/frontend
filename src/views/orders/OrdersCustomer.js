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

import WidgetsBrand from '../widgets/WidgetsBrand'
import WidgetsDropdown from '../widgets/WidgetsDropdown'
import useAxios from 'src/network/useAxios'
import { useSelector } from 'react-redux'
import { userDetails } from 'src/redux/reducers/userDetails.reducer'
import { adminOrderActions, fetchCustomerOrders, fetchCustomerOrdersDash } from 'src/urls/urls'
import { useRouter } from 'src/hooks/use-router'

const OrdersCustomer = () => {
  const [fileResponse, error, loading, fetch] = useAxios();
  const [responseAction, errorAction, loadingAction, fetchActionOrder] = useAxios();
  const [responseDash, errorDash, loadingDash, fetchOrderDash] = useAxios();


  const profile = useSelector(userDetails);
  const [dashDetails, setDashDetails] = useState({

  })
  const router = useRouter();
  useEffect(()=>{
    if(profile.user_coins.length > 0 && profile.user_coins[0]?.coin < 1000){
      router.push('/amount/:topuprequired');
    }
  },[])
  const fetchAllOrders = () => {
    fetch(fetchCustomerOrders({ email: profile?.email }));
  };
  const fetchAllOrdersDash = (ation) => {
    fetchOrderDash(fetchCustomerOrdersDash({ email: profile?.email}));
  };


  useEffect(()=>{
    fetchAllOrdersDash()
    fetchAllOrders()
  },[])
  useEffect(()=>{
    if(fileResponse?.result == "success"){
      setOrders(fileResponse?.data)
    }

  },[fileResponse])

  useEffect(()=>{
    if(responseAction?.result == "success"){
      fetchAllOrders()
      setMessage((prev)=>({...prev, 
        showMessage: true,
        isError:false,
        message:responseAction?.message
      }))
    }

  },[responseAction])
  useEffect(()=>{
    if(responseDash?.result == "success"){
      setDashDetails((prev)=>({...prev, 
        total_orders:responseDash?.data?.total_orders,
        orders_last_Week:responseDash?.data?.orders_last_Week,
        pending_orders:responseDash?.data?.pending_orders,
        order_delivered:responseDash?.data?.order_delivered,
      }))

    }

  },[responseDash])
  const [orders, setOrders] = useState([]);
  const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
  const getTotalOrderPrice = (orders) => parseInt(orders.map(order => order.quantity * order.product_obj.quoted_price).reduce((acc, price) => acc + price, 0), 10);

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
    }
  ]
  function getStatus(status) {
    switch (status.toLowerCase()) {
      case "pending":
        return 10;
      case "packed":
        return 40;
      case "shipped":
        return 70;
      case "delivered":
        return 100;
      default:
        return -1; // Indicate an unknown status
    }
  }
  const tableExample2 = [
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
    }
  ]
  useEffect(()=>{
    console.log(orders)
  },[orders])
  return (
    <>

      <WidgetsBrand withCharts data={dashDetails} />

      <CRow>
      <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead color="light">
                  <CTableRow>
                    {/* <CTableHeaderCell></CTableHeaderCell> */}
                    <CTableHeaderCell className="text-center">
                      Your Orders
                    </CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>

{orders.map((obj)=><CTableRow>
                  <CTableDataCell>
                <CCard style={{marginTop:"1rem", padding:"2rem"}}>
                <div style={{marginBottom:"2rem", display:"flex", justifyContent:"space-between"}}>
                  <h3 style={{marginBottom:"1rem"}}>Order Id: #{obj.order_unique_id}</h3>
                    <span>
                    <strong>Ships to </strong><br/>
                    {obj.customer_address}
                    
                    </span>

                  </div>
                  {obj?.order_id.map((item, index) => (
                    <>
                      <div>
                        <div>{item.product_obj.product_name}</div>
                        <div className="small text-medium-emphasis">
                          {/* <span>{item.user.new ? 'New' : 'Recurring'}</span> | Registered:{' '} */}
              
                          {new Date(item?.created_at).toLocaleString()}
                        </div>
                        <div className="small text-medium-emphasis">
                          {/* <span>{item.user.new ? 'New' : 'Recurring'}</span> | Registered:{' '} */}
                          quantity {item?.quantity}
                        </div>
                      </div>
                  
                      <div style={{marginTop:"1rem"}}>
                        
                        <CProgress thin color={"primary"} value={getStatus(item.status)}/>
                        <div style={{display:"flex", justifyContent:"space-between", marginBottom:"2rem"}}>
                        <p>Placed</p>
                          <p>Packed</p>
                          <p>Shipped</p>
                          <p>Delivered</p>

                        </div>
                      </div>
                    
                      </>
                  ))}

                  <div style={{textAlign:"end"}}><strong>Total Amount: ${getTotalOrderPrice(obj?.order_id)}</strong></div>
               
                </CCard>
                </CTableDataCell>
                </CTableRow>)}
               
               

                


                </CTableBody>
              </CTable>
      </CRow>
    </>
  )
}

export default OrdersCustomer
