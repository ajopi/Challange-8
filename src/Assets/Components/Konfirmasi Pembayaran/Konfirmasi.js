import React from 'react'
import { Button, Card, Container } from 'react-bootstrap'
import './Konfirmasi.css'


export const Konfirmasi = ({klikButton}) => {
    return (
        <div>
            <Card className='card-konfirmasi-bayar'>
                <Container className='container-content-konfirmasi'>
                    <div className='txt-konfirmasi'>Klik konfirmasi pembayaran untuk mempercepat proses pengecekan</div>

                    <Button variant="primary" className='property-card-btn' onClick={klikButton}>Konfirmasi Pembayaran</Button>

                </Container>
            </Card>
        </div>
    )
}
