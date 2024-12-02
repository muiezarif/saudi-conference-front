import React, { useState } from 'react';
import { Button, Col, Container, FormGroup, Input, Label, Row } from 'reactstrap';
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
            border: "none"
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
            const options = {
                method: 'POST',
                url: 'https://www.cognitoforms.com/api/forms/256/entries',
                headers: {
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsImtpZCI6Ijg4YmYzNWNmLWM3ODEtNDQ3ZC1hYzc5LWMyODczMjNkNzg3ZCIsInR5cCI6IkpXVCJ9.eyJvcmdhbml6YXRpb25JZCI6IjI5ODJjNjlmLWYzNzctNDQ5Ny05YmRkLWNhYWMwOWIzYmUzYyIsImludGVncmF0aW9uSWQiOiIxN2NlNzczZS03NDY2LTRmMDQtODZmNy00NmM0ZTgxNWFiM2MiLCJjbGllbnRJZCI6IjNkZTNmODMwLWNiYzctNDZlNi1iOTZlLTVmMDE2NzcyMTgzMCIsImp0aSI6Ijg4YjljNWU3LTU2YjctNDM5OC1iMzE0LWFjYzBkMGNiM2Q0MCIsImlhdCI6MTczMjE5MTkyNSwiaXNzIjoiaHR0cHM6Ly93d3cuY29nbml0b2Zvcm1zLmNvbS8iLCJhdWQiOiJhcGkifQ.EcvsXafkPVJjps0Wg_7Q17B5_-SyEksje3AhopIRO40', // Replace 'your-api-key' with the actual token
                },
                data: { Entry: { Action: 'Submit', Role: 'Public' }, Name: formData.name,Email:formData.email,Phone:formData.phone,Message:formData.message },
            };

            try {
                const { data } = await axios.request(options);
                console.log(data);
                alert('Form submitted successfully!');
            } catch (error) {
                console.error(error);
                alert('Failed to submit the form. Server Error.');
            }
            // const response = await axios.post(
            //     'https://script.google.com/macros/s/AKfycbxNLc4yYvRNJWlCGfunKgdx5Jm1x1oMXdm9Pwq1tZy_XDjIxeDXgMTjcu_at1K5ESJO/exec',
            //     formData,
            //     {
            //         headers: {
            //             'Content-Type': 'application/x-www-form-urlencoded',
            //         },
            //     }
            // );

            // if (response.data.result === "success") {
            //     alert('Form submitted successfully!');
            // } else {
            //     console.error('Server Error:', response);
            //     alert('Failed to submit the form. Server Error.');
            // }
        } catch (error) {
            console.error('Submission Error:', error);
            alert('Failed to submit the form.');
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
                            <Button
                                type="submit"
                                style={{ borderRadius: '10px', backgroundColor: '#6002b8', border: 'none', width: "100%" }}
                            >
                                إرسال
                            </Button>
                        </Col>
                    </Row>
                </form>

                {/* Social Media and Footer Info */}
                <Row className="justify-content-between align-items-center mt-4">
                    <Col xs={12} md={4} className="d-flex justify-content-center mb-3">
                        <a href="https://x.com/SBA_Conference" target="_blank"><img src={img1} alt="Twitter" style={{ width: 28, height: 28, margin: '0 5px' }} /></a>
                        <a href="https://www.facebook.com/share/1Aq29xi3rR/?mibextid=kFxxJD" target="_blank"><img src={img2} alt="Facebook" style={{ width: 28, height: 28, margin: '0 5px' }} /></a>
                        <a href="https://www.instagram.com/sba_conference/profilecard/?igsh=MW96a3liZHN2MXRhNg==" target="_blank"><img src={img3} alt="Instagram" style={{ width: 28, height: 28, margin: '0 5px' }} /></a>
                        {/* <a href="https://www.snapchat.com/add/saudi_sba?share_id=YZt63zQ_Cdg&locale=en-US" target="_blank"><img src={img4} alt="Snapchat" style={{ width: 28, height: 28, margin: '0 5px' }} /></a> */}
                        <a href="https://www.linkedin.com/showcase/105401716/admin/dashboard" target="_blank"><img src={img5} alt="LinkedIn" style={{ width: 28, height: 28, margin: '0 5px' }} /></a>
                        {/* <a href="https://youtube.com/@saudi_sba?si=xI4j9j9kprnY9f58" target="_blank"><img src={img6} alt="YouTube" style={{ width: 28, height: 28, margin: '0 5px' }} /></a> */}
                    </Col>

                    <Col xs={12} md={4} className="text-center mb-3" style={{ fontFamily: "DiodrumBold" }}>
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