import React, { useEffect, useState } from 'react'
import { Button, Col, Container,  Nav, Navbar, Row } from 'react-bootstrap'

import Logo from '../../Assets/img/logo.png'
import facebook from '../../Assets/img/icon_facebook.png'
import instagram from '../../Assets/img/icon_instagram.png'
import mail from '../../Assets/img/icon_mail.png'
import twitter from '../../Assets/img/icon_twitter.png'
import twitch from '../../Assets/img/icon_twitch.png'
import { ContentHome } from '../../Assets/Components/ContentHome/ContentHome'
import { CardDefault } from '../../Assets/Components/Card/CardDefault'
import { Payment } from '../../Assets/Components/Payment/Payment'
import { getDataByID, getNewData } from '../../Redux/Action/GetAction'
import { useSelector, useDispatch } from 'react-redux'
import './HomePageCust.css'
import { DetailPayment } from '../../Assets/Components/DetailPayment/DetailPayment'
import { CardSearch } from '../../Assets/Components/CardSearch/CardSearch'
import { CardDetailPesanan } from '../../Assets/Components/CardDetailPesanan/CardDetailPesanan'
import { PaginationandBack } from '../../Assets/Components/PaginationandBack/PaginationandBack'
import { Bayar } from '../../Assets/Components/Bayar/Bayar'
import { PaginationandBackdua } from '../../Assets/Components/PaginationandBackdua/PaginationandBackdua'
import { PaymentSucess } from '../../Assets/Components/Pembayaran Berhasil/PaymentSucess'
import { PaginationandBacktiga } from '../../Assets/Components/PaginationandBacktiga/PaginationandBacktiga'
import { useNavigate } from 'react-router-dom'

