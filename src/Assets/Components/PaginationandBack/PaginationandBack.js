import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import './PaginationandBack.css'
import back from "../../img/fi_arrow-left.png";
import dash from "../../img/Rectangle 36.png"

export const PaginationandBack = () => {
    return (
        <div>
            <Container className='container-pagination'>
                <div className='container-kiri-pagination'>
                    <img alt='' src={back} />
                    <strong className='txt-pembayaran'>
                        Pembayaran
                    </strong>
                </div>

                <div className='container-kanan-pagination'>
                    <div className='container-content-kanan-pagination'>

                        <button className='btn-1-pagination'>1</button>
                        <text>Pilih Metode</text>
                        <img alt='' src={dash} className="img-dash"/>

                        <button className='btn-2-pagination'>2</button>
                        <text>Bayar</text>
                        <img alt='' src={dash} className="img-dash"/>

                        <button className='btn-2-pagination'>3</button>
                        <text>Tiket</text>
                    </div>
                </div>


            </Container>
        </div>
    )
}
