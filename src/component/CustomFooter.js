import React, { useState } from 'react';
import {Button, Col, Container, FormGroup, Input, Label, Row} from 'reactstrap';
import logo from '../asset/HeaderLogo.png';
import img1 from "../asset/socialMedia/img1.png";
import img2 from "../asset/socialMedia/img2.png";
import img3 from "../asset/socialMedia/img3.png";
import img4 from "../asset/socialMedia/img4.png";
import img5 from "../asset/socialMedia/img5.png";
import img6 from "../asset/socialMedia/img6.png";
import axios from 'axios';

const CustomFooter = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const style = {
        textField: {
            backgroundColor: '#6f7dbb',
            borderRadius: '20px',
            color: '#ffffff',
            textAlign: 'right',
        },
        labelStyle: {
            fontFamily: "DiodrumRegular",
            marginBottom: "20px"
        }
    };

    // Handle input change
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

     // Use this encoded data in your axios call
     const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const response = await axios.post(
                'https://script.google.com/macros/s/AKfycbxNLc4yYvRNJWlCGfunKgdx5Jm1x1oMXdm9Pwq1tZy_XDjIxeDXgMTjcu_at1K5ESJO/exec',
                formData,
                {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                }
            );
    
            if (response.data.result === "success") {
                alert('Form submitted successfully!');
            } else {
                console.error('Server Error:', response);
                alert('Failed to submit the form. Server Error.');
            }
        } catch (error) {
            console.error('Submission Error:', error);
            alert('Failed to submit the form.');
        }
    };

    return (
        <div style={{backgroundColor: '#0b1a8a', color: '#ffffff', padding: '20px 0', marginTop: "40px"}}>
            <Container>
                <Row className="justify-content-center">
                    <Col xs={12} className="text-center mb-3">
                        <h5 style={{color: 'white', textAlign: 'right', fontFamily: "DiodrumBold"}}>
                            تواصل معنا
                        </h5>
                    </Col>
                </Row>

                {/* Form Section */}
                <form onSubmit={handleSubmit}>
                <Row style={{ textAlign: 'right', fontFamily: 'DiodrumRegular' }}>
                        <Col xs={12} md={6} className="mb-3">
                            <FormGroup>
                                <Label for="email" style={style.labelStyle}>البريد الإلكتروني</Label>
                                <Input
                                    type="text"
                                    id="email"
                                    placeholder=""
                                    value={formData.email}
                                    onChange={handleChange}
                                    style={style.textField}
                                    required
                                />
                            </FormGroup>
                        </Col>
                        <Col xs={12} md={6} className="mb-3">
                            <FormGroup>
                                <Label for="name" style={style.labelStyle}>الاسم</Label>
                                <Input
                                    type="text"
                                    id="name"
                                    placeholder=""
                                    value={formData.name}
                                    onChange={handleChange}
                                    style={style.textField}
                                    required
                                />
                            </FormGroup>
                        </Col>
                    </Row>

                    <Row style={{ textAlign: 'right', fontFamily: 'DiodrumRegular' }}>
                        <Col xs={12} md={6} className="mb-3">
                            <FormGroup>
                                <Label for="message" style={style.labelStyle}>الرسالة</Label>
                                <Input
                                    type="text"
                                    id="message"
                                    placeholder=""
                                    value={formData.message}
                                    onChange={handleChange}
                                    style={style.textField}
                                    required
                                />
                            </FormGroup>
                        </Col>
                        <Col xs={12} md={6} className="mb-3">
                            <FormGroup>
                                <Label for="phone" style={style.labelStyle}>الجوال</Label>
                                <Input
                                    type="text"
                                    id="phone"
                                    placeholder=""
                                    value={formData.phone}
                                    onChange={handleChange}
                                    style={style.textField}
                                    required
                                />
                            </FormGroup>
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={12} className="text-center mt-3">
                            <Button  type="submit" color="primary">
                                إرسال
                            </Button>
                        </Col>
                    </Row>
                    </form>

                {/* Social Media and Footer Info */}
                <Row className="justify-content-between align-items-center mt-4">
                    <Col xs={12} md={4} className="d-flex justify-content-center mb-3">
                        <img src={img1} alt="Twitter" style={{width: 28, height: 28, margin: '0 5px'}}/>
                        <img src={img2} alt="Facebook" style={{width: 28, height: 28, margin: '0 5px'}}/>
                        <img src={img3} alt="Instagram" style={{width: 28, height: 28, margin: '0 5px'}}/>
                        <img src={img4} alt="Snapchat" style={{width: 28, height: 28, margin: '0 5px'}}/>
                        <img src={img5} alt="LinkedIn" style={{width: 28, height: 28, margin: '0 5px'}}/>
                        <img src={img6} alt="YouTube" style={{width: 28, height: 28, margin: '0 5px'}}/>
                    </Col>

                    <Col xs={12} md={4} className="text-center mb-3" style={{fontFamily: "DiodrumBold"}}>
                        <p>جميع الحقوق محفوظة 2024</p>
                    </Col>

                    <Col xs={12} md={4} className="d-flex justify-content-center justify-content-md-end">
                        <img src={logo} alt="Logo" style={{width: '50%', maxWidth: '150px'}}/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default CustomFooter;