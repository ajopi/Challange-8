import React from 'react'
import {  Card } from 'react-bootstrap'
import './CardDetailPesanan.css'
export const CardDetailPesanan = (statusDriver) => {

    return (
        <div>
            
            <Card className='card-search-pesanan'>
                <div className='btn-search-container-pesanan'>

                    <div className='btn-search-1-pesanan'>
                        <div className='txt-btn-search-pesanan'>
                            Detail Pesananmu
                        </div>
                        <div className='txt-tipe-driver'>
                            Tipe Driver
                        </div>
                        <div className='txt-detail'>
                            Dengan Sopir
                        </div>
                    </div>


                    <div className='btn-search-2-pesanan'>
                        <div className='txt-tipe'>
                            Tanggal
                        </div>
                        <div className='txt-detail'>
                            27 Mar 2022
                        </div>

                    </div>



                    <div className='btn-search-3-pesanan'>
                        <div className='txt-tipe'>
                            Waktu Jemput/Ambil
                        </div>
                        <div className='txt-detail'>
                            10.00 WIB
                        </div>
                    </div>

                    <div className='btn-search-4-pesanan'>
                        <div className='txt-tipe'>
                            Jumlah Penumpang (Opsional)
                        </div>
                        <div className='txt-detail'>
                            -
                        </div>
                    </div>


                </div>
            </Card>
        </div>
    )
}
