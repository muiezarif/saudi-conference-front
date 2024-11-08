import React from 'react';
import {Card, CardBody, Col, Container, Row} from 'reactstrap';
import {FaCalendarAlt, FaClock, FaUserFriends} from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Base} from "../component/Base";
import iconSit from "../asset/icon_sit.png";


const Calendar = () => {
    const workshops = [
        {title: 'عنوان الورشة', date: '2024/12/23', time: '9 - 10 صباحًا'},
        {title: 'عنوان الورشة', date: '2024/12/23', time: '11 - 12 صباحًا'},
        {title: 'عنوان الورشة', date: '2024/12/23', time: '1 - 2 صباحًا'},
    ];
    const workshops2 = [
        {title: 'عنوان الجلسة', date: '2024/12/23', time: '9 - 10 صباحًا', img: iconSit},
        {title: 'عنوان الجلسة', date: '2024/12/23', time: '11 - 12 صباحًا', img: iconSit},
        {title: 'عنوان الجلسة', date: '2024/12/23', time: '1 - 2 صباحًا', img: iconSit},
    ];
    const style = {
        card: {
            // height: '250px',
            // width: 'auto',
            border: 'none',
            backgroundColor: 'transparent',
            textAlign: "center",
            // display: 'flex',
            // alignItems: 'center',
            // textAlign: 'right',
            // justifyContent: 'center',
            marginTop: '35px'
        },
        cardParagraph: {
            fontSize: '25px',
            color: 'white'
        },
        imageStyle: {
            width: "30px"
        }
    }
    return (
        <Base>
            <Container className="my-5">
                <Row>
                    <Col className="text-center">
                        <h2 style={{color: '#0b1a8a', textAlign: 'right', fontWeight: 'bold'}}> ﺓﺪﻨﺟﻷﺍ</h2>
                    </Col>
                </Row>

                <Row className="mt-4">
                    <Col md="11">
                        <Row style={{columnGap: '23px'}}>
                            {workshops2.map((workshop, index) => (
                                <Col key={index} md="4" style={{background: "#5f00b8", width: '31%', height: '250px'}}>
                                    <Card className="" style={style.card}>
                                        <CardBody>
                                            <div className="d-flex">
                                                <p style={style.cardParagraph}>{workshop.title}</p>
                                                <img src={workshop.img} style={style.imageStyle}/>
                                            </div>
                                            <p style={{fontSize: '25px', color: 'white'}}>{workshop.date} <FaCalendarAlt
                                                color="white"/></p> {/* Icon and Dynamic Date with Larger Font */}
                                            <p style={{fontSize: '25px', color: 'white'}}>{workshop.time} <FaClock
                                                color="white"/></p> {/* Icon and Dynamic Time with Larger Font */}
                                        </CardBody>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Col>

                    <Col md="1" className="text-white d-flex align-items-center justify-content-center"
                         style={{backgroundColor: "#00b4b2"}}>
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
                    <Col md="11">
                        <Row style={{columnGap: '23px'}}>
                            {workshops.map((workshop, index) => (
                                <Col key={index} md="4" style={{background: "#0c0c9c", width: '31%', height: '250px'}}>
                                    <Card className="" style={style.card}>
                                        <CardBody>
                                            <p style={{fontSize: '25px', color: 'white'}}>{workshop.title}
                                                <FaUserFriends color="white"/></p>
                                            <p style={{fontSize: '25px', color: 'white'}}>{workshop.date} <FaCalendarAlt
                                                color="white"/></p>
                                            <p style={{fontSize: '25px', color: 'white'}}>{workshop.time} <FaClock
                                                color="white"/></p>
                                        </CardBody>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Col>

                    <Col md="1" className="text-white d-flex align-items-center justify-content-center"
                         style={{backgroundColor: "#00b4b2"}}>
                        <div className='text-center'>
                            <strong style={{fontSize: '90px'}}>2</strong>
                            <p style={{fontSize: '25px', marginTop: '-30px'}}>اليوم الثاني</p>
                        </div>

                    </Col>
                </Row>
            </Container>
        </Base>
    );
};

export default Calendar