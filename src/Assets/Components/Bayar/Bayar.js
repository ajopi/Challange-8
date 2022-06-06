import React, { useState } from 'react'
import {  Card, Col, Container, Row } from 'react-bootstrap'
import { Konfirmasi } from '../Konfirmasi Pembayaran/Konfirmasi'
import { UploadBukti } from '../Upload/UploadBukti'
import './Bayar.css'


export const Bayar = ({ harga, handleBerhasil, setFile }) => {
    const [ParameterKonfirmasi, setParameterKonfirmasi] = useState(0)

    const handleKonfirmasi = () => {
        if (ParameterKonfirmasi === 0) {
            console.log("Parameter KOnfirmmasi = ", ParameterKonfirmasi);
            return <Konfirmasi klikButton={() => { setParameterKonfirmasi(1) }} />
        } else if (ParameterKonfirmasi === 1) {
            console.log("Parameter KOnfirmmasi = ", ParameterKonfirmasi);
            return <UploadBukti
                handleBerhasil={handleBerhasil}
                setFile={setFile}
            />
        }
    }

    return (
        <div className='container-bayar'>
            <Row>
                <Col md={7}>
                    <Card className='card-bayar-1'>
                        <Container className='container-content-bayar'>
                            <Row>
                                <Col md={8}>
                                    <strong className='txt-bayar'>
                                        Selesaikan Pembayaran Sebelum
                                    </strong>
                                    <div className='tanggal-bayar'>
                                        Rabu, 19 Jun 2022 jam 13.00 WIB
                                    </div>
                                </Col>

                                <Col md={4}>
                                    <div className='container-jam-bayar'>

                                        <div className='hour-bayar'>
                                            <p>23</p>
                                        </div>
                                        <div className='titik-dua'>:</div>
                                        <div className='hour-bayar'>
                                            <p>59</p>
                                        </div>
                                        <div className='titik-dua'>:</div>
                                        <div className='hour-bayar'>
                                            <p>09</p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </Card>

                    <Card className='card-bayar-2'>
                        <Container className='container-content-bayar-2'>
                            <strong className='txt-bayar'>
                                Lakukan Transfer Ke:
                            </strong>

                            <div className='container-nama-bank'>
                                <button className='nama-bank-spesifik'>
                                    BCA
                                </button>

                                <div className='container-nama-transfer'>
                                    <div className='detail-txt-transfer'>
                                        BCA Transfer
                                    </div>
                                    <div className='detail-txt-transfer'>
                                        A.n Binar Car Rental
                                    </div>
                                </div>
                            </div>

                            <div className='container-input-detail-bayar'>
                                <div className='nomor-rekening'>
                                    Nomor Rekening
                                </div>
                                <input type={"text"} placeholder={"xxxx-xxxx-xxxx"} />
                            </div>

                            <div className='container-input-detail-bayar'>
                                <div className='nomor-rekening'>
                                    Total Bayar
                                </div>
                                <input type={"text"} placeholder={harga} disabled={true} />
                            </div>
                        </Container>
                    </Card>

                    <Card className='card-bayar-3'>
                        <Container className='container-content-bayar-3'>
                            <strong className='txt-bayar'>
                                Instruksi Pembayaran
                            </strong>

                            <div className='kumpulan-instruksi'>
                                <div className='atm-bca'>
                                    ATM BCA
                                </div>
                                <div className='m-bca'>
                                    M-BCA
                                </div>
                                <div className='bca-klik'>
                                    BCA Klik
                                </div>
                                <div className='internet-banking'>
                                    Internet Banking
                                </div>
                            </div>

                            <hr />
                            <div className='list-instruksi'>
                                <ul>
                                    <li>Tidak termasuk biaya makan sopir Rp 75.000</li>
                                    <li>hari Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                                    <li>idak termasuk akomodasi penginapan Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                    <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                                    <li>idak termasuk akomodasi penginapan</li>
                                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                    <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam </li>
                                    <li>Tidak termasuk akomodasi penginapan</li>
                                </ul>
                            </div>
                        </Container>
                    </Card>
                </Col>

                <Col md={5}>
                    {handleKonfirmasi()}
                </Col>
            </Row>
        </div>
    )
}
