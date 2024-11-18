import React, {useEffect} from 'react';
import {Col, Container, Row} from 'reactstrap';
import image1 from "../asset/companyLogo/Asset 1.png";
import image2 from "../asset/companyLogo/Asset 2.png";
import image3 from "../asset/companyLogo/Asset 3.png";
import image4 from "../asset/companyLogo/Asset 4.png";
import image5 from "../asset/companyLogo/Asset 5.png";

const LogoPage = () => {

    // Inline styles for images
    const imageStyle = {
        width: '150px',
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
        <Container className="my-5" id="logoPage">
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
        </Container>
    );
}

export default LogoPage;
