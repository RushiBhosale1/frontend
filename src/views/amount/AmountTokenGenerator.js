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
import { paymentCustomerDashboard, paymentCustomerWithdraw, tokenGeneration } from 'src/urls/urls'
import useAxios from 'src/network/useAxios';
import { Alert, Button, Modal } from 'antd';
import { useParams } from 'react-router-dom';
import { useRouter } from 'src/hooks/use-router';
import PDFComponent from 'src/components/PDFComponent';
import convertToPDF from 'src/components/convertToPdf';

const AmountCustomer = () => {
  const profile = useSelector(userDetails);

  const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
  const router = useRouter();


  const iframeRef = useRef(null);

  const [pdfLink, setPdfLink] = useState("");
  const [message, setMessage] = useState({
    showMessage: false,
    isError: '',
    message: '',
  });

  const [navActions, setNavActions] = useState('topup')

  const [moneyActionForm, setMoneyActionForm] = useState({
    amount: 7000,
    action: navActions,
    email:profile?.email,
    bankAccount:"",
    pdf:""
  })






  // useAxios
  const [customerDashResponse, customerDashError, customerDashLoading, customerDashFetch] = useAxios();

  const [paymentCheck, errorpaymentCheck, loadingpaymentCheck, fetchPaymentCheck] = useAxios();
  const [customerWithdrawResponse, customerWithdrawError, customerWithdrawLoading, customerWithdrawFetch] = useAxios();
  const [generateTokenResponse, generateTokenError, generateTokenLoading, generateTokenFetch] = useAxios();

  //use State

  const [paymentId, setPaymentId] = useState('');
  const dispatch = useDispatch();
  const [dynamicData, setDynamicData] = useState('Dynamic content here');


  // Functions
  const initiatePayment = async (money = false) => {
    generateTokenFetch(tokenGeneration(moneyActionForm))
  };
  const customerWithdrawFunc = () => {
    customerWithdrawFetch(paymentCustomerWithdraw({email: profile?.email, amount:moneyActionForm.amount, bankAcc:moneyActionForm?.bankAcc}))
  }
  const customerDashFunc = () => {
    customerDashFetch(paymentCustomerDashboard({email: profile?.email}))
  }
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisibleSecond, setModalVisibleSecond] = useState(false);

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

  const [tokenGenerated, setTokenGenerated] = useState("")
  // UseEffect
  useEffect(() => {
    if (generateTokenResponse?.result == 'success') {
      setTokenGenerated(generateTokenResponse?.token)
      handleOpenModal()


    }
  }, [generateTokenResponse]);
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
  const copyToClipboard = (textToCopy) => {
    // Get the text to be copied

    // Use the Clipboard API to write the text to the clipboard
    navigator.clipboard.writeText(`http://localhost:3000/#/amount/:topuprequired/${tokenGenerated}`)
      .then(() => {
        // Notify the user that the text has been copied
        alert(`Text copied to clipboard: http://localhost:3000/#/amount/:topuprequired/${tokenGenerated}`);
      })
      .catch((error) => {
        // Handle any errors that may occur during the copy process
        console.error('Unable to copy text to clipboard', error);
      });
  };
  return (
    <>
  
  <Modal
        title="Token Generated Successfully"
        visible={modalVisible}
        onCancel={handleCloseModal}
        footer={[
          <Button key="back" onClick={handleCloseModal}>
            Return
          </Button>,
             
          <Button key="submit" type="primary" style={{backgroundColor:"green", color:"white"}} onClick={
            ()=>{
              copyToClipboard(tokenGenerated)
            }
          }>
            Copy Link
          </Button>,
        ]}
        width={800} // Adjust width as needed
      >
      Token of the requested amount has been generated successfully. <br/>
      TOKEN: {tokenGenerated} <br />
      GENERATED LINK : http://localhost:3000/#/amount/:topuprequired/{tokenGenerated}

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

              Best regards,
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
            Generate Token
          </CNavLink>
        </CNavItem>

      </CNav>
      <CTabContent className="rounded-bottom">
        <CTabPane className="p-3 preview" visible>
          <div>
          

            {navActions == 'withdraw' && <p style={{color:"red"}}>Withdrawn amount will be settled in your account within 12 buisness days</p>}

          </div>
          {navActions == 'topup' &&
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
            />          
             <p style={{color:"#a0550c", marginTop:"1rem"}}>
              The token you are generating is valid for single time use and will be valid for 24 hours
              </p>
            </div>
        
          <div >
         
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
            <CButton
            onClick={()=>navActions == 'withdraw' ? customerWithdrawFunc(): initiatePayment() }
            > {navActions == 'withdraw' ? "Withdraw Amount" : "Generate Token"}</CButton>
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
