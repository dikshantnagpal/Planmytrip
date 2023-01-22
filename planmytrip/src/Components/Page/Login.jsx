import React from "react";
import { useState } from "react";
import { Input } from "@chakra-ui/react";
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Link, useNavigate } from "react-router-dom";
import GoogleButton from "react-google-button";
import { useUserAuth } from "../Context/UserAuthContext";
import {
    Alert,
    AlertDescription,
    AlertIcon,
    AlertTitle,
} from "@chakra-ui/react";
// import { useUserAuth } from "../Context/UserAuthContext";

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { logIn,googleSignIn } = useUserAuth()
    const [err, setErr] = useState("")
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault()
        setErr("")
        try {
            await logIn(email, password)
            navigate("/")
        } catch (err) {
            setErr(err.message)
        }

    }
    const handleGoogleSignIn=async(e)=>{
        e.preventDefault()
        try{
            await googleSignIn()
            navigate("/")
        }catch(err){
            setErr(err.message)
        }
    }

    return (
        <div >
            <div style={{rounded:"10px", justifyContent: "center", width: "30%", margin: "auto", alignItems: "center", marginTop: "150px", backgroundColor: "#e2e8f0", boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px",height:"max-content"}}>
                <h2 style={{fontWeight:"normal"}}>Login</h2>
               <h5 style={{marginLeft:"70px",color:"red"}}> {err && <Alert variant='danger'>{err}</Alert>}</h5>
                <div >
                    <Input marginBottom={5} paddingLeft={10} width={300} height={30} rounded={5} style={{ border: "1px solid gray" }} type="text" name="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value) }/>
                    <div>

                        <Input paddingLeft={10} width={300} height={30} rounded={5} style={{ border: "1px solid gray" }} type="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    
                   <button onClick={handleSubmit} style={{marginLeft:"-240px",height:"30px",width:"70px",marginTop:"10px",cursor:"pointer"}}>Sign in</button>
                    
                    <p>OR</p>
                </div>
                <div style={{marginLeft:"40px"}}>
                    <GoogleButton onClick={handleGoogleSignIn}></GoogleButton>
                </div>
                <div>
                    <p>Don't Have An Account</p>
                    <Link to="/signup"><button style={{marginLeft:"-160px",height:"30px",width:"150px",backgroundColor:"blue",color:"white",border:"none",cursor:"pointer",marginBottom:"30px"}}>Sign up New Account</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
