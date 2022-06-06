import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import './DetailPayment.css'

import user from '../../img/fi_users.png'
import setting from '../../img/fi_settings.png'
import calender from '../../img/fi_calendar.png'

export const DetailPayment = ({ namaMobil, passenger, transmission, year, harga, fungsiBayar }) => {
  return (
    <div className='container-detail-payment'>
      <Row>
        <Col md={7}>
          <Card className='card-detail-payment'>
            <div className='first-content-detail-payment'>
              <strong className='title-txt-detail-payment'>
                Pilih Bank Transfer
              </strong>

              <div className='paragraph-detail-payment'>
                Kamu bisa membayar dengan transfer melalui ATM, Internet Banking atau Mobile Banking
              </div>

              <div className='bank-1'>
                <button className='all-bank'>BCA</button>
                <div className='txt-detail-bank'>BCA Transfer</div>
              </div>
              <hr />

              <div className='bank-2'>
                <button className='all-bank'>BNI</button>
                <div className='txt-detail-bank'>BNI Transfer</div>
              </div>
              <hr />

              <div className='bank-3'>
                <button className='all-bank'>Mandiri</button>
                <div className='txt-detail-bank'>Mandiri Transfer</div>
              </div>
              <hr />

            </div>



          </Card>
        </Col>
        <Col md={5}>
          <Card style={{ width: '100%' }}>
            <Card.Body>
              <div className='title-car-detail-payment'>
                {namaMobil}
              </div>

              <div className='detail-spec-container-payment'>
                <div className='content-detail-1'>
                  <img alt='' src={user} />
                  <text className='txt-spec-detail-payment'>
                    {passenger}
                  </text>
                </div>

                <div className='content-detail-2'>
                  <img alt='' src={setting} />
                  <text className='txt-spec-detail-payment'>
                    {transmission}
                  </text>
                </div>

                <div className='content-detail-3'>
                  <img alt='' src={calender} />
                  <text className='txt-spec-detail-payment'>
                    {year}
                  </text>
                </div>
              </div>


              <div className='container-total-detail-payment'>
                <div className='total-txt-detail-payment'>
                  Total
                </div>

                <div className='car-detail-price-detail-payment'>
                  Rp {harga}
                </div>
              </div>

              <div className='txt-container-rincian-harga'>
                Harga

                <div className='container-rincian-harga'>
                  <ul className='txt-list'>
                    <li>
                      1 Mobil dengan sopir
                    </li>
                  </ul>
                  <div>
                    Rp. {harga}
                  </div>
                </div>

                Biaya Lainnya

                <div className='container-rincian-harga'>
                  <ul className='txt-list'>
                    <li>Pajak</li>
                  </ul>
                  <div className='txt-benefit'>
                    Termasuk
                  </div>
                </div>
                <div className='container-rincian-harga'>
                  <ul className='txt-list'>
                    <li>Biaya Makan Sopir</li>
                  </ul>
                  <div className='txt-benefit'>
                    Termasuk
                  </div>
                </div>

                Belum Termasuk
                <div className='container-rincian-harga'>
                  <ul className='txt-list'>
                    <li>bensin</li>
                    <li>Tol dan Parkir</li>
                  </ul>
                </div>

                <hr />
                <div className='container-total-detail-payment'>
                  <div className='total-txt-detail-payment'>
                    Total
                  </div>

                  <div className='car-detail-price-detail-payment'>
                    Rp {harga}
                  </div>
                </div>
              </div>
              <Button variant="primary" className='property-card-btn' onClick={fungsiBayar}>Bayar</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  )
}
