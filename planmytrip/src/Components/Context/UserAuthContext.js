import { createContext, useContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged,
signInWithPopup, GoogleAuthProvider
} from "firebase/auth"
import { auth } from "../../firebase";

const userAuthContext=createContext()

export function UserAuthContextProvider({children}){
    const [user,setUser]=useState("")
    const signUp=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn=()=>{
        const googleAuthProvider=new GoogleAuthProvider()
        return signInWithPopup(auth,googleAuthProvider)
    }
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
        })
        return ()=>{
            unsubscribe()
        } 
    },[])

    return <userAuthContext.Provider value={{ user,signUp,logIn,googleSignIn }}>{children}</userAuthContext.Provider>
}

export const useUserAuth=()=>{
    return useContext(userAuthContext)
}