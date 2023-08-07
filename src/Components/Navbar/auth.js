import { useEffect, useState } from "react";
import {googleProvider, auth} from "../../../utils/firebase"
import { signInWithPopup } from "firebase/auth";

export const Auth = () => { 
    const [name, setName]=useState();
    const [email, setEmail]=useState();
    const [photo, setPhoto]=useState();
    
    const signInWithGoogle = async () => {
      try {
      await signInWithPopup(auth,googleProvider);
      } catch (err){
        console.error(err);
      }
    };

    const getUser=()=>{
      auth.onAuthStateChanged((user)=>{
        if(user){
          console.log(user);
          setName(user?.displayName)
          setEmail(user?.email)
          setPhoto(user?.photoURL)
        }
        else{
          setEmail(null)
          setName(null)
          setPhoto(null)
        }
      })
    }
    
    useEffect(()=>{
      getUser();
    },[auth])

    return (

      <div>
        {email ? 
        <div className="md:p-2 md:bg-green-150 md:rounded-md">
          <div className="capitalize flex flex-row ">
            <img src={photo} className="w-6 h-6 rounded-xl mt-[1px]"/>
            <div className="ml-2">{name}</div>
          </div>
        </div> 
          : 
        <div onClick={signInWithGoogle} className="md:hover:text-green-150" >
          Login
        </div>
      }
      </div>
      
    );
  };

