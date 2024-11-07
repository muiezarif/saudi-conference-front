import React from 'react';
import {Container, Row, Col, Card, CardBody} from 'reactstrap';
import { FaCalendarAlt, FaClock ,FaUserFriends} from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

const Calendar = () => {
    const workshops = [
        { title: 'عنوان الورشة 1', date: '2024/12/23', time: '9 - 10 صباحًا' },
        { title: 'عنوان الورشة 2', date: '2024/12/23', time: '11 - 12 صباحًا' },
        { title: 'عنوان الورشة 3', date: '2024/12/23', time: '1 - 2 صباحًا' },
    ];
    const workshops2 = [
        { title: 'عنوان الجلسة 1', date: '2024/12/23', time: '9 - 10 صباحًا'},
        { title: 'عنوان الجلسة 2', date: '2024/12/23', time: '11 - 12 صباحًا' },
        { title: 'عنوان الجلسة 3', date: '2024/12/23', time: '1 - 2 صباحًا' },
    ];
    const style = {
        card:{
            height: '250px',
            width: 'auto',
            border: 'none',
            backgroundColor: 'transparent',
            display: 'flex',
            alignItems: 'center',
            textAlign:'right',
            justifyContent: 'center',
            marginTop:'35px'
        }
    }
    return (
        <Container className="my-5">
            <Row>
                <Col className="text-center">
                    <h2 style={{color: '#0b1a8a', textAlign: 'right', fontWeight: 'bold'}}> ﺓﺪﻨﺟﻷﺍ</h2>
                </Col>
            </Row>

            <Row className="mt-4">
                <Col md="11">
                    <Row style={{ columnGap: '23px' }}>
                        {workshops2.map((workshop, index) => (
                            <Col key={index} md="4" style={{ background: "#2941f8", width: '31%', height: '250px' }}>
                                <Card className="" style={style.card}>
                                    <CardBody>
                                        <p style={{ fontSize: '25px', color: 'white' }}>{workshop.title} <FaUserFriends color="white" /></p> {/* Dynamic Title with Larger Font */}
                                        <p style={{ fontSize: '25px', color: 'white' }}>{workshop.date} <FaCalendarAlt color="white" /></p> {/* Icon and Dynamic Date with Larger Font */}
                                        <p style={{ fontSize: '25px', color: 'white' }}>{workshop.time} <FaClock color="white" /></p> {/* Icon and Dynamic Time with Larger Font */}
                                    </CardBody>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Col>

                <Col md="1" className="bg-info text-white d-flex align-items-center justify-content-center">
                    <div className='text-center'>
                        <strong style={{fontSize: '90px'}}>1</strong>
                        <p style={{fontSize: '25px', marginTop: '-30px'}}>اليوم الأول</p>
                    </div>

                </Col>
            </Row>
            <Row className='mt-5'>
                <Col className="text-center">
                    <h2 style={{color: '#0b1a8a', textAlign: 'right', fontWeight: 'bold'}}>ﻞﻤﻌﻟﺍ ﺵﺭﻭ</h2>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col md="11" >
                    <Row style={{ columnGap: '23px' }}>
                        {workshops.map((workshop, index) => (
                            <Col key={index} md="4" style={{ background: "#0b1a8a", width: '31%', height: '250px' }}>
                                <Card className="" style={style.card}>
                                    <CardBody>
                                        <p style={{ fontSize: '25px', color: 'white' }}>{workshop.title} <FaUserFriends color="white" /></p>
                                        <p style={{ fontSize: '25px', color: 'white' }}>{workshop.date} <FaCalendarAlt color="white" /></p>
                                        <p style={{ fontSize: '25px', color: 'white' }}>{workshop.time} <FaClock color="white" /></p>
                                    </CardBody>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Col>

                <Col md="1" className="bg-info text-white d-flex align-items-center justify-content-center">
                    <div className='text-center'>
                        <strong style={{fontSize: '90px'}}>2</strong>
                        <p style={{fontSize: '25px', marginTop: '-30px'}}>اليوم الثاني</p>
                    </div>

                </Col>
            </Row>
        </Container>
    );
};

export default Calendar