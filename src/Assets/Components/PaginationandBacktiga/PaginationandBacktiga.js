import React from 'react'
import { Container } from 'react-bootstrap'
import './PaginationandBacktiga.css'
import back from "../../img/fi_arrow-left.png";
import dash from "../../img/Rectangle 36.png"

export const PaginationandBacktiga = () => {
    return (
        <div>
            <Container className='container-pagination-tiga'>
                <div className='container-kiri-pagination-tiga'>
                    <div>
                        <img alt='' src={back} />
                        <strong className='txt-pembayaran-tiga'>
                            Pembayaran
                        </strong>
                    </div>
                    <div className='orderId-tiga'>
                        Order ID: xxxxxxxx
                    </div>
                </div>

                <div className='container-kanan-pagination-tiga'>
                    <div className='container-content-kanan-pagination-tiga'>

                        <button className='btn-1-pagination-tiga'>1</button>
                        <text>Pilih Metode</text>
                        <img alt='' src={dash} className="img-dash-tiga" />

                        <button className='btn-2-pagination-tiga'>2</button>
                        <text>Bayar</text>
                        <img alt='' src={dash} className="img-dash-tiga" />

                        <button className='btn-3-pagination-tiga'>3</button>
                        <text>Tiket</text>
                    </div>
                </div>


            </Container>
        </div>
    )
}
