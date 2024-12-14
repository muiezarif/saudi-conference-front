import React, {useEffect} from 'react';
import {Col, Container, Row} from 'reactstrap';
import image1 from "../asset/companyLogo/Board of Grievances.png";
import image2 from "../asset/companyLogo/Eisar.png";
import image3 from "../asset/companyLogo/General Authority for Competition.png";
import image4 from "../asset/companyLogo/Ministry of Justice.png";
import image5 from "../asset/companyLogo/Ministry-of-Commerce-01-1.png";
import image6 from "../asset/companyLogo/Quality of Life Program.png";
import image7 from "../asset/companyLogo/Saudi Business Center-01.png";
import image8 from "../asset/companyLogo/Social-Development-Bank-01-01.png";
import image9 from "../asset/companyLogo/Zakat Tax and Customs Authority 2-01.png";
import { Element } from 'react-scroll';

const LogoPage = () => {

    // Inline styles for images
    const imageStyle = {
        width: '250px',
        height: 'auto',
        display: 'block',
        margin: '0 auto'
    };

    // Automatically scroll to the section when the component is rendered
    useEffect(() => {
        const logoSection = document.getElementById('logoPage');
        if (logoSection) {
            logoSection.scrollIntoView({behavior: 'smooth'});
        }
    }, []);

    return (
        <Element name='logosection'>
            <section id='logosection'>
        <Container className="my-5">
            {/* first row company logo */}
            <h2 className="mb-4" style={{color: '#2a2a94', fontFamily: 'DiodrumBold', textAlign: 'right'}}>الجهات
                المشاركة</h2>
            <Row className="justify-content-center align-items-center mb-5" style={{gap: '55px'}}>
                <Col xs="6" sm="4" md="2" className="text-center mb-4">
                    <img src={image5} alt="Zakat, Tax and Customs Authority" style={imageStyle}/>
                </Col>
                <Col xs="6" sm="4" md="2" className="text-center mb-4">
                    <img src={image4} alt="Ministry of Industry and Mineral Resources" style={imageStyle}/>
                </Col>
                <Col xs="6" sm="4" md="2" className="text-center mb-4">
                    <img src={image3} alt="Ministry of Environment Water & Agriculture" style={imageStyle}/>
                </Col>
                <Col xs="6" sm="4" md="2" className="text-center mb-4">
                    <img src={image2} alt="Monshaat" style={imageStyle}/>
                </Col>
                <Col xs="6" sm="4" md="2" className="text-center mb-4">
                    <img src={image1} alt="Ministry of Commerce" style={imageStyle}/>
                </Col>
            </Row>

            {/* second row company logo */}
            <h2 className="mb-4" style={{color: '#2a2a94', fontFamily: "DiodrumBold", textAlign: 'right'}}>الرعاة</h2>
            <Row className="justify-content-center align-items-center mb-5" style={{gap: '55px'}}>
                <Col xs="6" sm="4" md="2" className="text-center mb-4">
                    <img src={image6} alt="Zakat, Tax and Customs Authority" style={imageStyle}/>
                </Col>
                <Col xs="6" sm="4" md="2" className="text-center mb-4">
                    <img src={image7} alt="Ministry of Industry and Mineral Resources" style={imageStyle}/>
                </Col>
                <Col xs="6" sm="4" md="2" className="text-center mb-4">
                    <img src={image8} alt="Ministry of Environment Water & Agriculture" style={imageStyle}/>
                </Col>
                <Col xs="6" sm="4" md="2" className="text-center mb-4">
                    <img src={image9} alt="Monshaat" style={imageStyle}/>
                </Col>
                {/* <Col xs="6" sm="4" md="2" className="text-center mb-4">
                    <img src={image1} alt="Ministry of Commerce" style={imageStyle}/>
                </Col> */}
            </Row>
        </Container>
        </section>
        </Element>
    );
}

export default LogoPage;
