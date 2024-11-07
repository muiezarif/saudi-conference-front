// Import necessary modules
import React from 'react';
import {Card, CardBody, CardText, Col, Container, Row} from 'reactstrap';
import {FaBalanceScale, FaEnvelope, FaEye, FaHammer} from 'react-icons/fa';
import {Base} from "../component/Base";

const ConferencePage = () => {
    const style = {
        card: {
            height: '200px',
            width: 'auto',
            border: 'none',
            backgroundColor: 'rgb(237, 237, 237)',
            display: 'flex',
            alignItems: 'center',
            textAlign: 'right',
            justifyContent: 'center',
            marginTop: '35px',
            borderBottom: '7px solid blue',
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
            borderRight: '6px solid blue',
            borderRadius: '0px'
        }
    }
    return (
        <Base>
            <Container className="mt-5">
                <Row style={{textAlign: 'right', marginBottom: '25px'}}>
                    <Col md="6">
                        <h4 className="text-primary" style={{textAlign: 'right'}}>الرؤية</h4>
                        <Card className="mb-4 shadow-sm" style={style.card}>
                            <CardBody>
                                <div className=""><FaEnvelope size={30}/></div>
                                <CardText className="mt-3 text-center">
                                    تطوير قطاع المحاماة والاستشارات القانونية والعاملين بها، عبر إقامة مؤتمرات المحاماة؛
                                    لربط التواصل ما بين المحامين والممارسين القانونيين والرفع من المستوى المهني لقطاع
                                    مستدام
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md="6">
                        <h4 className="text-primary" style={{textAlign: 'right'}}>الرسالة</h4>
                        <Card className="mb-4 shadow-sm" style={style.card}>
                            <CardBody>
                                <div className=""><FaEye size={30}/></div>
                                <CardText className="mt-3 text-center">
                                    أن يكون المحامي والممارس القانوني رائدًا في مجاله، متفاعلًا مع مجتمعه،
                                    رافعا للوطن، متمكنا بعلمه، ساميًا بعدله
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>

                {/* Conference Goals Section */}
                <Row>
                    <Col>
                        <h4 style={{color: 'blue', textAlign: 'right', marginBottom: '-16px'}}>أهداف المؤتمر</h4>
                    </Col>
                </Row>
                <Row>
                    <Col md="6">
                        <Card style={style.card2}>
                            <CardBody className="d-flex align-items-center">
                                <CardText className="mt-3" style={{flex: 1}}>
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
                                <CardText className="mt-3" style={{flex: 1}}>
                                    إبراز أهم التطورات التشريعية في قطاع المحاماة والاستشارات القانونية في المملكة
                                </CardText>
                                <FaBalanceScale size={60} style={{marginLeft: '50px'}}/>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row className="mb-4">
                    <Col md="6">
                        <Card style={style.card2}>
                            <CardBody className="d-flex align-items-center">
                                <CardText className="mt-3" style={{flex: 1}}>
                                    إبراز أهم التطورات التقنية والتحولات الرقمية في قطاع المحاماة والاستشارات القانونية
                                    في
                                    المملكة
                                </CardText>
                                <FaBalanceScale size={60} style={{marginLeft: '50px'}}/>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md="6">
                        <Card className="" style={style.card2}>
                            <CardBody className="d-flex align-items-center">
                                <CardText className="mt-3 text-center" style={{flex: 1}}>
                                    تحقيق العدالة الناجزة، وزيادة الفرص الوظيفية والاستشارية في المملكة
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
