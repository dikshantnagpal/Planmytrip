import React, { useState } from 'react'
import { Input } from "@chakra-ui/react";
import { Link, useNavigate } from 'react-router-dom';
import { useUserAuth } from '../Context/UserAuthContext';
import { Alert } from 'react-bootstrap';
export const SignUp = () => {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const {signUp}=useUserAuth()
    const [err,setErr]=useState("")
    const navigate=useNavigate()
  const handleSubmit=async (e)=>{
    e.preventDefault()
    setErr("")
    try{
        await signUp(email,password)
        navigate("/login")
    }catch(err){
        setErr(err.message)
    }

  }
    return (
      <div >
          <div style={{ rounded: "10px", justifyContent: "center", width: "30%", margin: "auto", alignItems: "center", marginTop: "150px", backgroundColor: "#e2e8f0", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", height: "380px" }}>
              <h2 style={{ fontWeight: "normal" }}>Sign Up</h2>
              {err && <Alert variant='danger'>{err}</Alert>}
              <div >
                  <Input marginBottom={5}  paddingLeft={10} width={300} height={30} rounded={5} style={{ border: "1px solid gray" }} type="text" name="email" placeholder="Full Name" />
                  <div>

                      <Input paddingLeft={10} marginBottom={5} width={300} height={30} rounded={5} style={{ border: "1px solid gray" }} type="email" name="password" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                  </div>
                  <div>

                        <Input paddingLeft={10} marginBottom={5} width={300} height={30} rounded={5} style={{ border: "1px solid gray" }} type="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                  </div><div>

                      <Input paddingLeft={10} width={300} height={30} rounded={5} style={{ border: "1px solid gray" }} type="password" name="password" placeholder="Repeat Password" />
                  </div>
                  <button onClick={handleSubmit} style={{ marginLeft: "-240px", height: "30px", width: "70px", marginTop: "10px", cursor: "pointer" }}>Sign Up</button>
                  <div style={{marginTop:"50px"}}>
                    <p>Already have an Account</p>
                    <Link to="/login">Login</Link>
                  </div>

                  
              </div>
              
          </div>
      </div>
  )
}
