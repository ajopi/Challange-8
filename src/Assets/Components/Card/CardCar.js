import React from 'react'
import { Button, Card } from 'react-bootstrap'
import mobil from '../../img/image 1.png'
import key from '../../img/fi_key.png'
import watch from '../../img/fi_clock.png'
import  './CardCar.css'

export const CardCar = ({nama, foto, price}) => {
  return (
    <div>
      <Card style={{ width: '21.9375rem' }} className='card-mobil'>
        <Card.Img variant="top" src={mobil} className='img-mobil' />
        <Card.Body>
          <div className='tipe-mobil'>
            {nama}
          </div>
          {/* <Card.Title>Card Title</Card.Title> */}
          <div className='harga'>
            Rp. {price}
          </div>

          <div className='property-car'>
            <img alt='' src={key} />
            <div className='property-car-txt'>
              Start rent - Finish rent
            </div>
          </div>

          <div className='property-car-2'>
            <img alt='' src={watch} />
            <div className='property-car-txt'>
              Start rent - Finish rent
            </div>
          </div>

           <div className='btn-card'>
            <Button variant="outline-danger" className='btn-delete'>Delete</Button>{' '}
            <Button variant="outline-success" className='btn-edit'>Edit</Button>{' '}
          </div> 

        </Card.Body>
      </Card>
    </div>
  )
}
