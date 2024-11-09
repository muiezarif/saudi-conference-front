import React, {useState} from 'react';
import {Button, Card, Col, Container, Row} from 'reactstrap';
import rightArrow from "../asset/socialMedia/rightArrow.png";
import leftArrow from "../asset/socialMedia/leftArrow.png";
import icon3 from "../asset/icon_calendar.png";
import icon2 from "../asset/icon_mic.png";
import icon1 from "../asset/icon_mm.png";
import HomeComponentSecTwo from "../component/HomeComponentSecTwo";
import NewImageSlider from "../component/NewImageSlider";
import HomeComponentSecThree from "../component/HomeComponentSecThree";
import LogoPage from "../pages/LogoPage"
import ConferencePage from "../pages/ConferencePage";
import "../style/CustomSliderImage.css"


export const ImageSliderForTesting = () => {
    const data = [
        {
            title: "ﻳُﺴﻬﻢ",
            subtitle: " ﻓﻲ ﺇﺑﺮﺍﺯ ﺃﻫﻢ ﻣﺴﺘﺠﺪﺍﺕ ﻭﺗﻄﻮﺭﺍﺕ ﻗﻄﺎﻉ ﺍﻟﻤﺤﺎﻣﺎﺓ ﻭﺍﻻﺳﺘﺸﺎﺭﺍﺕ ﺍﻟﻘﺎﻧﻮﻧﻴﺔ، ﻭﺍﻟﺪﻭﺭ ﺍﻟﻤﻬﻨﻲ ﻭﺍﻟﺘﺤﻮﻻﺕ ﺍﻟﺮﻗﻤﻴﺔ ﻭﺃﺛﺮﻫﺎ ﻋﻠﻰ ﺍﻟﺨﺪﻣﺎﺕ ﺍﻟﻘﺎﻧﻮﻧﻴﺔ، ﻟﻠﻬﻴﺌﺔ ﺍﻟﺴﻌﻮﺩﻳﺔ ﻟﻠﻤﺤﺎﻣﻴﻦ ﻓﻲ ﺗﻄﻮﻳﺮ ﺍﻟﻘﻄﺎﻉ، ﻭﺣﺼﺮ ﺍﻟﺘﺤﺪﻳﺎﺕ ﻭﺍﻟﻔﺮﺹ ﺍﻟﻤﻬﻨﻴﺔ ﻟﻠﻤﻨﺸﺂﺕ ﺍﻟﻘﺎﻧﻮﻧﻴﺔ؛ ﻣﻤﺎ ﻳﺆﺛﺮ ﺇﻳﺠﺎﺑًﺎ ﻓﻲ ﺯﻳﺎﺩﺓ ﻣﻮﺛﻮﻗﻴﺔ ﺍﻟﺘﺄﻫﻴﻞ ﺍﻟﻤﻬﻨﻲ، ﻭﻳﻌﺰﺯ ﺗﻤﻜﻴﻦ ﺍﻟﻤﻬﻦ ﺍﻟﻘﺎﻧﻮﻧﻴﺔ ﻭﻗﻄﺎﻉ ﺍﻷﻋﻤﺎﻝ ﻭﺍﻻﺳﺘﺜﻤﺎﺭ، ﻭﻳﺤﻘﻖ ﻣﺴﺘﻬﺪﻓﺎﺕ ﺭﺅﻳﺔ المملكة (٢٠٣٠)",
            img: icon1
        },
        {
            title: "ﻳﻨﺎﻗﺶ",
            subtitle: " ﺍﻟﻤﺆﺗﻤﺮ ﻋﺪﺩًﺍ ﻣﻦ ﺍﻟﻤﺤﺎﻭﺭ ﺫﺍﺕ ﺍﻟﻌﻼﻗﺔ ﺍﻟﻤﻤﻠﻜﺔ ﻭﺃﺛﺮﻫﺎ ﺍﻹﻳﺠﺎﺑﻲ ﻋﻠﻰ ﺑﻴﺌﺔ ﺍﻷﻋﻤﺎﻝ ﻭﺍﻻﺳﺘﺜﻤﺎﺭ ﺑﺘﻄﻮﺭﺍﺕ ﻗﻄﺎﻉ ﺍﻟﻤﺤﺎﻣﺎﺓ ﻭﺍﻻﺳﺘﺸﺎﺭﺍﺕ ﺍﻟﻘﺎﻧﻮﻧﻴﺔ ﻓﻲ ﺍﻟﻤﻬﻨﻴﺔ، ﻭﺗﻌﺰﻳﺰ ﺍﻟﺘﺄﻫﻴﻞ ﻭﺍﻟﺘﻤﻜﻴﻦ ﻟﻠﻤﻤﺎﺭﺱ ﺍﻟﻘﺎﻧﻮﻧﻲ. ﻓﻲ ﺍﻟﻤﻤﻠﻜﺔ ﻭﺫﻟﻚ ﺑﻬﺪﻑ ﺭﻓﻊ ﻣﺴﺘﻮﻯ ﺍﻟﻤﻤارسة المهنية.",
            img: icon2
        },
        {
            title: " ﻳﻨﻌﻘﺪ",
            subtitle: " ﻣﺆﺗﻤﺮ ﺍﻟﻤﺤﺎﻣﺎﺓ ﺍﻟﺴﻌﻮﺩﻱ ﻓﻲ ﺩﻳﺴﻤﺒﺮ 2024ﻡ ﺑﺘﻨﻈﻴﻢ ﻣﻦ ﺍﻟﻬﻴﺌﺔ ﺍﻟﺴﻌﻮﺩﻳﺔ ﻟﻠﻤﺤﺎﻣﻴﻦ ﻳﻮﻣﻲ 22 ﻭ 23 ﺩﻳﺴﻤﺒﺮ 2024ﻡ ﺑﻤﺪﻳﻨﺔ ﺍﻟﺮﻳﺎﺽ، ﺗﺤﺖ ﺷﻌﺎﺭ \"ﺗﻄﻮﺭﺍﺕ ﻗﻄﺎﻉ ﺍﻟﻤﺤﺎﻣﺎﺓ ﻭﺍﻻﺳﺘﺸﺎﺭﺍﺕ ﺍﻟﻘﺎﻧﻮﻧﻴﺔ",
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

                <Col xs={12} md={10} lg={11} className="d-flex justify-content-between">
                    <Card
                        style={{
                            borderTopLeftRadius: "0",
                            borderTopRightRadius: "0",
                            borderBottomLeftRadius: "20px",
                            borderBottomRightRadius: "20px",
                            borderRight: "0",
                            borderLeft: "0",
                            borderBottom: "0",
                            borderTop: "5px solid #593996",
                            width: "100%",
                            maxWidth: "100%",
                            padding: "120px 0 120px 0",
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: '#ededed',
                            fontFamily: "DiodrumMedium",
                            fontSize: '18px',
                            position: 'relative',
                            textAlign: 'center',
                        }}
                    >

                        <Row style={{width: "85%"}}>
                            <Col xs={12} md={12} lg={4} className="mb-2 custom_slider_img_p">
                                <img className="custom_slider_img" src={data[currentIndex].img} alt="" width={300}/>
                            </Col>
                            <Col xs={12} md={12} lg={8}
                                 className="d-flex justify-content-center align-items-center align-content-center">
                                <span style={{
                                    textAlign: "right",
                                    color: "#474748",
                                    fontFamily: "DiodrumRegular",
                                    fontSize: "33px"
                                }}><span
                                    style={{
                                        fontFamily: "DiodrumBold",
                                        color: "#2c318b"
                                    }}>{data[currentIndex].title}</span> {data[currentIndex].subtitle} </span>
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
