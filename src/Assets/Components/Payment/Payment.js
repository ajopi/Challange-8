import React, { useState } from 'react'
import { Accordion, Button, Card, Col, ListGroup, Row } from 'react-bootstrap'
import './Payment.css'

import user from '../../img/fi_users.png'
import setting from '../../img/fi_settings.png'
import calender from '../../img/fi_calendar.png'
import ModalImage from "react-modal-image";


export const Payment = ({ id, gambar, nama, harga, passenger, transmission, year, fungsiDetailPayment }) => {
  

  return (
    <div className='container-detail-car'>
      <Row className='row-container'>
        <Col md={8}>
          <div>
            <Card className='card-content'>
              <div className='first-content'>
                <strong className='title-txt'>
                  Tentang Paket
                </strong>

                <div className='include-exclude-txt'>
                  Include
                </div>

                <ListGroup>
                  <ListGroup.Item className='list-txt'>Durasi Max 12 jam</ListGroup.Item>
                  <ListGroup.Item className='list-txt'>Sudah termasuk bensin selama 12 jam</ListGroup.Item>
                  <ListGroup.Item className='list-txt'>Sudah termasuk tiket wisata</ListGroup.Item>
                  <ListGroup.Item className='list-txt'>Sudah termasuk pajak</ListGroup.Item>
                </ListGroup>

                <div className='include-exclude-txt'>
                  Exclude
                </div>

                <ListGroup>
                  <ListGroup.Item className='list-txt'>Tidak termasuk biaya maka sopir Rp. 75.000/hari</ListGroup.Item>
                  <ListGroup.Item className='list-txt'>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp. 20.000/jam</ListGroup.Item>
                  <ListGroup.Item className='list-txt'>Tidak termasuk akomodasi penginapan</ListGroup.Item>
                </ListGroup>
              </div>

              <div className='second-content'>
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header className='title-accordion'>Refund, Reschedule, Overtime</Accordion.Header>
                    <Accordion.Body>
                      <ListGroup>
                        <ListGroup.Item className='list-txt'>Tidak termasuk biaya maka sopir Rp. 75.000/hari</ListGroup.Item>
                        <ListGroup.Item className='list-txt'>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp. 20.000/jam</ListGroup.Item>
                        <ListGroup.Item className='list-txt'>Tidak termasuk akomodasi penginapan</ListGroup.Item>
                        <ListGroup.Item className='list-txt'>Tidak termasuk biaya maka sopir Rp. 75.000/hari</ListGroup.Item>
                        <ListGroup.Item className='list-txt'>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp. 20.000/jam</ListGroup.Item>
                        <ListGroup.Item className='list-txt'>Tidak termasuk akomodasi penginapan</ListGroup.Item>
                        <ListGroup.Item className='list-txt'>Tidak termasuk biaya maka sopir Rp. 75.000/hari</ListGroup.Item>
                        <ListGroup.Item className='list-txt'>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp. 20.000/jam</ListGroup.Item>
                        <ListGroup.Item className='list-txt'>Tidak termasuk akomodasi penginapan</ListGroup.Item>
                      </ListGroup>
                    </Accordion.Body>
                  </Accordion.Item>

                </Accordion>
              </div>

              <Button variant="primary" className='property-card-btn' onClick={fungsiDetailPayment}>Lanjutkan Pembayaran</Button>


            </Card>
          </div>
        </Col>

        <Col md={4}>
          <Card style={{ width: '100%' }}>
            {/* <img alt='' src={gambar} /> */}
            <ModalImage
              className="modal-image-mobil"
              small={gambar}
              large={gambar}
              showRotate={true}
            />

            <Card.Body>
              <div className='title-car-detail'>
                {nama}
              </div>

              <div className='detail-spec-container'>
                <div className='content-detail-1'>
                  <img alt='' src={user} />
                  <text className='txt-spec'>
                    {passenger}
                  </text>
                </div>

                <div className='content-detail-2'>
                  <img alt='' src={setting} />
                  <text className='txt-spec'>
                    {transmission}
                  </text>
                </div>

                <div className='content-detail-3'>
                  <img alt='' src={calender} />
                  <text className='txt-spec'>
                    {year}
                  </text>
                </div>




              </div>

              <div className='container-total'>
                <div className='total-txt'>
                  Total
                </div>

                <div className='car-detail-price'>
                  Rp {harga}
                </div>
              </div>
              <Button variant="primary" className='property-card-btn' onClick={fungsiDetailPayment}>Lanjutkan Pembayaran</Button>
            </Card.Body>
          </Card>

          
        </Col>
      </Row>




    </div>
  )
}
