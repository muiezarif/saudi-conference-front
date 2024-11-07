import React from 'react';
import {Col, Container, FormGroup, Input, Label, Row} from 'reactstrap';
import {FaFacebook, FaInstagram, FaLinkedin, FaSnapchat, FaTwitter, FaYoutube} from 'react-icons/fa';
import logo from '../asset/HeaderLogo.png'

const CustomFooter = () => {
    const style = {
        textField: {
            backgroundColor: '#6f7dbb',
            borderRadius: '20px',
            color: '#ffffff',
            textAlign: 'right'
        }
    }

    return (
        <div style={{backgroundColor: '#0b1a8a', color: '#ffffff', padding: '20px 0'}}>
            <Container>
                <Row>
                    <Col className="text-center m-2">
                        <h5 className="" style={{color: 'white', textAlign: 'right', fontWeight: 'bold'}}>تواصل
                            معنا</h5>
                    </Col>
                </Row>
                <Row style={{textAlign: 'right'}}>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="firstName" style={{textAlign: 'right'}}>البريد الإلكتروني</Label>
                            <Input type="text" name="firstName" id="firstName" placeholder="" style={style.textField}/>
                        </FormGroup>
                    </Col>
                    <Col md={6} style={{textAlign: 'right'}}>
                        <FormGroup>
                            <Label for="email">الاسم</Label>
                            <Input type="email" name="email" id="email" placeholder="" style={style.textField}/>
                        </FormGroup>
                    </Col>
                </Row>
                <Row style={{textAlign: 'right'}}>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="firstName" style={{textAlign: 'right'}}>الرسالة</Label>
                            <Input type="text" name="firstName" id="firstName" placeholder="" style={style.textField}/>
                        </FormGroup>
                    </Col>
                    <Col md={6} style={{textAlign: 'right'}}>
                        <FormGroup>
                            <Label for="email">الجوال</Label>
                            <Input type="email" name="email" id="email" placeholder="" style={style.textField}/>
                        </FormGroup>
                    </Col>
                </Row>
                <Row className="justify-content-center mt-2">
                    <Col md="4" className='d-flex mt-3'>
                        <FaTwitter size={28} style={{margin: '0 10px', color: '#ffffff'}}/>
                        <FaFacebook size={28} style={{margin: '0 10px', color: '#ffffff'}}/>
                        <FaInstagram size={28} style={{margin: '0 10px', color: '#ffffff'}}/>
                        <FaSnapchat size={28} style={{margin: '0 10px', color: '#ffffff'}}/>
                        <FaLinkedin size={28} style={{margin: '0 10px', color: '#ffffff'}}/>
                        <FaYoutube size={28} style={{margin: '0 10px', color: '#ffffff'}}/>
                    </Col>
                    <Col md={4} className="text-center mt-3" style={{fontWeight: 'bold'}}>
                        <p>جميع الحقوق محفوظة 2024</p>
                    </Col>
                    <Col md={4} className='d-flex justify-content-end' style={{textAlign: 'right'}}>
                        <img src={logo} alt="Logo" style={{width: '50%'}}/>
                    </Col>

                </Row>
                {/*<Row className="justify-content-center mt-4">*/}
                {/*    <Col md="6" className="text-center">*/}
                {/*        <p>جميع الحقوق محفوظة 2024</p>*/}
                {/*        <p>مؤتمر المحاماة السعودي<br/>Saudi Lawyers Conference</p>*/}
                {/*    </Col>*/}
                {/*</Row>*/}
            </Container>
        </div>
    );
};

export default CustomFooter;