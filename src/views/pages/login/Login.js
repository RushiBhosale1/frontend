/* eslint-disable */

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// import { checkUserAsync, selectError, selectLoggedInUser } from "../authSlice";

import { Link, Navigate, useParams } from "react-router-dom";
import "../../../style/styles1.css"
import img1 from "../../pages/assets/img/hand_iphone.png"
import useAxios from "src/network/useAxios";
import { Alert, Modal } from "antd";
import { useRouter } from "src/hooks/use-router";
import { loginUserAdmin, tokenAuth } from "src/urls/urls";
import { updateUserDetails } from "src/redux/reducers/userDetails.reducer";

// window.location.reload();

export default function Login() {
  const { sign } = useParams();

  const [fileResponse, error, loading, fetch, setError] = useAxios()
  const [responseToken, loadingToken, errorToken, fetchToken] = useAxios();
  const dispatch = useDispatch();
  useEffect(()=>{
    var token = localStorage.getItem('tokenJson');
    if(token){
      fetchToken(tokenAuth({ "jsonToken": token }));
    }
  
},[])
useEffect(()=>{
  if(sign){
    handleOpenModal()
  }
},[sign])
useEffect(()=>{
  if(responseToken?.result == "success" && responseToken?.loggined_user){
    console.log("dsds",responseToken?.loggined_user?.role)
    dispatch(updateUserDetails(responseToken?.loggined_user));
    localStorage.setItem('tokenJson', responseToken?.token);
    if(responseToken?.loggined_user?.role == "customer"){
      router.push('/dashboard');
    }
    else if(responseToken?.loggined_user?.role == "admin"){
      router.push('/admin-dashboard');
    }
  }
},[responseToken])
const [formDetails, setFormDetails] = useState({
  "email":"",
  "password":""
}
)
const router = useRouter();
const [message, setMessage] = useState({
  showMessage: false,
  isError:"",
  message:""
});

const handleClick = () => {
  console.log(formDetails)
  fetch(loginUserAdmin(formDetails))
};
useEffect(()=>{
  if(fileResponse?.result == "success"){
    if(fileResponse?.data == true){
      console.log(fileResponse?.loginUser);
        dispatch(updateUserDetails(fileResponse?.loginUser));
        localStorage.setItem('tokenJson', fileResponse?.token);
        if(fileResponse?.loginUser?.role == "customer"){
          router.push('/dashboard');

        }
        else{
          router.push('/admin-dashboard');

        }

    }
    else{
      setMessage((prev)=>({...prev, message:"Invalid Login Credentials", isError:true, showMessage:true}));
    }
  }
},[fileResponse])
const [modalVisible, setModalVisible] = useState(false);
const handleOpenModal = () => {
  setModalVisible(true);
};

const handleCloseModal = () => {
  setModalVisible(false);
};

  return (
    <>
          <Modal
        title="SUCCESS"
        style={{marginTop:"10rem"}}
        visible={modalVisible}
        onCancel={handleCloseModal}
        footer={null} // No footer
        width={800} // Adjust width as needed
      >
        You have <span style={{color:"green"}}>Successfully</span> signup to our portable, Please login in to use Accordingly
      </Modal>
      <div style={{ display: "flex", width: "100%", height: "100vh" }}>
        <div style={{ display: "flex", width: "50%", height: "100vh" }}>
          <img src={img1} style={{paddingLeft:"2rem"}}/>
        </div>
        <div
          className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "50%",
            height: "100vh",
          }}
        >
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form
              noValidate
              className="space-y-6"
              onSubmit=""
            >
              <ul className="nav nav-tabs tab-mod" id role="tablist">
                <li className="nav-item">
                  <a className="nav-link active">
                    <Link
                      to="/login"
                      style={{textDecoration:"none"}}
                      className="font-semibold cursor-pointer text-indigo-600 hover:text-indigo-500"
                    >
                      Login
                    </Link>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">
                    <Link
                      to="/signup"
                      style={{textDecoration:"none"}}

                      className="font-semibold cursor-pointer text-indigo-600 hover:text-indigo-500"
                    >
                      Signup
                    </Link>
                  </a>
                </li>
              </ul>
              <div className="d-flex flex-column" style={{ gap: "10px" }}>
              {message.showMessage && <Alert message={message?.message} closable type={message?.isError?"error":"success"} onClose={()=>setMessage((prev)=>({...prev, message:"", isError:false, showMessage:false}))
} />}
                <div className="form-group">
                  <input
                  onChange={(e)=>setFormDetails((prev)=>({...prev,email:e.target.value}))}
                    type="email"
                    name="useremail"
                    className="form-control"
                    placeholder="E-mail address"
                    autofocus
                    required="required"
                    data-parsley-required-message="E-mail address is required"
                    data-parsley-type="email"
                    data-parsley-type-message="Please enter valid e-mail address"
                    autoComplete="off"
                  />
                </div>
                <div className="form-group eye_icon_spacer">
                  <input
                    onChange={(e)=>setFormDetails((prev)=>({...prev,password:e.target.value}))}
                    type="password"
                    name="userpassword"
                    id="login_password"
                    className="form-control"
                    placeholder="Password"
                    required="required"
                    data-parsley-required-message="Password is required"
                    autoComplete="off"
                  />
                  <span
                    toggle="#login_password"
                    className="eye_icon toggle-password fas fa-eye-slash"
                  />
                </div>
                {/* Add captch with canvas */}
                <div className="captcha_main_div" style={{ display: "none" }}>
                  <div className="CaptchaWrap d-flex">
                    <div id="CaptchaImageCode" className="CaptchaTxtField">
                      <canvas
                        id="CapCode"
                        className="capcode"
                        width={200}
                        height={50}
                      />
                    </div>
                    <img
                      className="ReloadBtn createCaptcha"
                      src="assets/img/reload-icon.png"
                    />
                  </div>
                  <input
                    type="text"
                    name="captcha"
                    id="UserCaptchaCode"
                    placeholder="Enter captcha"
                    className="form-control UserCaptchaCode mt-3 mb-2"
                    maxLength={6}
                    spellCheck="false"
                  />
                  <span id="WrongCaptchaError" className="error" />
                </div>
                <div className="form-check custom-control custom-checkbox">
             
                 
                
                </div>
              </div>

              <div>
              <input type="button" 
              onClick={handleClick}
              name="register_signup" defaultValue="Login" className="btn btn-primary btn-block" id="register_signup" 
              style={{marginTop:"-1rem"}}
              />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
