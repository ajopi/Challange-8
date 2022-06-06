import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import './Home.css'
import { Hompage } from './Hompage'


export const Home = () => {
    const navigate = useNavigate();
    const [Token, setToken] = useState(sessionStorage.getItem("Token"))
    useEffect(() => {
      if (!Token) {
          navigate(`/`)
      }
    
    }, [])
    return (
        <div>
            <Hompage/>
        </div>
    )
}
