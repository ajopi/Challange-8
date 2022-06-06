import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Routers } from '../Routes/Routers'


export const Layout = () => {
    return (
        <div>
            <BrowserRouter>
                <Routers />
            </BrowserRouter>
        </div>
    )
}
