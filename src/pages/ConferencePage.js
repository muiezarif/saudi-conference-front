// Import necessary modules
import React from 'react';
import {Card, CardBody, CardText, Col, Container, Row} from 'reactstrap';

import "../style/fonts.css"
import mailIcon from "../asset/icon_mail.png";
import eyeIcon from "../asset/icon_eye.png";
import balanceIcon from "../asset/ic_tr.png";
import sheetIcon from "../asset/ic_per.png";
import hammerIcon from "../asset/ic_hammer.png";
import dasIcon from "../asset/ic_das.png";
import "../style/Confernce.css";


const ConferencePage = () => {

    return (
        <Container className="mt-5">
            <Row style={{textAlign: 'right', marginBottom: '25px'}}>
                <Col md="6" className="conferenceCustomCol">
                    <h4 className="conference-top-card-heading">الرسالة</h4>
                    <Card className="mb-4 conferenceCustomCard">
                        <CardBody className="bg-transparent">
                            <img style={{float: "right"}} src={mailIcon} width={60} alt=""/>
                            <CardText className="mt-3 card-text">
                                توفير بيئة مهنية محفزة تجمع الخبراء والمختصين لتبادل الخبرات المحلية والدولية، وتشجع على
                                الإبداع والابتكار والتطوير؛ للرقي بمستوى الممارسة المهنية في قطاع المحاماة والاستشارات
                                القانونية.
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col md="6">
                    <h4 className="conference-top-card-heading">الرؤية</h4>
                    <Card className="mb-4 shadow-sm conferenceCustomCard">
                        <CardBody>
                            <img style={{float: "right"}} src={eyeIcon} width={70} alt=""/>
                            <CardText className="mt-3 card-text">
                                ريادة قطاع المحاماة والاستشارات القانونية، وتحسين بيئة الأعمال في المملكة وتعزيز
                                تنافسيتها عالميًّا.
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
            </Row>

            {/* Conference Goals Section */}
            <Row>
                <Col>
                    <h4 className="bottom-card-heading">أهداف المؤتمر</h4>
                </Col>
            </Row>
            <Row>
                <Col md="6">
                    <Card className="customCard2">
                        <CardBody className="d-flex align-items-center gap-3">
                            <CardText className="mt-3 bottom-card-text">
                                إبراز خطوات قطاع المحاماة والاستشارات القانونية في المملكة وأثرها على رفع موثوقية
                                التأهيل المهني
                            </CardText>
                            <div><img src={sheetIcon} width={70} alt=""/></div>
                        </CardBody>
                    </Card>
                </Col>
                <Col md="6">
                    <Card className="customCard2">
                        <CardBody className="d-flex align-items-center gap-3">
                            <CardText className="mt-3  bottom-card-text">
                                إبراز أهم التطورات التشريعية في قطاع المحاماة والاستشارات القانونية في المملكة
                            </CardText>
                            <div><img src={balanceIcon} width={70} alt=""/></div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Row className="mb-4">
                <Col md="6">
                    <Card className="customCard2">
                        <CardBody className="d-flex align-items-center gap-3">
                            <CardText className="mt-3 text-center bottom-card-text">
                                تحقيق العدالة الناجزة، وزيادة الفرص الوظيفية والاستشارية في المملكة
                            </CardText>
                            <div><img src={hammerIcon} width={70} alt=""/></div>
                        </CardBody>
                    </Card>
                </Col>
                <Col md="6">
                    <Card className="customCard2">
                        <CardBody className="d-flex align-items-center gap-3">
                            <CardText className="mt-3 bottom-card-text">
                                إبراز أهم التطورات التقنية والتحولات الرقمية في قطاع المحاماة والاستشارات القانونية
                                في
                                المملكة
                            </CardText>
                            <div><img src={dasIcon} width={70} alt=""/></div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default ConferencePage;
