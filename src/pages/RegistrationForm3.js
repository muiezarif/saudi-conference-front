import React, { useState } from 'react';
import { Col, Container, Form, FormGroup, Input, Label, Row, Button } from 'reactstrap';
import { Base } from "../component/Base";
import axios from 'axios';

const RegistrationForm2 = () => {

    const [formData, setFormData] = useState({
        firstName: "",
        familyName: "",
        email: "",
        phone: "",
        organization: "",
        jobTitle: "",
        membershipType: "",
        membershipNumber: "",
    });
    const style = {
        dot: {
            backgroundColor: '#545454',
            height: '3px',
            width: '3px',
            borderRadius: '5px',
            margin: "10px 0 0 10px"
        },
        textField: {
            backgroundColor: 'rgb(237, 237, 237)',
            borderRadius: '20px',
            // color: '#b6b6b6',
            textAlign: 'right'
        },
        labelStyle: {
            fontFamily: "DiodrumBold",
            textAlign: "right",
            color: "#606060",
            marginBottom: "1rem"
        }
    }
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Use this encoded data in your axios call
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                'https://script.google.com/macros/s/AKfycbzx3JQMj8kOewBDSQcKo-9QhToiXKs6RCJRbH6z-olpTKpkC_heIqqG6atIdxsC7w-I/exec',
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
        <Base>
            <Container style={{ marginTop: "13rem" }}>
                <Row>
                    <Col className="text-center">
                        <h2 style={{ color: '#0b1a8a', textAlign: 'right', fontFamily: "DiodrumBold" }}>فئات التذاكر</h2>
                        <h3 style={{ color: '#009688', textAlign: 'right', fontFamily: "DiodrumBold" }}>:مزايا فئة
                            VIP</h3>
                    </Col>
                </Row>
                <Row className='mt-2' style={{ textAlign: "right", fontFamily: "DiodrumRegular" }}>
                    <Col style={{ gap: '12px' }}>
                        <div className="d-inline-flex" style={{ paddingRight: '100px' }}>
                            <p style={style.para}>ضيافة</p>
                            <div style={style.dot} />
                        </div>
                        <div className="d-inline-flex">
                            <p style={style.para}>ﺣﻀﻮﺭ ﻭﺭﺵ ﺍﻟﻌﻤﻞ ﻭﺍﻟﺠﻠﺴﺎﺕ ﺍﻟﺤﻮﺍﺭﻳﺔ</p>
                            <div style={style.dot} />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center m-2">
                        <h4 className="" style={{ color: '#606060', textAlign: 'right', fontFamily: "DiodrumBold" }}>بيانات
                            التسجيل
                            الرئيسية</h4>
                    </Col>
                </Row>

                <Form onSubmit={handleSubmit} style={{ textAlign: 'right', fontFamily: "DiodrumRegular" }}>
                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="familyName" style={style.labelStyle}>اسم ﺍﻟﻌﺎﺋﻠﺔ</Label>
                                <Input type="text" name="familyName" id="familyName" value={formData.familyName} onChange={handleInputChange} placeholder="" style={style.textField} />
                            </FormGroup>
                        </Col>
                        <Col md={6} style={{ textAlign: 'right' }}>
                            <FormGroup>
                                <Label style={style.labelStyle} for="firstName">ﺍﻻﺳﻢ ﺍﻷﻭﻝ</Label>
                                <Input type="text" name="firstName" id="firstName" placeholder="" value={formData.firstName} onChange={handleInputChange} style={style.textField} />
                            </FormGroup>
                        </Col>
                    </Row>

                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <Label style={style.labelStyle} for="phone">رقم الجوال</Label>
                                <Input type="text" name="phone" id="phone" placeholder="" value={formData.phone} onChange={handleInputChange} style={style.textField} />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label style={style.labelStyle} for="email">البريد الإلكتروني</Label>
                                <Input type="email" name="email" id="email" placeholder="" value={formData.email} onChange={handleInputChange} style={style.textField} />
                            </FormGroup>
                        </Col>
                    </Row>

                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <Label style={style.labelStyle} for="jobTitle">ﺍﻟﻤﺴﻤﻰ ﺍﻟﻮﻇﻴﻔﻲ</Label>
                                <Input type="text" name="jobTitle" id="jobTitle" placeholder="" value={formData.jobTitle} onChange={handleInputChange} style={style.textField} />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label style={style.labelStyle} for="organization">ﺍﺳﻢ ﺍﻟﺠﻬﺔ</Label>
                                <Input type="text" name="organization" id="organization" placeholder="" value={formData.organization} onChange={handleInputChange} style={style.textField} />
                            </FormGroup>
                        </Col>
                    </Row>

                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <Label style={style.labelStyle} for="membershipNumber">ﺭﻗﻢ ﺍﻟﻌﻀﻮﻳﺔ</Label>
                                <Input type="text" name="membershipNumber" id="membershipNumber" placeholder="" value={formData.membershipNumber} onChange={handleInputChange} style={style.textField} />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label style={style.labelStyle} for="membershipType">ﻧﻮﻉ ﺍﻟﻌﻀﻮﻳﺔ</Label>
                                <Input type="text" name="membershipType" id="membershipType" placeholder="" value={formData.membershipType} onChange={handleInputChange} style={style.textField} />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Button type="submit" color="primary" className="mt-4">
                        Submit
                    </Button>
                </Form>
            </Container>
        </Base>
    );
};

export default RegistrationForm2;
