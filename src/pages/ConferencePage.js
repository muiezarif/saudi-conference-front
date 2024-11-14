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


const ConferencePage = () => {
    const style = {
        topCardHeading: {
            fontFamily: "DiodrumBold",
            color: "#0C0C9C"
        },
        bottomCardHeading: {
            color: '#0C0C9C',
            textAlign: 'right',
            marginBottom: '-16px',
            fontFamily: "DiodrumBold"
        },
        cardText: {
            fontFamily: "DiodrumRegular",
            float: "left"
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
            borderBottom: '10px solid #0C0C9C',
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
            borderRight: '10px solid #5F00B8',
            borderRadius: '0px'
        }
    }
    return (
        <Container className="mt-5">
            <Row style={{textAlign: 'right', marginBottom: '25px'}}>
                <Col md="6">
                    <h4 style={style.topCardHeading}>الرسالة</h4>
                    <div className="mb-4 shadow-sm" style={style.card}>
                        <CardBody>
                            <img style={{float: "right"}} src={mailIcon} width={60} alt=""/>
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
                            <img style={{float: "right"}} src={eyeIcon} width={70} alt=""/>
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
                        <CardBody className="d-flex align-items-center gap-3">
                            <CardText className="mt-3" style={style.bottomCardText}>
                                إبراز خطوات قطاع المحاماة والاستشارات القانونية في المملكة وأثرها على رفع موثوقية
                                التأهيل المهني
                            </CardText>
                            <div><img src={sheetIcon} width={70} alt=""/></div>
                        </CardBody>
                    </Card>
                </Col>
                <Col md="6">
                    <Card style={style.card2}>
                        <CardBody className="d-flex align-items-center gap-3">
                            <CardText className="mt-3" style={style.bottomCardText}>
                                إبراز أهم التطورات التشريعية في قطاع المحاماة والاستشارات القانونية في المملكة
                            </CardText>
                            <div><img src={balanceIcon} width={70} alt=""/></div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Row className="mb-4">
                <Col md="6">
                    <Card className="" style={style.card2}>
                        <CardBody className="d-flex align-items-center gap-3">
                            <CardText className="mt-3 text-center" style={style.bottomCardText}>
                                تحقيق العدالة الناجزة، وزيادة الفرص الوظيفية والاستشارية في المملكة
                            </CardText>
                            <div><img src={hammerIcon} width={70} alt=""/></div>
                        </CardBody>
                    </Card>
                </Col>
                <Col md="6">
                    <Card style={style.card2}>
                        <CardBody className="d-flex align-items-center gap-3">
                            <CardText className="mt-3" style={style.bottomCardText}>
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