const HomePageCust = () => {
    const dispatch = useDispatch();

    const [ParameterPindah, setParameterPindah] = useState(0);
    const [DriverStatus, setDriverStatus] = useState(null);
    const [dataMobilFilter, setdataMobilFilter] = useState(null);

    const [File, setFile] = useState([]);
    const [ParameterCard, setParameterCard] = useState(0);

    const { dataMobil } = useSelector((state) => state.getReducers);
    const { carDetail } = useSelector((state) => state.getReducers);

    const navigate = useNavigate();
    const [Token, setToken] = useState(sessionStorage.getItem("Token Customer"))
    useEffect(() => {
      if (!Token) {
          navigate(`/`)
      }
    
    }, [])

    // Coba Redux
    useEffect(() => {
        dispatch(getNewData());
    }, []);


    const handlePindah = () => {

        let filteredCar = dataMobil.filter((e) => {
            if (DriverStatus === "1") {
                return e.status === true;
                // console.log(e.status);
            } else if (DriverStatus === "2") {
                return e.status === false;
                // console.log("e.status");
            }
        })

        console.log(filteredCar);
        setdataMobilFilter(filteredCar);
        setParameterPindah(1);
    }

    const handlePindahBayar = () => {
        return <Payment id={carDetail.id}
            gambar={carDetail.image}
            nama={carDetail.name}
            harga={carDetail.price}
            passenger={carDetail.passenger}
            transmission={carDetail.transmission}
            year={carDetail.year}
            fungsiDetailPayment={() => { setParameterPindah(3); setParameterCard(1) }}
        // fungsiDetailPayment={console.log("setparameter pindah 3")}

        />
    }


    const handleMap = () => {
        return dataMobilFilter.map((value, index) => {
            return <CardDefault
                passenger={value.passenger}
                transmission={value.transmission}
                year={value.year} nama={value.name}
                harga={value.price} foto={value.image}
                kategori={value.category}
                fungsiPayment={() => { setParameterPindah(2); dispatch(getDataByID(value.id)) }} />
        })
    }

    const handleDetailPayment = () => {

        return <DetailPayment
            namaMobil={carDetail.name}
            gambar={carDetail.image}
            passenger={carDetail.passenger}
            transmission={carDetail.transmission}
            year={carDetail.year}
            harga={carDetail.price}
            fungsiBayar={() => { setParameterPindah(4); setParameterCard(2) }}
        />

    }

    const handleBayar = () => {
        return <Bayar
            harga={carDetail.price}
            handleBerhasil={() => { setParameterPindah(5) }}
            setFile={setFile}
        />
    }

    const handleSuccess = () => {
        return <PaymentSucess File={File} />
    }


    const handleCardDetail = () => {
        if (ParameterCard === 0) {
            return <CardSearch
                handlePindah={() => { handlePindah() }}
                statusDriver={DriverStatus}
                setStatusDriver={(e) => setDriverStatus(e.target.value)}
            />

        } else if (ParameterCard === 1) {
            return <CardDetailPesanan
                statusDriver={(e) => setDriverStatus(e.target.value)}
            />
        }
    }
    const fungsiDetail = () => {
        if (ParameterPindah === 1) {
            console.log("Parameter pindah = ", ParameterPindah);
            return handleMap();
        } else if (ParameterPindah === 2) {
            console.log("Parameter pindah = ", ParameterPindah);
            return handlePindahBayar();
        }
        else if (ParameterPindah === 3) {
            console.log("Parameter pindah = ", ParameterPindah);
            return handleDetailPayment();
        } else if (ParameterPindah === 4) {
            console.log("Parameter Pindah = ", ParameterPindah);
            return handleBayar();
        } else if (ParameterPindah === 5) {
            console.log("Parameter Pindah = ", ParameterPindah);
            return handleSuccess();
        }
    }

    const handleContentHome = () => {
        if (ParameterPindah === 0) {
            return <ContentHome />
        } else if (ParameterPindah === 3) {
            return <PaginationandBack />
        } else if (ParameterPindah === 4) {
            return <PaginationandBackdua />
        } else if (ParameterPindah === 5) {
            return <PaginationandBacktiga />
        }
    }




    return (
        <div className='main-container-cust'>
            <div className='navbar-container-cust'>
                <Navbar>
                    <Container>
                        <img alt='' src={Logo} />
                        <Nav className="me-auto btn-nav-cust">
                            <Nav.Link href="#home" className='property-nav-cust'>Our Services</Nav.Link>
                            <Nav.Link href="#link" className='property-nav-cust'>Why Us</Nav.Link>
                            <Nav.Link href="#link" className='property-nav-cust'>Testimonial</Nav.Link>
                            <Nav.Link href="#link" className='property-nav-cust'>FAQ</Nav.Link>
                            <Button variant="primary" className='btn-register-cust'>Register</Button>{' '}
                        </Nav>
                    </Container>
                </Navbar>
            </div>

            {/* content isi */}
            <Container fluid className='container-fluid-content-cust'>
                {handleContentHome()}
            </Container>


            {/* btn search */}
            <Container className='btn-search-cust'>
                {handleCardDetail()}
            </Container>



            <Container className='container-card-cust'>
                {fungsiDetail()}
            </Container>

            {/* Footer */}
            <Container className='container-footer-cust'>
                <Row>
                    <Col md={3}>
                        <Col md={12}>
                            <div className='txt-footer-1-cust'>
                                Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000
                            </div>
                            <div className='txt-footer-1-cust'>
                                binarcarrental@gmail.com
                            </div>
                            <div className='txt-footer-1-cust'>
                                081-233-334-808
                            </div>
                        </Col>
                    </Col>
                    <Col md={3}>
                        <Col md={12}>
                            <div className='txt-footer-2-cust'>
                                Our services
                            </div>
                            <div className='txt-footer-2-cust'>
                                Why Us
                            </div>
                            <div className='txt-footer-2-cust'>
                                Testimonial
                            </div>
                            <div className='txt-footer-2-cust'>
                                FAQ
                            </div>
                        </Col>
                    </Col>
                    <Col md={3}>
                        <Col md={12}>
                            <div className='txt-footer-1-cust'>
                                Connect with us
                            </div>

                            <div className='footer-icon-container-cust'>
                                <img alt='' src={facebook} className='footer-icon-cust' />
                                <img alt='' src={instagram} className='footer-icon-cust' />
                                <img alt='' src={mail} className='footer-icon-cust' />
                                <img alt='' src={twitter} className='footer-icon-cust' />
                                <img alt='' src={twitch} className='footer-icon-cust' />
                            </div>
                        </Col>
                    </Col>
                    <Col md={3}>
                        <div className='txt-footer-1-cust'>
                            Copyright Binar 2022
                        </div>

                        <div>
                            <img alt='' src={Logo} />
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default HomePageCust

