import React, { useState } from 'react'
import './Login.css'
import gambar1 from '../../Assets/img/Rectangle 62.png'
import { useNavigate } from 'react-router-dom';
import GoogleButton from 'react-google-button';
import { auth } from '../../firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';



export const Login = () => {
    const navigate = useNavigate();
    var axios = require('axios');
    
    const authDefault = auth;
    const provider = new GoogleAuthProvider();

    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [alertStatus, setAlertStatus] = useState(false);


    const changeEmail = (e) => {
        setEmail(e.target.value);

    }

    const changePass = (e) => {
        setPass(e.target.value);

    }


    // const login = () => {
    //     let validateEmail = /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/
    //     let validatePass = /([A-Z]{1}[a-z]{1,}[0-9]{1,})/


    //     if (validateEmail.test(email) && validatePass.test(pass)) {
    //         return Navigate('home');
    //     } else {
    //         return setAlertStatus(true);
    //     }
    // }

    const handleToRegister = () => {
        navigate(`/register`)
    }

    const handleLogin = () => {
        var data = JSON.stringify({
            "email": email,
            "password": pass
        });

        var config = {
            method: 'post',
            url: `${process.env.REACT_APP_BASE_URL}admin/auth/login`,
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                console.log(response.data);
                sessionStorage.setItem("Token", response.data.access_token);
                navigate('home')
            })
            .catch(function (error) {
                console.log(error);
            });


    }
    const handleGoogleSign =() =>{
        signInWithPopup(authDefault, provider).then((data) =>{
            console.log(data, "ini data");
            console.log(data.user.accessToken);
            sessionStorage.setItem("Token Customer", data.user.accessToken);
            navigate('homepage-customer')
        }).catch(function(error){
            console.log(error);
        })
    }


    return (
        <div className='container-login'>
            <div className='gambar-1'>
                {/* <img src={gambar1} alt='' className='gbr-1'/> */}
            </div>

            <div className='field-login'>
                <img src={gambar1} alt='' className='property-login' />
                <h2 className='property-login Title'>Welcome, Admin BCR</h2>

                {alertStatus ? <div className='alert'>
                    Masukkan username dan password yang benar. Perhatikan penggunaan huruf kapital.
                </div> : null}

                <label className='property-login email-pass'>Email</label>
                <input type='email' placeholder='Contoh: johndee@gmail.com' className='input-field property-login' onChange={changeEmail} ></input>

                <label className='property-login email-pass'>Password</label>
                <input type='password' placeholder='6+ karakter' className='input-field property-login' onChange={changePass}></input>

                <button className='btn-login' onClick={handleLogin}>Sign in</button>
                <GoogleButton className='google-btn'onClick={handleGoogleSign}/>

                <button className='btn-to-register' onClick={handleToRegister}>Don't have account? Register Here!</button>
            </div>
        </div>
    )
}
