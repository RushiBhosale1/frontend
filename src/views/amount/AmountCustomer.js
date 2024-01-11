/* eslint-disable */

import React, { useEffect, useRef, useState } from 'react'
import { WhatsAppOutlined } from '@ant-design/icons';

import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CFormInput,
  CFormRange,
  CFormTextarea,
  CInputGroup,
  CInputGroupText,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CNav,
  CNavItem,
  CNavLink,
  CProgress,
  CRow,
  CTabContent,
  CTabPane,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CWidgetStatsB,
  CWidgetStatsC,
  CWidgetStatsF,
} from '@coreui/react'
import { CChartLine } from '@coreui/react-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils'
import axios from 'axios';

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
  cilMediaPlay,
  cilCode,
  cilArrowCircleTop,
  cilArrowCircleBottom,
  cilChartPie,
  cilHistory,
  cilPlus
} from '@coreui/icons'

import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'
import avatar3 from 'src/assets/images/avatars/3.jpg'
import avatar4 from 'src/assets/images/avatars/4.jpg'
import avatar5 from 'src/assets/images/avatars/5.jpg'
import avatar6 from 'src/assets/images/avatars/6.jpg'

import WidgetsBrand from '../widgets/WidgetsBrand'
import WidgetsDropdown from '../widgets/WidgetsDropdown'
import { useDispatch, useSelector } from 'react-redux'
import { updateUserCoins, userDetails } from 'src/redux/reducers/userDetails.reducer'
import { paymentCustomerDashboard, paymentCustomerWithdraw, paymentCustomerRedeem } from 'src/urls/urls'
import useAxios from 'src/network/useAxios';
import { Alert, Button, Modal } from 'antd';
import { useParams } from 'react-router-dom';
import { useRouter } from 'src/hooks/use-router';
import PDFComponent from 'src/components/PDFComponent';
import convertToPDF from 'src/components/convertToPdf';

