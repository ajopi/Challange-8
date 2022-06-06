import React, { useEffect, useState } from 'react'
import logoKotak from '../../Assets/img/Rectangle 63.png'
import logoHome from '../../Assets/img/fi_home.png'
import logoTruck from '../../Assets/img/fi_truck.png'
import logoDashboard from '../../Assets/img/Rectangle 62.png'
import menu from '../../Assets/img/fi_menu.png'
import akun from '../../Assets/img/Group 15.png'
import chevron from '../../Assets/img/fi_chevron-down.png'
import chevronRright from '../../Assets/img/Vector.png'
import mobil from '../../Assets/img/image 1.png'
import key from '../../Assets/img/fi_key.png'
import watch from '../../Assets/img/fi_clock.png'

import { Button, Card, CardGroup, Container, Dropdown, DropdownButton, Form, FormControl, Nav, Navbar, Pagination, Table } from 'react-bootstrap'



import './Cars.css'
import { useNavigate } from 'react-router-dom'
import { CardCar } from '../../Assets/Components/Card/CardCar'

export const Cars = () => {
    const [DataMobil, setDataMobil] = useState()
    const navigate = useNavigate();

    const handleNewCar = () => {
        navigate("/new-cars")
    }

    const [Token, setToken] = useState(sessionStorage.getItem("Token"))
    useEffect(() => {
      if (!Token) {
          navigate(`/`)
      }
    
    }, [])


    const handleGet = () => {
        var axios = require('axios');

        var config = {
            method: 'get',
            url: `${process.env.REACT_APP_BASE_URL}admin/car`,
            headers: {}
        };

        axios(config)
            .then(function (response) {
                console.log(response.data);
                // console.log(response.data);
                setDataMobil(response.data)
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    useEffect(() => {
        handleGet();
    }, []);

    const handleMap = () =>{
        if (DataMobil) {
            return DataMobil.map((value, index) =>{
                return <CardCar nama={value.name} key={index} foto={value.image} price={value.price}/>
            })
        }
    }

    return (
        <div className='main-container-cars'>
            <div className='container-dashboard-cars'>
                <img alt='' src={logoKotak} className='logo-kotak-cars' />

                <div>
                    <a href='dashboard' className='tag-cars'> <i>
                        <img alt='' src={logoHome} className='logo-home-cars' />
                    </i>
                        Dashboard
                    </a>
                </div>

                <div>
                    <a href='cars' className='tag-cars'> <i>
                        <img alt='' src={logoTruck} className='logo-truck' />
                    </i>
                        Cars
                    </a>
                </div>


            </div>

            <div className='navbar-content-cars'>
                <div className='container-navbar-cars'>
                    <Navbar expand="lg" className='navbar-custom-cars'>
                        <Container fluid>
                            <Navbar.Toggle aria-controls="navbarScroll" />
                            <Navbar.Collapse id="navbarScroll">
                                <Nav
                                    className="me-auto my-2 my-lg-0"
                                    style={{ maxHeight: '100px' }}
                                    navbarScroll>
                                    <img alt='' src={logoDashboard} />
                                    <img alt='' src={menu} className='menu-hamburger-cars' />

                                </Nav>
                                <Form className="d-flex">
                                    <FormControl
                                        type="search"
                                        placeholder="Search"
                                        className="me-2"
                                        aria-label="Search"
                                    />
                                    <Button variant="primary" className='btn-search-cars'>Search</Button>
                                </Form>

                                <img alt='' src={akun} className='logo-akun-cars' />
                                <div className='akun-name-cars'>
                                    Unis Badri
                                </div>
                                <img alt='' src={chevron} />
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>

                <div className='container-content-cars'>
                    <div className='menu-cars'>
                        <div className='dashboard-up-cars'>
                            CARS
                        </div>

                        <div className='dashboard-low-cars'>
                            <div className='dashboard-low-title-cars'>
                                List Cars
                            </div>
                        </div>
                    </div>

                    <div className='container-table-cars'>
                        <div className='main-container-table-cars-cars'>

                            <div className='content-table-cars'>
                                <div className='dashboard-table-cars'>
                                    Cars
                                </div>

                                <div className='chevron-right-cars'>
                                    <img alt='' src={chevronRright} />
                                </div>

                                <div className='dashboard-table-2-cars'>
                                    List Cars
                                </div>

                            </div>

                            <div className='dashboard-3-cars-cars'>
                                List Cars
                                <div className='container-btn-new-car-cars'>
                                    <Button variant="primary" className='btn-new-car-cars' onClick={handleNewCar}>+ Add New Car</Button>{' '}
                                </div>

                            </div>

                            <div className='list-btn-cars'>
                                <Button variant="outline-primary" className='btn-group-cars'>All</Button>{' '}
                                <Button variant="outline-primary" className='btn-group-cars'>Small</Button>{' '}
                                <Button variant="outline-primary" className='btn-group-cars'>Medium</Button>{' '}
                                <Button variant="outline-primary" className='btn-group-cars'>Large</Button>{' '}
                            </div>


                            <div className='cards-group-cars'>
                                {handleMap()}
                            </div>

                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}
