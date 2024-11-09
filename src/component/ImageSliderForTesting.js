import React, {useState} from 'react';
import {Button, Card, Col, Container, Row} from 'reactstrap';
import rightArrow from "../asset/socialMedia/rightArrow.png";
import leftArrow from "../asset/socialMedia/leftArrow.png";
import icon1 from "../asset/icon_calender.png";
import icon2 from "../asset/icon_write.png";
import icon3 from "../asset/calender.png";
import HomeComponentSecTwo from "../component/HomeComponentSecTwo";
import NewImageSlider from "../component/NewImageSlider";
import HomeComponentSecThree from "../component/HomeComponentSecThree";
import LogoPage from "../pages/LogoPage"
import ConferencePage from "../pages/ConferencePage"


export const ImageSliderForTesting = () => {
    const data = [
        {
            title: "Discover the elegance of fragrance, crafted to elevate your senses. Each scent captures moments of luxury and grace, bringing essence to life. Unveil a world of aromatic charm, designed to leave a lasting impression. Step into a fragrance journey like no other.",
            img: icon1
        },
        {
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vulputate lacus nec feugiat congue. Phasellus auctor sapien id enim pharetra, sit amet tristique arcu convallis. Curabitur ut nisl at ex bibendum finibus.",
            img: icon2
        },
        {
            title: "Discover the essence of elegance with our handcrafted fragrances. Each scent is carefully curated to evoke memories and inspire emotions. Dive into a world where luxury meets art, and every bottle tells a story. Embrace the allure of our exclusive collection today.",
            img: icon3
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(data.length - 1);

    // Next Slide Function
    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === data.length - 1 ? 0 : prevIndex + 1
        );
    };

    // Previous Slide Function
    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? data.length - 1 : prevIndex - 1
        );
    };

    // Function to render components based on currentIndex
    const renderComponents = () => {
        switch (currentIndex) {
            case 0: // First Slide
                return (
                    <>
                        <Row>
                            <Col xs={12} md={12}>
                                <ConferencePage/>
                            </Col>
                        </Row>
                    </>
                );
            case 1: // Second Slide
                return (
                    <>
                        <Row>
                            <Col xs={12} md={12}>
                                <ConferencePage/>
                            </Col>
                        </Row>
                    </>
                );
            case 2: // Third Slide
                return (
                    <>
                        <Row>
                            <Col xs={12} md={12}>
                                <HomeComponentSecTwo/>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={12}>
                                <NewImageSlider/>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={12}>
                                <HomeComponentSecThree/>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={12}>
                                <LogoPage/>
                            </Col>
                        </Row>
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <Container fluid style={{marginTop: "-20px"}}>
            <Row className="justify-content-center align-items-center">
                {/*<h2 className='mb-4 text-center' style={{color: "rgb(13,13,157)", fontWeight: 'bold'}}>*/}
                {/*    المتحدثين*/}
                {/*</h2>*/}

                <Col xs={12} md={10} lg={11} className="d-flex justify-content-center">
                    <Card
                        style={{
                            borderTopLeftRadius: "0",
                            borderTopRightRadius: "0",
                            borderBottomLeftRadius: "20px",
                            borderBottomRightRadius: "20px",
                            borderTop: "5px solid #593996",
                            width: "100%",
                            maxWidth: "100%",
                            height: '500px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: '#ededed',
                            border: "none",
                            color: 'white',
                            fontSize: '18px',
                            fontWeight: 'bold',
                            position: 'relative',
                            textAlign: 'center',
                        }}
                    >

                        <Row style={{width: "85%"}}>
                            <Col xs={12} md={12} lg={6} className="mb-2"><img src={data[currentIndex].img}
                                                                              alt=""/></Col>
                            <Col xs={12} md={12} lg={6}><p style={{textAlign: "right"}}>{data[currentIndex].title}</p>
                            </Col>
                        </Row>
                        {/* Title */}
                        {/*<div style={{marginBottom: '40px', padding: '0 20px'}}>{data[currentIndex].title}</div>*/}

                        {/* Pagination Dots */}
                        <div style={{
                            position: 'absolute',
                            bottom: '30px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '8px',
                        }}>
                            {data.map((_, index) => (
                                <span
                                    key={index}
                                    style={{
                                        width: '10px',
                                        height: '10px',
                                        borderRadius: '50%',
                                        backgroundColor: currentIndex === index ? '#606060' : '#b0b0b0',
                                    }}
                                />
                            ))}
                        </div>

                        {/* Navigation Buttons */}
                        <div
                            style={{
                                position: 'absolute',
                                bottom: '10px',
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'space-between',
                                padding: '0 10px',
                            }}
                        >
                            <Button onClick={prevSlide} style={{backgroundColor: 'transparent', border: 'none'}}>
                                <img src={leftArrow} alt="Previous" style={{width: '25px', height: '35px'}}/>
                            </Button>
                            <Button onClick={nextSlide} style={{backgroundColor: 'transparent', border: 'none'}}>
                                <img src={rightArrow} alt="Next" style={{width: '25px', height: '35px'}}/>
                            </Button>
                        </div>
                    </Card>
                </Col>
            </Row>

            {/* Display Components Below Slider */}
            <div className="mt-4">{renderComponents()}</div>
        </Container>
    );
};
