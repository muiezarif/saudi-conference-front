import React from "react";
import {Container, Row, Col, Button} from "reactstrap";
import {ArrowDown} from 'react-bootstrap-icons';
import Logo from "../asset/Logo.png";
import BackGroundImage from "../asset/BackGround.png";
import img1 from "../asset/socialMedia/img1.png";
import img2 from "../asset/socialMedia/img2.png";
import img3 from "../asset/socialMedia/img3.png";
import img4 from "../asset/socialMedia/img4.png";
import img5 from "../asset/socialMedia/img5.png";
import img6 from "../asset/socialMedia/img6.png";


const MainPage = () => {
    const style = {
        rowStyle: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        },
        button: {
            backgroundColor: 'white',
            color: 'rgb(12,12,150)',
            width: '250px',
            borderRadius: '30px',
            fontWeight: 'bold',
        }
    }
    return (
        <div style={{minHeight: "100vh", background: `url(${BackGroundImage})`, color: "white", marginTop: "-1rem"}}>
            {/* Main Content Section */}
            <Container className="text-center py-5">
                <Row style={style.rowStyle}>
                    <Col className="d-flex justify-content-center" style={{textAlign: 'center'}}>
                        <img className="mb-2" src={Logo} alt="Logo" style={{width: "80px"}}/>
                    </Col>
                </Row>
                <Row style={style.rowStyle}>
                    <Col className="d-flex justify-content-center" style={{textAlign: 'center'}}>
                        <h5>مؤتمر المحاماة السعودي</h5>
                    </Col>
                </Row>
                <Row style={style.rowStyle}>
                    <Col className="d-flex justify-content-center" style={{textAlign: 'center'}}>
                        <p>Saudi Lawyers Conference</p>
                    </Col>
                </Row>

                <Row className="justify-content-center">
                    <Col md="8">
                        <h1 className="display-4 mb-3 mt-5" style={{fontWeight: 'bold'}}>تحت عنوان</h1>
                        <p className="lead mb-4">تطورات قطاع المحاماة والاستشارات القانونية</p>

                        <Button className="mb-5" style={style.button} size="lg">ﺳﺠـﻞ ﺍﻵﻥ</Button>
                    </Col>
                </Row>

                <Row className="mb-4 justify-content-center text-center">
                    <Col className="d-flex justify-content-center align-items-center ">
                        <div style={{display: 'flex', justifyContent: 'center', textAlign: 'center'}}>
                            <p style={{margin: '0', padding: '0 10px'}}>
                                مدينة الرياض
                            </p>
                            <p style={{margin: '0', paddingLeft: "20px"}}>
                                م
                            </p>
                            <p style={{margin: '0',}}>
                                2024
                            </p>
                            <p style={{margin: '0', paddingLeft: "10px"}}>
                                ديسمبر
                            </p>
                            <p style={{margin: '0'}}>
                                22 - 23
                            </p>
                        </div>
                    </Col>
                </Row>
                <Row className="mb-4" style={{marginTop: "-150px"}}>
                    <Col md="auto" className="d-flex flex-column align-items-start">
                        {[
                            {href: "#youtube", img: img6, alt: "YouTube"},
                            {href: "#linkedin", img: img5, alt: "LinkedIn"},
                            {href: "#snapchat", img: img4, alt: "Snapchat"},
                            {href: "#instagram", img: img3, alt: "Instagram"},
                            {href: "#facebook", img: img2, alt: "Facebook"},
                            {href: "#twitter", img: img1, alt: "Twitter"},
                        ].map((item, index) => (
                            <a key={index} href={item.href} className="text-white mb-3">
                                <img
                                    src={item.img}
                                    alt={item.alt}
                                    style={{width: '30px', height: '30px'}}
                                />
                            </a>
                        ))}
                    </Col>
                </Row>
                <Row
                    className="justify-content-center align-items-center"
                    style={{
                        marginTop: "-120px", textAlign: "center" // vertically center karne ke liye
                    }}>
                    <Col md="4" className="text-center">
                        <Button
                            color="link"
                            style={{
                                paddingLeft: '150px',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                textDecoration: 'none',
                                color: '#000'
                            }}>
                            <div style={{
                                width: '50px',
                                height: '50px',
                                borderRadius: '50%',
                                backgroundColor: '#fff',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                boxShadow: '0px 2px 6px rgba(0,0,0,0.1)'
                            }}>
                                <ArrowDown color='rgb(12,12,150)' size={35}/>
                            </div>
                            <span style={{marginTop: '8px', color: 'white', fontSize: '20px'}}>عن المؤتمر</span>
                        </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
export default MainPage;