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
  CCardImage,
  CCardText,
  CCardTitle,
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
import { Button, Drawer, Radio, Space } from 'antd'
import ReactImg from 'src/assets/images/react.jpg'

import Cart from 'src/components/Cart'
import { userDetails } from 'src/redux/reducers/userDetails.reducer'
import { fetchCart, productFetchCustomer } from 'src/urls/urls'
import { useSelector } from 'react-redux'
import useAxios from 'src/network/useAxios'
import { useRouter } from 'src/hooks/use-router'

const ProductsCustomer = () => {
  const profile = useSelector(userDetails);

  //use axios
  const [productsResponse, productsError, productsLoading, fetchProducts] = useAxios();
  const [CartResponse, errorCart, loadingCart, fetchCartResponse] = useAxios();
  const [CartResponsePlace, errorPlaceCart, loadingPlaceCart, placeCartResponse] = useAxios();

  //useState
  const [open, setOpen] = useState(false)
  const [productsData, setProductsData] = useState([])
  const [cartOrders, setCartOrders] = useState([]);
  const router = useRouter();
  useEffect(()=>{
    if(profile.user_coins.length > 0 && profile.user_coins[0]?.coin < 1000){
      router.push('/amount/:topuprequired');
    }
  },[])
  //function
  const showDrawer = () => {
    setOpen(true)
  }
  const onClose = () => {
    setOpen(false)
  }
  const fetchCustomerOrders = () => {
    fetchProducts(productFetchCustomer({ email:profile?.email }));
  };
  const fetchCartOrders = () => {
    fetchCartResponse(fetchCart({ email:profile?.email}));
  };
  // const placeCart = (id, action) => {
  //   placeCartResponse(adminOrderActions({ orderId:id, status: action}));
  // };

  //useEffect

  useEffect(()=>{
    if(profile?.email){
      fetchCustomerOrders()
      fetchCartOrders()
    }
  },[profile])
  useEffect(()=>{
    if(productsResponse?.result == "success" && productsResponse?.data){
      setProductsData(productsResponse?.data)
    }
    },[productsResponse])
    useEffect(()=>{
      if(CartResponse?.result == "success"){
        setCartOrders(CartResponse?.data)
      }
  
    },[CartResponse])
    useEffect(()=>{
      console.log(cartOrders)
    },[cartOrders])

  return (
    <>
      <CCol xs>
        <CCard className="mb-4">
          <CCardHeader>Products Insights</CCardHeader>
          <CCardBody>
            <CRow>
              <CCol xs={12} md={12} xl={12}>
                <CRow>
                  <CCol sm={6}>
                    <div className="border-start border-start-4 border-start-info py-1 px-3">
                      <div className="text-medium-emphasis small">Products Approved</div>
                      <div className="fs-5 fw-semibold">{productsResponse?.insights?.approved}</div>
                    </div>
                  </CCol>
                  <CCol sm={6}>
                    <div className="border-start border-start-4 border-start-danger py-1 px-3 mb-3">
                      <div className="text-medium-emphasis small">Products Pending</div>
                      <div className="fs-5 fw-semibold">{productsResponse?.insights?.pending}</div>
                    </div>
                  </CCol>
                </CRow>
              </CCol>

              {/* <CCol xs={12} md={6} xl={6}>
                <CRow>
                  <CCol sm={6}>
                    <div className="border-start border-start-4 border-start-warning py-1 px-3 mb-3">
                      <div className="text-medium-emphasis small">Pageviews</div>
                      <div className="fs-5 fw-semibold">78,623</div>
                    </div>
                  </CCol>
                  <CCol sm={6}>
                    <div className="border-start border-start-4 border-start-success py-1 px-3 mb-3">
                      <div className="text-medium-emphasis small">Organic</div>
                      <div className="fs-5 fw-semibold">49,123</div>
                    </div>
                  </CCol>
                </CRow>
              </CCol> */}
            </CRow>
          </CCardBody>
        </CCard>
      </CCol>
      <CRow>

{productsData.map((product) => (
           <CCol xs={12} sm={6} lg={3} key={product.id}>
           <CCard style={{ width: '18rem', marginTop: '1rem' }}>
             <CCardImage orientation="top" src={"http://127.0.0.1:8000"+product.photo_url} />
             <CCardBody>
               <CCardTitle>{product?.product_name}</CCardTitle>
               <CCardText>
               <span style={{color:product?.status=="pending"?"red":"green"}}> ({product?.status})</span><br></br>
                {product?.description}
               </CCardText>
               <h3>${product?.quoted_price}</h3>
               <div>
               <CButton onClick={()=>{
                 window.open(`${product?.product_drop_shipping_url}`, "_blank");
               }
              
              } style={{marginRight:"0.3rem"}} >View Product</CButton>
               <CButton onClick={()=>{
                showDrawer()
                
                }} variant="outline">Add to cart</CButton>
               </div>
             </CCardBody>
           </CCard>
         </CCol>
        ))}
      
        
      </CRow>
      
      <Drawer
        title="Drawer with extra actions"
        placement={'bottom'}
        width={500}
        onClose={onClose}
        open={open}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button type="primary" onClick={onClose}>
              Order
            </Button>
        </Space>
        }
      >
       <Cart cartOrders={cartOrders}/>
      </Drawer>
    </>
  )
}

export default ProductsCustomer
