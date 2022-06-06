import React from 'react'
import { Button, Card } from 'react-bootstrap'
import user from '../../img/fi_users.png'
import setting from '../../img/fi_settings.png'
import calender from '../../img/fi_calendar.png'

import './CardDefault.css'

export const CardDefault = ({ nama, harga, foto, fungsiPayment, passenger, transmission, year }) => {
  

  return (
    <div>
      <Card style={{ width: '18rem' }} className='card-default'>
        <div className='foto-mobil'>
          <Card.Img variant="top" src={foto} />
        </div>

        <Card.Body>
          <div className='namaMobil'>
            {nama}
          </div>

          <div className='hargaMobil'>
            Rp. {harga} / Hari
          </div>
          {/* <Card.Title>Card Title</Card.Title> */}
          <div className='txt-mobil'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>

          <div className='property-card'>
            <div className='property-card-user'>
              <img alt='' src={user} className='property-card-img' />
              <div className='property-card-txt'>
                {passenger}
              </div>
            </div>
            <div className='property-card-user'>
              <img alt='' src={setting} className='property-card-img' />
              <div className='property-card-txt'>
                {transmission}
              </div>
            </div>
            <div className='property-card-user'>
              <img alt='' src={calender} className='property-card-img' />
              <div className='property-card-txt'>
                {year}
              </div>
            </div>

          </div>

          <Button variant="primary" className='property-card-btn' onClick={fungsiPayment}>Pilih Mobil</Button>
        </Card.Body>
      </Card>
    </div>
  )
}