const AmountCustomer = () => {
  const profile = useSelector(userDetails);
  const router = useRouter();

  useEffect(()=>{
    if(profile.user_coins.length > 0 && profile.user_coins[0]?.coin < 1000){
      router.push('/amount/:topuprequired');
    }
  },[])

  const [message, setMessage] = useState({
    showMessage: false,
    isError: '',
    message: '',
  });
  const { top } = useParams();
  const {amount} = useParams();
  const [navActions, setNavActions] = useState('topup')

  const [moneyActionForm, setMoneyActionForm] = useState({
    amount: 7000,
    coupon:"",
    action: navActions,
    email:profile?.email,
    bankAccount:"",
    pdf:""
  })
  useEffect(()=>{
    console.log(top)
    console.log(amount)

    if(top && !amount){
      handleOpenModalSecond()
    }
    if(amount){
      setMoneyActionForm((prev)=>({...prev, coupon:amount, email:profile?.email}))
      const money = {...moneyActionForm, coupon:amount}
      initiatePayment(money)
    }
    
  },[top])





  // useAxios
  const [customerDashResponse, customerDashError, customerDashLoading, customerDashFetch] = useAxios();

  const [paymentCheck, errorpaymentCheck, loadingpaymentCheck, fetchPaymentCheck] = useAxios();
  const [customerWithdrawResponse, customerWithdrawError, customerWithdrawLoading, customerWithdrawFetch] = useAxios();
  const [redeemResponse, redeemError, redeemLoading, redeemFetch] = useAxios();

  //use State

  const [paymentId, setPaymentId] = useState('');
  const dispatch = useDispatch();
  const [dynamicData, setDynamicData] = useState('Dynamic content here');
  const handleConvertToPDF = (response) => {
    const htmlContent = `<div id="pdf-container"><div class="main-content"><img src="/static/media/paid.017369e94c412123dd85.webp" class="img-paid"><div class="section-1"><div class="section-1-header"><h1>INVOICE</h1><div class="text-inside-sec1"><b>OPTIPRIME</b><p>15 Sheikh Zayed Road, Office 302
    </p><p>Dubai, United Arab Emirates
    1</p></div></div><div class="logo-img"><img src="/static/media/optiprime.a06e0a4653069c405514.jpeg" alt="Img not available"></div></div><div class="section-2"><div class="sec-2-bill"><b>BILL TO</b><p>${profile?.full_name}</p><p>${profile?.user[0]?.company_address}</p></div><div class="sec-2-detail"><ul><b><li>Invoice #</li></b><b><li>Invoice Date</li></b><b><li>Status</li></b></ul><ul><li>${response?.file_name}</li><li>11/02/2023</li><li>Paid</li></ul></div></div><div class="section-3"><table><tr><th>QTY</th><th>DESCRIPTION</th><th>TIME</th><th>UNIT PRICE</th></tr><tr><td>1</td><td>Top-up made through net banking</td><td>${response?.created_at}</td><td>$ ${response?.amount}</td></tr></table></div><div class="section-4"><div><h3>TOTAL</h3><p>${response?.file_name}</p></div></div><hr></div></div>`
    convertToPDF(htmlContent, 'Invoice.pdf');
    handleOpenModal()

  }

  // Functions
  const initiatePayment = async (money = false) => {
    if (money){
      console.log(money)
      redeemFetch(paymentCustomerRedeem(money))
    }
    else{
      redeemFetch(paymentCustomerRedeem(moneyActionForm))
    }

  };
  const customerWithdrawFunc = () => {
    customerWithdrawFetch(paymentCustomerWithdraw({email: profile?.email, amount:moneyActionForm.amount, bankAcc:moneyActionForm?.bankAcc}))
  }
  const customerDashFunc = () => {
    customerDashFetch(paymentCustomerDashboard({email: profile?.email}))
  }
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisibleSecond, setModalVisibleSecond] = useState(false);
  const [modalMessage, setModalMessage] = useState({
    message:"",
    invoice:false
  });

  useEffect(()=>{
    if(modalVisible || modalVisibleSecond){
      var toolbarElement = document.querySelector('.header.header-sticky');
      if (toolbarElement) {
        toolbarElement.style.zIndex = 0;
      }
    }
    else{
      var toolbarElement = document.querySelector('.header.header-sticky');
      if (toolbarElement) {
        toolbarElement.style.zIndex = 2000;
      }
    }
  },[modalVisible, modalVisibleSecond])
  useEffect(()=>{console.log(moneyActionForm)},[moneyActionForm])
  useEffect(()=>{
    customerDashFunc()
  },[])
  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };
  const handleOpenModalSecond = () => {
    setModalVisibleSecond(true);
  };

  const handleCloseModalSecond = () => {
    setModalVisibleSecond(false);
  };

  // UseEffect
  useEffect(() => {
    if (redeemResponse?.result == 'success') {
      setModalMessage((prev)=>({...prev, message: "The token has been successfully redeemed. Kindly refresh the page to view the updated amount.", invoice: true}))
      handleConvertToPDF(redeemResponse)


    }
    else if(redeemResponse?.result == 'failure'){
      setModalMessage((prev)=>({...prev, message:"Either the coupon code you entered was invalid or Expired, Please contact your administrator", invoice:false}))
      handleOpenModal()

    }
  }, [redeemResponse]);
  useEffect(() => {
    if (customerWithdrawResponse?.result == 'success') {
      setMoneyActionForm((prev)=>({...prev,amount:""}))
      customerDashFunc();
      setMessage((prev) => ({
        ...prev,
        showMessage: true,
        isError: false,
        message: customerWithdrawResponse?.message,
      }));
      dispatch(updateUserCoins(customerWithdrawResponse?.updated_coins));

    }
  }, [customerWithdrawResponse]);

  return (
    <>
  
  <Modal
        title={modalMessage?.invoice ? 'Payment Successful' : "Issue with the token"}
        visible={modalVisible}
        onCancel={handleCloseModal}
        footer={[
          <Button key="back" onClick={handleCloseModal}>
            Return
          </Button>,
          modalMessage?.invoice ?
                <Button key="back"
                type="primary" style={{backgroundColor:"green", color:"white"}} 
                onClick={()=>handleConvertToPDF(redeemResponse)}>
                Download Invoice
              </Button>
              :
              <Button key="submit" type="primary" style={{backgroundColor:"green", color:"white"}} onClick={
                ()=>{
                  const message = encodeURIComponent(`OptiPrime,
    
                  I trust this message finds you well. I would like to bring to your attention about the token mentioned below
                  
                  Token : ${amount}

                  is having some issue, kindly check through it please.
    
                  Best regards,
                  ${profile?.full_name}`)
    
                  window.open(`${"https://wa.me/+917042414212?text="}${message}`, "_blank");
                }
              }>
                Whatsapp Us
              </Button>

       ,
        ]}
        width={800} // Adjust width as needed
      >
        {modalMessage?.message}
      </Modal>
  <>
    <CModal
      backdrop="static"
      className='static-modal-down'
      visible={modalVisibleSecond}
      aria-labelledby="StaticBackdropExampleLabel"
    >
      <CModalHeader>
        <CModalTitle id="StaticBackdropExampleLabel">
         <h3> Alert </h3>
          </CModalTitle>
      </CModalHeader>
      <CModalBody>
      To Access our premium features, Your account need a Top-Up, Please Contact our account manager for more details.
      </CModalBody>
      <CModalFooter>

        <CButton color="success" style={{color:"white"}}
        onClick={()=>{
          const message = encodeURIComponent(`OptiPrime,
          I trust this message finds you well. I would like to bring to your attention that I have
          recently joined your portal and willing to know about the topups and the working system

          Best Regards,
          ${profile?.full_name}`)

              window.open(`${"https://wa.me/+917042414212?text="}${message}`, "_blank");
        }}
        >      <WhatsAppOutlined /> &nbsp;
Whatsapp us</CButton>
      </CModalFooter>
    </CModal>
  </>
        {/* <Modal
        style={{marginTop:"10rem"}}
        title="Alert"
        visible={modalVisibleSecond}
        onCancel={handleCloseModalSecond}
        width={800} // Adjust width as needed
      >
       To Access our premium features, Your account must be above $1000, please topup your balance accordingly.
      </Modal> */}
      {message.showMessage && (
        <div style={{ marginBottom: '1rem' }}>
          {' '}
          <Alert
            message={message?.message}
            closable
            type={message?.isError ? 'error' : 'success'}
            onClose={() =>
              setMessage((prev) => ({ ...prev, message: '', isError: false, showMessage: false }))
            }
          />
        </div>
      )}
<CRow>
    
<CCol xs={12} sm={6} lg={9}>
      <CNav variant="tabs">
        <CNavItem>
          <CNavLink
            active={navActions == 'topup' ? true : false}
            onClick={() => setNavActions('topup')}
            style={{ cursor: 'pointer' }}
          >  
            <CIcon icon={cilArrowCircleTop} className="me-2" />
            Top up wallet
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink
            active={navActions == 'withdraw' ? true : false}
            onClick={() => setNavActions('withdraw')}
            style={{ cursor: 'pointer' }}
          >
            <CIcon icon={cilArrowCircleBottom} className="me-2" />
            Withdraw
          </CNavLink>
        </CNavItem>
      </CNav>
      <CTabContent className="rounded-bottom">
        <CTabPane className="p-3 preview" visible>
          <div>
            <h2 style={{ fontSize: '1.4rem' }}>
              Current Balance: <span style={{ fontSize: '1.8rem' }}>${profile.user_coins.length > 0 ? profile.user_coins[0]?.coin : "N/A"}</span>
            </h2>

            {navActions == 'withdraw' && <p style={{color:"red"}}>Withdrawn amount will be settled in your account within 12 buisness days</p>}

          </div>
          {navActions == 'topup' &&
          <>
          <div style={{ width: '80%' , marginTop:"1.5rem"}}>
            <CInputGroup>
              <CFormInput
                aria-label="Dollar amount (with dot and two decimal places)"
                value={moneyActionForm?.coupon}
                placeholder='Enter your coupon to redeem'
                onChange={(e) => {
                  setMoneyActionForm((prev) => ({ ...prev, coupon: e.target.value }))
                }}
              />
               {navActions == 'topup' &&
            <CButton
            onClick={()=>navActions == 'withdraw' ? customerWithdrawFunc(): initiatePayment() }
            > {navActions == 'withdraw' ? "Withdraw Amount" : "Redeem Coupon"}</CButton>}
              <p style={{color:"#a0550c", marginTop:"1rem"}}>
              The funds you deposit can be effortlessly withdrawn, and any withdrawn amount will be transferred to your bank account within 12 business days.
              </p>
            </CInputGroup>
            {/* <input
              type="range"
              min={0}
              max={10}
              step={1}
              defaultValue="7"
              id="customRange3"
              style={{ width: '100%', marginTop: '1rem' }}
              onChange={(e) => {
                console.log(e.target.value)
                setMoneyActionForm((prev) => ({ ...prev, amount: e.target.value * 1000 }))
              }}
            />           */}
            </div>
          <div style={{ width: '70%' }}>
            <p style={{ textAlign: 'center' }}>Or</p>
          </div>
          <div >
            <h4 style={{marginTop:"1rem", marginBottom:"1rem"}}>Choose from Our Existing Topup Plans</h4>
            <CRow>
              <CCol xs={12} sm={12} lg={12}>
                <CWidgetStatsB
                style={{cursor:"pointer"}}
                onClick={()=>{
                  const message = encodeURIComponent(`OptiPrime,

                  I wanted to know about the customized topup plans for me, would like to hear from you soon.
    
                  Best regards,
                  ${profile?.full_name}`)
                  window.open('https://wa.me/+917042414212')
                }}
                  className={`mb-4 hover-point-price`}
                  progress={{ color: 'success', value: 100 }}
                  text="We will provide the best suitable for you"
                  title="Talk to our account manager for the best plans suitable for you"
                  value="Contact Us"
                />
              </CCol>
           
            </CRow>
          </div>
          </>
          }
          {navActions == 'withdraw' &&
          <>
          
          <div style={{ width: '80%' , marginTop:"2rem"}}>
            <CInputGroup>
              <CInputGroupText>$</CInputGroupText>

              <CFormInput
                aria-label="Dollar amount (with dot and two decimal places)"
                value={moneyActionForm?.amount}
                onChange={(e) => {
                  setMoneyActionForm((prev) => ({ ...prev, amount: e.target.value }))
                }}
              />
              <CInputGroupText>0.00</CInputGroupText>
            </CInputGroup>
            <input
              type="range"
              min={0}
              max={10}
              step={1}
              defaultValue="7"
              id="customRange3"
              style={{ width: '100%', marginTop: '1rem' }}
              onChange={(e) => {
                console.log(e.target.value)
                setMoneyActionForm((prev) => ({ ...prev, amount: e.target.value * 1000 }))
              }}
            />          </div>
        
          <div >
            <h4 style={{marginTop:"3rem", marginBottom:"1rem"}}>Update your Bank Account Details</h4>
            <p style={{marginTop:"-1rem"}}>Please enter the details of your bank account in which you want 
            your Balance to be credit in.
            </p>
            <CRow>
            <CInputGroup style={{height:"9rem", marginBottom:"1rem"}}>
                <CInputGroupText>Your Bank Account Details</CInputGroupText>
                <CFormTextarea aria-label="With textarea"
                onChange={(e)=>setMoneyActionForm((prev) => ({ ...prev, bankAcc: e.target.value }))
              }
                placeholder="For example&#10;Name: John Smith&#10;Account Number: 233432-234-233-23&#10;Bank Name: Abc Bank&#10;Ifsc Code: KKPK32432&#10;
                "
                ></CFormTextarea>
              </CInputGroup>
            </CRow>
          </div>
          </>
          }
       
         
          <div>
          {navActions == 'withdraw' &&
            <CButton
            onClick={()=>navActions == 'withdraw' ? customerWithdrawFunc(): initiatePayment() }
            > {navActions == 'withdraw' ? "Withdraw Amount" : "Topup Amount"}</CButton>}
          </div>
        </CTabPane>
      </CTabContent>
</CCol>
<CCol xs={12} sm={6} lg={3} style={{marginTop:"7rem"}}>
  <CRow>
  <CWidgetStatsF
        className="mb-3"
        color="primary"
        icon={<CIcon icon={cilHistory} height={24} />}
        padding={false}
        title="Last Transaction"
        value={`$ ${customerDashResponse?.data?.insights?.last_transaction || "N/A"}`}/>
  </CRow>
  <CRow>
  <CWidgetStatsF
        className="mb-3"
        color="primary"
        icon={<CIcon icon={cilPlus} height={24} />}
        padding={false}
        title="Last Topup"
        value={`$ ${customerDashResponse?.data?.insights?.last_topup || "N/A"}`}/>
  </CRow>
  <CRow>
  <CWidgetStatsF
        className="mb-3"
        color="primary"
        icon={<CIcon icon={cilArrowCircleBottom} height={24} />}
        padding={false}
        title="Last Withdraw"
        value={`$ ${customerDashResponse?.data?.insights?.last_withdraw || "N/A"}`}/>
  </CRow>

</CCol>



      </CRow>
    </>
  )
}

export default AmountCustomer
