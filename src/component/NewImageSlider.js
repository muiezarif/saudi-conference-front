import React, {useState} from 'react';
import {Button, Card, CardImg, Col, Container, Row} from 'reactstrap';
import image1 from "../asset/SliderImage/sliderImg1.png";
import image2 from "../asset/SliderImage/sliderImg2.png";
import image3 from "../asset/SliderImage/sliderImg3.png";
import image4 from "../asset/SliderImage/sliderImg4.png";
import rightArrow from "../asset/socialMedia/rightArrow.png";
import leftArrow from "../asset/socialMedia/leftArrow.png";

const NewImageSlider = () => {
    const data = [
        {title: "أ. إبتسام محمد الناصر", title2: 'المسمى الوظيفي', image: image1},
        {title: "أ. ناهد فهد ابراهيم", title2: 'المسمى الوظيفي', image: image2},
        {title: "أ. صالح خالد الفيصل", title2: 'المسمى الوظيفي', image: image3},
        {title: "أ. فهد فلاح العجمي", title2: 'المسمى الوظيفي', image: image4},
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const itemsToShow = window.innerWidth < 768 ? 1 : 4;

    const nextSlide = () => {
        if (currentIndex < data.length - itemsToShow) {
            setCurrentIndex(currentIndex + 1);
        } else {
            setCurrentIndex(0);
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        } else {
            setCurrentIndex(data.length - itemsToShow);
        }
    };

    return (
        <Container className="mt-2">
            <Row className="justify-content-center align-items-center">
                <h2 className='mb-5'
                    style={{textAlign: 'right', color: "rgb(13,13,157)", fontFamily: "DiodrumBold"}}>المتحدثين</h2>
                <Col xl={1} md={1} sm={2} xs={2} style={{textAlign: 'right'}}>
                    <Button onClick={prevSlide} className="mr-2"
                            style={{backgroundColor: 'transparent', border: 'none'}}>
                        <img src={leftArrow} alt="Previous" style={{width: '30px', height: '40px'}}/>
                    </Button>
                </Col>
                <Col xl={10} md={10} sm={8} xs={8} className="justify-content-center align-items-center">
                    <div style={{width: '100%', overflow: 'hidden'}}>
                        <div
                            style={{
                                display: 'flex',
                                transition: 'transform 0.5s ease',
                                transform: `translateX(-${currentIndex * 100 / itemsToShow}%)`,
                            }}
                        >
                            {data.map((d, index) => (
                                <div key={index} style={{flex: `0 0 ${100 / itemsToShow}%`, padding: '0 10px'}}>
                                    <Card style={{borderRadius: '10px', height: "300px"}}>
                                        <CardImg
                                            top
                                            width="80%"
                                            src={d.image}
                                            alt={d.title}
                                            style={{
                                                height: "auto",
                                                objectFit: "cover",
                                                borderRadius: "10px"
                                            }}
                                        />
                                        <div
                                            style={{
                                                position: 'absolute',
                                                bottom: '0',
                                                left: '50%',
                                                transform: 'translateX(-50%)',
                                                width: '100%',
                                                padding: "10px 0 13px 0",
                                                backgroundColor: 'rgb(96,2,184)',
                                                color: 'white',
                                                textAlign: 'center',
                                                lineHeight: '22px',
                                                borderRadius: '15px',
                                            }}
                                        >
                                            <div style={{display: 'flex', flexDirection: 'column', marginTop: '4px'}}>
                                                <p style={{
                                                    margin: '0',
                                                    fontFamily: "DiodrumBold",
                                                    fontSize: window.innerWidth < 768 ? '16px' : '20px'
                                                }}>{d.title}</p>
                                                <p style={{
                                                    margin: '0',
                                                    fontFamily: "DiodrumRegular",
                                                    fontSize: window.innerWidth < 768 ? '12px' : '15px'
                                                }}>{d.title2}</p>
                                            </div>
                                        </div>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </div>
                </Col>
                <Col xl={1} md={1} sm={2} xs={2} style={{textAlign: 'left'}}>
                    <Button onClick={nextSlide} className="ml-2"
                            style={{backgroundColor: 'transparent', border: 'none'}}>
                        <img src={rightArrow} alt="Next" style={{width: '30px', height: '40px'}}/>
                    </Button>
                </Col>
            </Row>
        </Container>
    );
};

export default NewImageSlider;
