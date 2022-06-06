import React, { useState } from 'react'
import './Register.css'
import gambar1 from '../../Assets/img/Rectangle 62.png'
import { useNavigate } from 'react-router-dom';
import GoogleButton from 'react-google-button';
import { auth } from '../../firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';



export const Register = () => {
    const navigate = useNavigate();
    var axios = require('axios');

    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    const authDefault = auth;
    const provider = new GoogleAuthProvider();

    const [alertStatus, setAlertStatus] = useState(false);


    const changeEmail = (e) => {
        setEmail(e.target.value);

    }

    const changePass = (e) => {
        setPass(e.target.value);

    }

    const handleRegister = () => {
        var data = JSON.stringify({
            "email": email,
            "password": pass,
            "role": "admin"
        });

        var config = {
            method: 'post',
            url: `${process.env.REACT_APP_BASE_URL}admin/auth/register`,
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                console.log(response.data);
                alert("Account Created Successfully!")
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    const handleToLogin = () => {
        navigate(`/`)

        // console.log(ToRegister, "ini adalah value")
    }

    const handleGoogleSign =() =>{
        signInWithPopup(authDefault, provider).then((data) =>{
            console.log(data, "ini data");
            console.log(data.user.accessToken);
            sessionStorage.setItem("Token Customer", data.user.accessToken);
            
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
                <h2 className='property-login Title'>Register New Account</h2>

                {alertStatus ? <div className='alert'>
                    Masukkan username dan password yang benar. Perhatikan penggunaan huruf kapital.
                </div> : null}

                <label className='property-login email-pass'>Email</label>
                <input type='email' placeholder='Contoh: johndee@gmail.com' className='input-field property-login' onChange={changeEmail} ></input>

                <label className='property-login email-pass'>Password</label>
                <input type='password' placeholder='6+ karakter' className='input-field property-login' onChange={changePass}></input>

                <button className='btn-login' onClick={handleRegister}>Sign Up</button>
                <GoogleButton className='google-btn' onClick={handleGoogleSign}/>

                <button className='btn-to-login' onClick={handleToLogin}>Already have account? Login Here!</button>
            </div>
        </div>
    )
}
