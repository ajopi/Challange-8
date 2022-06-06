import React from 'react'
import { Card, Container } from 'react-bootstrap'
import './PaymentSucess.css'
import success from '../../img/success.png'
import { Viewer, Worker } from '@react-pdf-viewer/core'

export const PaymentSucess = ({File}) => {
    return (
        <div className='container-success'>
            <div className='container-atas'>
                <img alt='' src={success} />
                <strong className='txt-berhasil-payment-success'>
                    Pembayaran Berhasil!
                </strong>
                <div className='txt-tunjukkan'>
                    Tunjukkan invoice ini ke petugas BCR di titik temu.
                </div>
            </div>

            <div className='container-bawah'>
                <Card className='card-payment-success'>
                    <div className='container-content-payment-success'>
                        <div className='container-kiri-txt'>
                            <strong className='txt-invoice'>
                                Invoice
                            </strong>
                            <div className='no-invoice'>
                                *no invoice
                            </div>
                        </div>
                        <div className='container-kanan-txt'>
                            <button className='btn-download-success'>Download</button>
                        </div>

                    </div>
                    <hr />

                    <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.13.216/build/pdf.worker.min.js">
                        <Viewer fileUrl={File}/>
                    </Worker>

                </Card>
            </div>
        </div>
    )
}
