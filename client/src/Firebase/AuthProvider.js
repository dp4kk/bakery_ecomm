import { createContext, useEffect, useState } from 'react'
import {auth} from './Firebase'
import'firebase/auth'
export const FirebaseContext=createContext()

export const AuthContext=({children})=>{
    //data
    
    
    //auth
        const [error,setError]=useState('')
        const[currentUser,setCurrentUser]=useState()

    const signup=(email,password)=>{
        return auth.createUserWithEmailAndPassword(email,password)
    }

    const login=(email,password)=>{
        return auth.signInWithEmailAndPassword(email,password)
    }

    const logout=()=>{
        return auth.signOut()
    }


    useEffect(()=>{
           const unsubscribe=auth.onAuthStateChanged(user=>{
               setCurrentUser(user)  
           })
           return unsubscribe
    },[])
      const  contexts={currentUser,signup,login,logout,error,setError}
    return(
        <FirebaseContext.Provider value={contexts}>
            {children}
        </FirebaseContext.Provider>
    )
}