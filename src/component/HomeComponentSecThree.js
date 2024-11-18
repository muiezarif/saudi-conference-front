import React from 'react';
import {CardBody, Col, Container, Row} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {cardData, cardData2, cardData3} from "../data/SecThreeData";
import "../style/SecThree.css";
import {useNavigate} from "react-router-dom";

export function HomeComponentSecThree() {
    const navigate = useNavigate();

    const goToForm = () => {
        navigate('/regmethod');
    };

    const goToForm2 = () => {
        navigate('/reg3');
    };

    const style = {
        card: {
            height: '180px',
            border: 'none',
            backgroundColor: 'transparent',
            display: 'flex',
            alignItems: 'center',
            alignContent: "center",
            textAlign: 'center',
            justifyContent: 'center',
            // marginTop: '25px'
        },
        topHeading: {
            padding: "0",
            color: '#0b1a8a',
            textAlign: 'right',
            fontFamily: "DiodrumBold",
            marginBottom: "40px"
        },
    }
    return (
        <Container className="my-5">
            <h2 style={style.topHeading}>ﺃﺭﻗﺎﻡ ﺍﻟﻤﺆﺗﻤﺮ</h2>
            <Row className='d-flex justify-content-between mt-3'>
                {cardData.map((data, index) => (
                    <Col
                        key={index}
                        xl={2} lg={2} md={4} sm={4}
                        className={`col-style ${index === 0 ? 'firstCard' : index === cardData.length - 1 ? 'lastCard' : ''}`}
                    >
                        <div style={style.card}>
                            <CardBody>
                                <strong style={{
                                    fontSize: '60px',
                                    color: '#02b4b2',
                                    fontFamily: "DiodrumBold"
                                }}>{data.number}</strong>
                                <p style={{
                                    fontSize: '30px',
                                    color: 'white',
                                    fontFamily: "DiodrumRegular"
                                }}>{data.name}</p>
                            </CardBody>
                        </div>
                    </Col>
                ))}
            </Row>

            {/*2nd boxes  */}
            <Row className='d-flex justify-content-between mt-5 custom-row'>
                <h2 style={style.topHeading}>فئات التذاكر</h2>
                {cardData2.map((data, index) => (
                    <Col
                        key={index}
                        xl={4} lg={4} md={6} sm={6} xs={6}
                        className={`second-col-style ${index === 0 ? 'firstCard' : index === cardData2.length - 1 ? 'lastCard' : ''}`}
                    >
                        <div onClick={goToForm2} style={style.card}>
                            <div>
                                <p className="p1">{data.name}</p>
                                <p className="p2">{data.name1}</p>
                                <div className="p3">
                                    <strong>
                                        {data.cur}
                                    </strong>
                                    <strong>
                                        {data.number}
                                    </strong>
                                </div>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>

            {/*3nd boxes  */}
            <Row className='d-flex justify-content-between mt-3'>
                <h2 style={style.topHeading}>الرعايات</h2>
                {cardData3.map((data, index) => (
                    <Col
                        key={index}
                        xl={4} lg={4} md={6} sm={6} xs={6}
                        className={`third-col-style ${index === 0 ? 'firstCard' : index === cardData3.length - 1 ? 'lastCard' : ''}`}
                    >
                        <div onClick={goToForm} style={style.card}>
                            <div>
                                <p className="p3 mb-2">{data.name}</p>
                                <p className="p2">{data.name1}</p>
                                <div className="p3">
                                    <strong>
                                        {data.cur}
                                    </strong>
                                    <strong>
                                        {data.number}
                                    </strong>
                                </div>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}