import React from 'react'
import { Container } from 'react-bootstrap'
import back from "../../img/fi_arrow-left.png";
import dash from "../../img/Rectangle 36.png"

import "./PaginationandBackdua.css"

export const PaginationandBackdua = () => {
    return (
        <div>
            <Container className='container-pagination-dua'>
                <div className='container-kiri-pagination-dua'>
                    <div>
                        <img alt='' src={back} />
                        <strong className='txt-pembayaran-dua'>
                            Pembayaran
                        </strong>
                    </div>
                    <div className='orderId'>
                        Order ID: xxxxxxxx
                    </div>
                </div>

                <div className='container-kanan-pagination-dua'>
                    <div className='container-content-kanan-pagination-dua'>

                        <button className='btn-1-pagination-dua'>1</button>
                        <text>Pilih Metode</text>
                        <img alt='' src={dash} className="img-dash-dua" />

                        <button className='btn-2-pagination-dua'>2</button>
                        <text>Bayar</text>
                        <img alt='' src={dash} className="img-dash-dua" />

                        <button className='btn-3-pagination-dua'>3</button>
                        <text>Tiket</text>
                    </div>
                </div>


            </Container>
        </div>
    )
}
