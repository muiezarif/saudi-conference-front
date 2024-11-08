import React from 'react';
import {Card, CardBody, Col, Container, Row} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {cardData, cardData2, cardData3} from "../data/SecThreeData";


const homeComponentSecThree = () => {
    const style = {
        card: {
            height: '180px',
            border: 'none',
            backgroundColor: 'transparent',
            display: 'flex',
            alignItems: 'center',
            textAlign: 'center',
            justifyContent: 'center',
            marginTop: '25px'
        },
        firstCard: {
            borderTopLeftRadius: '15px',
            borderBottomLeftRadius: '15px',
        },
        lastCard: {
            borderTopRightRadius: '15px',
            borderBottomRightRadius: '15px',
        },
        topHeading: {
            color: '#0b1a8a',
            textAlign: 'right',
            fontFamily: "DiodrumBold",
            marginBottom: "40px"
        }
    }
    return (
        <Container className="my-5">
            <Row className='mt-3' style={{columnGap: '26px', display: "flex", justifyContent: "center"}}>
                <h2 style={style.topHeading}>ﺃﺭﻗﺎﻡ ﺍﻟﻤﺆﺗﻤﺮ</h2>
                {cardData.map((data, index) => (
                    <Col
                        xl={2}
                        key={index}
                        lg="3" md="3" sm="3"
                    >
                        <div style={{
                            background: "#0b1a8a",
                            borderRadius: "0",
                            height: '220px',
                            width: "180px",
                            border: 'none',
                            display: 'flex',
                            alignItems: 'center',
                            textAlign: 'center',
                            justifyContent: 'center',
                            marginBottom: "25px",
                            ...(
                                index === 0
                                    ? style.firstCard
                                    : index === cardData.length - 1
                                        ? style.lastCard
                                        : {}
                            )
                        }}>
                            <CardBody>
                                <strong style={{
                                    fontSize: '40px',
                                    color: '#02b4b2',
                                    fontFamily: "DiodrumBold"
                                }}>{data.number}</strong>
                                <p style={{
                                    fontSize: '25px',
                                    color: 'white',
                                    fontFamily: "DiodrumRegular"
                                }}>{data.name}</p>
                            </CardBody>
                        </div>
                    </Col>
                ))}
            </Row>

            {/*2nd boxes  */}
            <Row className='mt-3' style={{columnGap: '26px'}}>
                <h2 style={{color: '#0b1a8a', textAlign: 'right', fontFamily: "DiodrumBold"}}>فئات التذاكر</h2>
                {cardData2.map((data, index) => (
                    <Col
                        key={index}
                        md="4"
                        style={{
                            background: "#6002b8",
                            width: '23%',
                            ...(
                                index === 0
                                    ? style.firstCard
                                    : index === cardData2.length - 1
                                        ? style.lastCard
                                        : {}
                            )
                        }}
                    >
                        <Card className="" style={style.card}>
                            <CardBody>
                                <div style={{color: 'white'}}>
                                    <p style={{
                                        fontSize: '25px',
                                        margin: '0',
                                        fontFamily: "DiodrumRegular"
                                    }}>{data.name}</p>
                                    <p style={{fontSize: '45px', margin: '0', fontWeight: 'bold'}}>{data.name1}</p>
                                    <div style={{display: 'flex', paddingLeft: '40px', gap: '2px'}}>
                                        <strong style={{margin: '0', fontFamily: "DiodrumBold"}}>
                                            {data.cur}
                                        </strong>
                                        <strong style={{margin: '0', fontFamily: "DiodrumBold"}}>
                                            {data.number}
                                        </strong>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                ))}
            </Row>

            {/*3nd boxes  */}
            <Row className='mt-5'>
                <Col className="text-center">
                    <h2 style={{color: '#0b1a8a', textAlign: 'right', fontFamily: "DiodrumBold"}}>الرعايات</h2>
                </Col>
            </Row>
            <Row className='mt-3' style={{columnGap: '26px'}}>
                {cardData3.map((data, index) => (
                    <Col
                        key={index}
                        md="4"
                        style={{
                            background: "#0b1a8a",
                            width: '23%',
                            ...(
                                index === 0
                                    ? style.firstCard
                                    : index === cardData3.length - 1
                                        ? style.lastCard
                                        : {}
                            )
                        }}
                    >
                        <Card className="" style={style.card}>
                            <CardBody>
                                <div style={{color: 'white'}}>
                                    <p style={{
                                        fontSize: '30px',
                                        margin: '0',
                                        fontFamily: "DiodrumBold"
                                    }}>{data.name}</p>
                                    <div style={{display: 'flex', paddingLeft: '40px', gap: '2px'}}>
                                        <strong style={{margin: '0', fontFamily: "DiodrumBold"}}>
                                            {data.cur}
                                        </strong>
                                        <strong style={{margin: '0', fontFamily: "DiodrumBold"}}>
                                            {data.number}
                                        </strong>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                ))}
            </Row>

        </Container>
    );
}
export default homeComponentSecThree;