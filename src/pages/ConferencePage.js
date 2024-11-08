// Import necessary modules
import React from 'react';
import {Card, CardBody, CardText, Col, Container, Row} from 'reactstrap';
import {FaBalanceScale, FaEnvelope, FaEye, FaHammer} from 'react-icons/fa';
import {Base} from "../component/Base";
import "../style/fonts.css"

const ConferencePage = () => {
    const style = {
        topCardHeading: {
            fontFamily: "DiodrumBold",
            color: "rgb(78,10,171)"
        },
        bottomCardHeading: {
            color: 'rgb(78,10,171)',
            textAlign: 'right',
            marginBottom: '-16px',
            fontFamily: "DiodrumBold"
        },
        cardText: {
            fontFamily: "DiodrumRegular",
        },
        bottomCardText: {
            flex: "1",
            fontFamily: "DiodrumRegular",
        },
        card: {
            height: '250px',
            width: 'auto',
            border: 'none',
            backgroundColor: 'rgb(237, 237, 237)',
            padding: "25px",
            marginTop: '25px',
            borderBottom: '10px solid rgb(78,10,171)',
            borderRadius: '0px'
        },
        card2: {
            height: '100px',
            width: 'auto',
            border: 'none',
            backgroundColor: 'rgb(237, 237, 237)',
            display: 'flex',
            alignItems: 'center',
            textAlign: 'right',
            justifyContent: 'center',
            marginTop: '35px',
            borderRight: '10px solid rgb(78,10,171)',
            borderRadius: '0px'
        }
    }
    return (
        <Base>
            <Container className="mt-5">
                <Row style={{textAlign: 'right', marginBottom: '25px'}}>
                    <Col md="6">
                        <h4 style={style.topCardHeading}>الرسالة</h4>
                        <div className="mb-4 shadow-sm" style={style.card}>
                            <CardBody>
                                <FaEnvelope size={30}/>
                                <CardText className="mt-3" style={style.cardText}>
                                    تطوير قطاع المحاماة والاستشارات القانونية والعاملين بها، عبر إقامة مؤتمرات المحاماة؛
                                    لربط التواصل ما بين المحامين والممارسين القانونيين والرفع من المستوى المهني لقطاع
                                    مستدام
                                </CardText>
                            </CardBody>
                        </div>
                    </Col>
                    <Col md="6">
                        <h4 style={style.topCardHeading}>الرؤية</h4>
                        <div className="mb-4 shadow-sm" style={style.card}>
                            <CardBody>
                                <div><FaEye size={30}/></div>
                                <CardText className="mt-3" style={style.cardText}>
                                    أن يكون المحامي والممارس القانوني رائدًا في مجاله، متفاعلًا مع مجتمعه،
                                    رافعا للوطن، متمكنا بعلمه، ساميًا بعدله
                                </CardText>
                            </CardBody>
                        </div>
                    </Col>
                </Row>

                {/* Conference Goals Section */}
                <Row>
                    <Col>
                        <h4 style={style.bottomCardHeading}>أهداف المؤتمر</h4>
                    </Col>
                </Row>
                <Row>
                    <Col md="6">
                        <Card style={style.card2}>
                            <CardBody className="d-flex align-items-center">
                                <CardText className="mt-3" style={style.bottomCardText}>
                                    إبراز خطوات قطاع المحاماة والاستشارات القانونية في المملكة وأثرها على رفع موثوقية
                                    التأهيل المهني
                                </CardText>
                                <FaHammer size={60} style={{marginLeft: '50px'}}/>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md="6">
                        <Card style={style.card2}>
                            <CardBody className="d-flex align-items-center">
                                <CardText className="mt-3" style={style.bottomCardText}>
                                    إبراز أهم التطورات التشريعية في قطاع المحاماة والاستشارات القانونية في المملكة
                                </CardText>
                                <FaBalanceScale size={60} style={{marginLeft: '50px'}}/>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row className="mb-4">
                    <Col md="6">
                        <Card className="" style={style.card2}>
                            <CardBody className="d-flex align-items-center">
                                <CardText className="mt-3 text-center" style={style.bottomCardText}>
                                    تحقيق العدالة الناجزة، وزيادة الفرص الوظيفية والاستشارية في المملكة
                                </CardText>
                                <FaBalanceScale size={60} style={{marginLeft: '50px'}}/>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md="6">
                        <Card style={style.card2}>
                            <CardBody className="d-flex align-items-center">
                                <CardText className="mt-3" style={style.bottomCardText}>
                                    إبراز أهم التطورات التقنية والتحولات الرقمية في قطاع المحاماة والاستشارات القانونية
                                    في
                                    المملكة
                                </CardText>
                                <FaHammer size={60} style={{marginLeft: '50px'}}/>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Base>
    );
};

export default ConferencePage;
