import React from 'react';
import {Card, CardBody, Col, Container, Form, FormGroup, Input, Label, Row} from 'reactstrap';
import {Base} from "../component/Base";

const RegistrationForm = () => {
    const style = {
        para:{
            margin:'0'
        },
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
            color: '#ffffff',
            textAlign:'right'
        }
    }
    return (
       <Base>
           <Container className="mt-5">
               <Row>
                   <Col className="text-center">
                       <h2 style={{color: '#0b1a8a', textAlign: 'right', fontWeight: 'bold'}}>فئات التذاكر</h2>
                       <h3 style={{color: '#009688', textAlign: 'right', fontWeight: 'bold'}}>مزايا فئة VIP:</h3>
                   </Col>
               </Row>
               <Row className= 'mt-2' style={{textAlign: "right"}}>
                   <Col md="6">
                       <div>
                           <div className="d-inline-flex">
                               <p style={style.para}>باجات مخصصة</p>
                               <div style={style.dot}/>
                           </div>
                       </div>
                       <div>
                           <div className="d-inline-flex">
                               <p style={style.para}>جناح خاص في فندق الفيرمونت</p>
                               <div style={style.dot}/>
                           </div>
                       </div>
                       <div>
                           <div className="d-inline-flex">
                               <p style={style.para}>المقاعد الأمامية لورش العمل والجلسات الحوارية</p>
                               <div style={style.dot}/>
                           </div>
                       </div>
                       <div>
                           <div className="d-inline-flex">
                               <p style={style.para}>دعوة لحضور العشاء الختامي مع أصحاب المعالي والضيوف</p>
                               <div style={style.dot}/>
                           </div>
                       </div>
                   </Col>
                   <Col md="6">
                       <div>
                           <div className="d-inline-flex">
                               <p style={style.para}>حضور حفل الافتتاح في مقاعد أمامية مخصصة</p>
                               <div style={style.dot}/>
                           </div>
                       </div>
                       <div>
                           <div className="d-inline-flex">
                               <p style={style.para}>خدمة صف السيارات</p>
                               <div style={style.dot}/>
                           </div>
                       </div>
                       <div>
                           <div className="d-inline-flex">
                               <p style={style.para}>استقبال من خلال بوابة مخصصة</p>
                               <div style={style.dot}/>
                           </div>
                       </div>
                       <div>
                           <div className="d-inline-flex">
                               <p style={style.para}>ضيافة فاخرة</p>
                               <div style={style.dot}/>
                           </div>
                       </div>
                   </Col>
               </Row>
               <Row>
                   <Col className="text-center m-2">
                       <h4 className="" style={{color: '#333', textAlign: 'right', fontWeight: 'bold'}}>بيانات التسجيل
                           الرئيسية</h4>
                   </Col>
               </Row>
               <Form style={{textAlign: 'right'}}>
                   <Row form>
                       <Col md={6}>
                           <FormGroup>
                               <Label for="firstName" style={{textAlign: 'right'}}>الاسم الأول</Label>
                               <Input type="text" name="firstName" id="firstName" placeholder="" style={style.textField}/>
                           </FormGroup>
                       </Col>
                       <Col md={6} style={{textAlign: 'right'}}>
                           <FormGroup>
                               <Label for="email">البريد الإلكتروني</Label>
                               <Input type="email" name="email" id="email" placeholder="" style={style.textField}/>
                           </FormGroup>
                       </Col>
                   </Row>

                   <Row form>
                       <Col md={6}>
                           <FormGroup>
                               <Label for="phone">رقم الجوال</Label>
                               <Input type="text" name="phone" id="phone" placeholder="" style={style.textField}/>
                           </FormGroup>
                       </Col>
                       <Col md={6}>
                           <FormGroup>
                               <Label for="jobTitle">المسمى الوظيفي</Label>
                               <Input type="text" name="jobTitle" id="jobTitle" placeholder="" style={style.textField}/>
                           </FormGroup>
                       </Col>
                   </Row>

                   <Row form>
                       <Col md={6}>
                           <FormGroup>
                               <Label for="organization">اسم الجهة</Label>
                               <Input type="text" name="organization" id="organization" placeholder=""
                                      style={style.textField}/>
                           </FormGroup>
                       </Col>
                       <Col md={6}>
                           <FormGroup>
                               <Label for="membershipNumber">رقم العضوية</Label>
                               <Input type="text" name="membershipNumber" id="membershipNumber" placeholder=""
                                      style={style.textField}/>
                           </FormGroup>
                       </Col>
                   </Row>

                   <Row form>
                       <Col md={6}>
                           <FormGroup>
                               <Label for="familyName">اسم العائلة</Label>
                               <Input type="text" name="familyName" id="familyName" placeholder=""
                                      style={style.textField}/>
                           </FormGroup>
                       </Col>
                       <Col md={6}>
                           <FormGroup>
                               <Label for="membershipType">نوع العضوية</Label>
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

export default RegistrationForm;
