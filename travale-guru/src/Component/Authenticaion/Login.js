import { FormGroup } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import "./Login.css"
import fb from '../../images/Icon/fb.png'
import google from '../../images/Icon/google.png'
import * as firebase from "firebase/app";
import { userContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import LoginHeader from '../LoginHeader/LoginHeader';

function Login() {
    const [showPlace,setshowPlace,loggedIn,setLoggedIn]=useContext(userContext)
    const [isSignedUp, setisSignedUp]=useState(false)
    const [user, setUser] = useState(
        {
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        confirmationPassword:'',
    });
    const location=useLocation().location?.pathname
    const history=useHistory()

    const facebookSignin =()=>{
        const provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then(res=>{
            const {displayName, email} = res.user;
            const signedInUser = {
                isSignedIn: true,
                name: displayName,
                email: email,
            }
            setUser(signedInUser);
            setLoggedIn(signedInUser)
            history.replace(location || '/')
        })
        .catch(err=>{
            console.log(err)
        })
    }

    const googleSignin=()=>{
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then(res=>{
            const {displayName, email} = res.user;
            const signedInUser = {
                isSignedIn: true,
                name: displayName,
                email: email,
            }
            setUser(signedInUser);
            setLoggedIn(signedInUser)
            history.replace(location || '/')
        })
        .catch(err=>{
            console.log(err)
        })
    }
    const handleBlur=(e)=>{
        let isFormValid;
        if(e.target.name==='email'){
          isFormValid=/\S+@\S+\.\S+/.test(e.target.value); 
        }
        if(e.target.name==='password'){
         const isPasswordValided=e.target.value>6;
        //  const isPassswordHasnumber=/\d{1}/.test(e.target.value); 
         isFormValid=(isPasswordValided );   
        }
     if(isFormValid){
       const newUser={...user};
        newUser[e.target.name]=e.target.value;
        setUser(newUser);
     }
      }
      const handleSubmit=(event)=>{
        if(user.email && user.password){
          firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
          .then(res=>{
            const newUser={...user};
             newUser.success=true;
            newUser.error ='';
            setUser(newUser);
            setLoggedIn(newUser)
            history.replace(location || '/')
          })
          .catch(error=> {
            // Handle Errors here.
            const newUser={...user};
            newUser.error = error.message;
            newUser.success=false;
            setUser(newUser);
          });
        }
    if(user.email && user.password){
        firebase.auth().signInWithEmailAndPassword(user.email,user.password)
        .then(res=>{
            const newUser={...user};
             newUser.success=true;
            newUser.error ='';
            setUser(newUser);
            setLoggedIn(newUser)
            history.replace(location)
        })
        .catch(error=>{
            const newUser={...user};
            newUser.error = error.message;
            newUser.success=false;
            setUser(newUser);
        })
    }
          event.preventDefault();
        }
    
    return (
        <div>
         <LoginHeader/>
            
            <form onSubmit={handleSubmit} className="form login-form">
                
                <FormGroup>
                {
                    isSignedUp? <h2 style={{textAlign:"left"}}>Login</h2>
                    : <h2 style={{textAlign:"left"}}>Create an account</h2>
                }
                    {
                        !isSignedUp && <>
                            <input 
                            onBlur={handleBlur}  name='firstname'type="text" placeholder="First name" required/>

                            <input 
                            onBlur={handleBlur} name='lastname'
                            type="text" placeholder="Last name" required/>
                        </> 
                    }
                    <input onBlur={handleBlur} name='email' type="email" placeholder="Email address" required/>

                    <input onBlur={handleBlur} name='password' type="password" placeholder="Password" required/>
                    {
                        !isSignedUp && <input
                        onBlur={handleBlur} name='password'
                         type="password" placeholder="Confirm Password" required/>
                    }
                    {
                        isSignedUp ? <input name="signin" type="submit" value="Signin"/>
                        : <input name="signup"  type="submit" value="Signup"/>
                    }
                </FormGroup>
                
                    {
                        isSignedUp ?<>
                        <span>Don't have an account? </span>
                        <span onClick={()=>setisSignedUp(false)} style={{color:"orange",cursor:"pointer"}}>Signup</span>
                    </>
                        
                        :<>
                        <span>Already have an account? </span>
                        <span onClick={()=>setisSignedUp(true)} style={{color:"orange",cursor:"pointer"}}>Login</span>
                        </>
                        
                    } 
            </form>
            <p style={{color:'red',textAlign:'center'}}>{user.error}</p>
           <div style={{width:"300px", margin:"auto"}}>
            <p style={{textAlign:"center"}}> Or</p>

                    <div onClick={facebookSignin} className="facebbokgoogle-section">
                        <img  src={fb} alt=""/>
                        <p>Continue with Facebook</p>
                    </div>

                    <div onClick={googleSignin} className="facebbokgoogle-section">
                        <img  src={google} alt=""/>
                        <p>Continue with Google</p>
                    </div>

                </div>
        </div>
    );
};


export default Login

