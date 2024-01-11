/* eslint-disable */
import React, { useEffect } from 'react'
import useAxios from './network/useAxios';
import { updateUserDetails, userDetails } from './redux/reducers/userDetails.reducer';
import { useRouter } from './hooks/use-router'
import { useDispatch, useSelector } from 'react-redux'
import { tokenAuth } from './urls/urls';

const LoginCheck = () => {

const profile = useSelector(userDetails);

const [response, loading, error, fetch] = useAxios();
const router = useRouter();
const dispatch = useDispatch();
useEffect(()=>{
  if(!(profile?.email && profile?.role)){
    var token = localStorage.getItem('tokenJson');
    if(token){
      fetch(tokenAuth({ "jsonToken": token }));
    }
    else{
      router.push('/login');
    }
  }
},[])
useEffect(()=>{

  if(response?.result == "success" && response?.loggined_user){
    dispatch(updateUserDetails(response?.loggined_user));
    localStorage.setItem('tokenJson', response?.token);
    if(response?.loggined_user?.role == "admin"){
      router.push('/admin-dashboard');
    }
    else if (response?.loggined_user?.role == "customer"){
    router.push('/dashboard');
    }
  }
  else if(response?.result == "failure"){
    router.push('/login');
  }
},[response])
  return (
    <div>loginCheck</div>
  )
}

export default LoginCheck