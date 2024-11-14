import React from 'react';
import {Col, Container, Form, FormGroup, Input, Label, Row} from 'reactstrap';
import {Base} from "../component/Base";

const RegistrationForm2 = () => {
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
            color:"#606060",
            marginBottom: "1rem"
        }
    }
    const formData = {
        firstLabel: "ﺍﻻﺳﻢ ﺍﻷﻭﻝ",
        secondLabel: "اسم ﺍﻟﻌﺎﺋﻠﺔ",
        thirdLabel: "البريد الإلكتروني",
        fourthLabel: "رقم الجوال",
        fifthLabel: "ﺍﺳﻢ ﺍﻟﺠﻬﺔ",
        sixthLabel: "ﺍﻟﻤﺴﻤﻰ ﺍﻟﻮﻇﻴﻔﻲ",
        seventhLabel: "ﻧﻮﻉ ﺍﻟﻌﻀﻮﻳﺔ",
        eightLabel: "ﺭﻗﻢ ﺍﻟﻌﻀﻮﻳﺔ"
    }

    return (
        <Base>
            <Container style={{marginTop: "13rem"}}>
                <Row>
                    <Col className="text-center">
                        <h2 style={{color: '#0b1a8a', textAlign: 'right', fontFamily: "DiodrumBold"}}>فئات التذاكر</h2>
                        <h3 style={{color: '#009688', textAlign: 'right', fontFamily: "DiodrumBold"}}>:مزايا فئة
                            VIP</h3>
                    </Col>
                </Row>
                <Row className='mt-2' style={{textAlign: "right", fontFamily: "DiodrumRegular"}}>
                    <Col style={{gap: '12px'}}>
                        <div className="d-inline-flex" style={{paddingRight: '100px'}}>
                            <p style={style.para}>ضيافة</p>
                            <div style={style.dot}/>
                        </div>
                        <div className="d-inline-flex">
                            <p style={style.para}>ﺣﻀﻮﺭ ﻭﺭﺵ ﺍﻟﻌﻤﻞ ﻭﺍﻟﺠﻠﺴﺎﺕ ﺍﻟﺤﻮﺍﺭﻳﺔ</p>
                            <div style={style.dot}/>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center m-2">
                        <h4 className="" style={{color: '#606060', textAlign: 'right', fontFamily: "DiodrumBold"}}>بيانات
                            التسجيل
                            الرئيسية</h4>
                    </Col>
                </Row>

                <Form style={{textAlign: 'right', fontFamily: "DiodrumRegular"}}>
                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="firstName" style={style.labelStyle}>{formData.secondLabel}</Label>
                                <Input type="text" name="firstName" id="firstName" placeholder=""
                                       style={style.textField}/>
                            </FormGroup>
                        </Col>
                        <Col md={6} style={{textAlign: 'right'}}>
                            <FormGroup>
                                <Label style={style.labelStyle} for="email">{formData.firstLabel}</Label>
                                <Input type="email" name="email" id="email" placeholder="" style={style.textField}/>
                            </FormGroup>
                        </Col>
                    </Row>

                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <Label style={style.labelStyle} for="phone">{formData.fourthLabel}</Label>
                                <Input type="text" name="phone" id="phone" placeholder="" style={style.textField}/>
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label style={style.labelStyle} for="jobTitle">{formData.thirdLabel}</Label>
                                <Input type="text" name="jobTitle" id="jobTitle" placeholder=""
                                       style={style.textField}/>
                            </FormGroup>
                        </Col>
                    </Row>

                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <Label style={style.labelStyle} for="organization">{formData.sixthLabel}</Label>
                                <Input type="text" name="organization" id="organization" placeholder=""
                                       style={style.textField}/>
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label style={style.labelStyle} for="membershipNumber">{formData.fifthLabel}</Label>
                                <Input type="text" name="membershipNumber" id="membershipNumber" placeholder=""
                                       style={style.textField}/>
                            </FormGroup>
                        </Col>
                    </Row>

                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <Label style={style.labelStyle} for="familyName">{formData.eightLabel}</Label>
                                <Input type="text" name="familyName" id="familyName" placeholder=""
                                       style={style.textField}/>
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label style={style.labelStyle} for="membershipType">{formData.seventhLabel}</Label>
                                <Input type="text" name="membershipNumber" id="membershipNumber" placeholder=""
                                       style={style.textField}/>
                            </FormGroup>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </Base>
    );
};

export default RegistrationForm2;
