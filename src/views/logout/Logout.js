/* eslint-disable */

import React, { useEffect } from 'react'
import { useRouter } from "src/hooks/use-router";


const logout = () => {
    const router = useRouter();

    useEffect(()=>{
        localStorage.removeItem("tokenJson")
        router.push('/login')
    },[])
  return (
   <></>
  )
}

export default logout