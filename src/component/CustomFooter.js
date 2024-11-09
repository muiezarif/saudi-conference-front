import React from 'react';
import { Col, Container, FormGroup, Input, Label, Row } from 'reactstrap';
import logo from '../asset/HeaderLogo.png';
import img1 from "../asset/socialMedia/img1.png";
import img2 from "../asset/socialMedia/img2.png";
import img3 from "../asset/socialMedia/img3.png";
import img4 from "../asset/socialMedia/img4.png";
import img5 from "../asset/socialMedia/img5.png";
import img6 from "../asset/socialMedia/img6.png";

const CustomFooter = () => {
    const style = {
        textField: {
            backgroundColor: '#6f7dbb',
            borderRadius: '20px',
            color: '#ffffff',
            textAlign: 'right',
        }
    };

    return (
        <div style={{ backgroundColor: '#0b1a8a', color: '#ffffff', padding: '20px 0', marginTop: "40px" }}>
            <Container>
                <Row className="justify-content-center">
                    <Col xs={12} className="text-center mb-3">
                        <h5 style={{ color: 'white', textAlign: 'right', fontFamily: "DiodrumBold" }}>
                            تواصل معنا
                        </h5>
                    </Col>
                </Row>

                {/* Form Section */}
                <Row style={{ textAlign: 'right', fontFamily: "DiodrumRegular" }}>
                    <Col xs={12} md={6} className="mb-3">
                        <FormGroup>
                            <Label for="firstName">البريد الإلكتروني</Label>
                            <Input type="text" id="firstName" placeholder="" style={style.textField} />
                        </FormGroup>
                    </Col>
                    <Col xs={12} md={6} className="mb-3">
                        <FormGroup>
                            <Label for="email">الاسم</Label>
                            <Input type="email" id="email" placeholder="" style={style.textField} />
                        </FormGroup>
                    </Col>
                </Row>

                <Row style={{ textAlign: 'right', fontFamily: "DiodrumRegular" }}>
                    <Col xs={12} md={6} className="mb-3">
                        <FormGroup>
                            <Label for="message">الرسالة</Label>
                            <Input type="text" id="message" placeholder="" style={style.textField} />
                        </FormGroup>
                    </Col>
                    <Col xs={12} md={6} className="mb-3">
                        <FormGroup>
                            <Label for="phone">الجوال</Label>
                            <Input type="text" id="phone" placeholder="" style={style.textField} />
                        </FormGroup>
                    </Col>
                </Row>

                {/* Social Media and Footer Info */}
                <Row className="justify-content-between align-items-center mt-4">
                    <Col xs={12} md={4} className="d-flex justify-content-center mb-3">
                        <img src={img1} alt="Twitter" style={{ width: 28, height: 28, margin: '0 5px' }} />
                        <img src={img2} alt="Facebook" style={{ width: 28, height: 28, margin: '0 5px' }} />
                        <img src={img3} alt="Instagram" style={{ width: 28, height: 28, margin: '0 5px' }} />
                        <img src={img4} alt="Snapchat" style={{ width: 28, height: 28, margin: '0 5px' }} />
                        <img src={img5} alt="LinkedIn" style={{ width: 28, height: 28, margin: '0 5px' }} />
                        <img src={img6} alt="YouTube" style={{ width: 28, height: 28, margin: '0 5px' }} />
                    </Col>

                    <Col xs={12} md={4} className="text-center mb-3" style={{ fontWeight: 'bold', fontFamily: "DiodrumBold" }}>
                        <p>جميع الحقوق محفوظة 2024</p>
                    </Col>

                    <Col xs={12} md={4} className="d-flex justify-content-center justify-content-md-end">
                        <img src={logo} alt="Logo" style={{ width: '50%', maxWidth: '150px' }} />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default CustomFooter;