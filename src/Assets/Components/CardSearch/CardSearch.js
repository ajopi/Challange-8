import React from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import './CardSearch.css'


export const CardSearch = ({handlePindah, statusDriver, setStatusDriver}) => {
    
    return (
        <div>
            <Card className='card-search-cust'>
                <div className='btn-search-container-cust'>
                    <div className='btn-search-1-cust'>
                        <div className='txt-btn-search-cust'>
                            Tipe Driver
                        </div>
                        <Form.Select size="sm" className='btn-search-property-cust' value={statusDriver} onChange={setStatusDriver} >
                            <option value="" disabled selected hidden>Pilih Tipe Driver</option>
                            <option value="1">Dengan Sopir</option>
                            <option value="2">Tanpa Sopir (Lepas Kunci)</option>
                        </Form.Select>
                    </div>


                    <div className='btn-search-2-cust'>
                        <div className='txt-btn-search'>
                            Tanggal
                        </div>
                        <input type={"date"} className='btn-search-property' />

                    </div>



                    <div className='btn-search-3-cust'>
                        <div className='txt-btn-search'>
                            Waktu Jemput/Ambil
                        </div>
                        <input type="time" placeholder='Pilih Waktu' className='btn-search-property' />
                    </div>

                    <div className='btn-search-4-cust'>
                        <div className='txt-btn-search'>
                            Jumlah Penumpang
                        </div>
                        <input type="number" placeholder='Jumlah Penumpang' min={1} className='btn-search-property' />
                    </div>

                    <Button variant="primary" className='btn-Mobil-cust' onClick={handlePindah}>Cari Mobil</Button>{' '}

                </div>
            </Card>
        </div>
    )
}
