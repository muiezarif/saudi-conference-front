import React, {useState} from 'react';
import {Button, Card, CardImg, Col, Row} from 'reactstrap';
import image1 from "../asset/SliderImage/sliderImg1.png";
import image2 from "../asset/SliderImage/sliderImg2.png";
import image3 from "../asset/SliderImage/sliderImg3.png";
import image4 from "../asset/SliderImage/sliderImg4.png";
import rightArrow from "../asset/socialMedia/rightArrow.png";
import leftArrow from "../asset/socialMedia/leftArrow.png";
import "../style/NewImageSlider.css";

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
        <div className="mt-2 px-5">
            <h2 className='mb-5 custom-heading'>المتحدثين</h2>
            <Row className="justify-content-center align-items-center p-0 m-0">
                <Col xl={1} md={1} sm={1} xs={1} style={{textAlign: 'right', margin: "0", padding: "0"}}>
                    <Button onClick={prevSlide} className="mr-2"
                            style={{backgroundColor: 'transparent', border: 'none', margin: "0", padding: "0"}}>
                        <img src={leftArrow} alt="Previous" className="navigationArrows"/>
                    </Button>
                </Col>
                <Col xl={10} md={10} sm={10} xs={10} className="justify-content-center align-items-center">
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
                                    <Card
                                        className="bg-transparent border-0 justify-content-center text-center text-white"
                                    >
                                        <div style={{position: "relative", textAlign: "center"}}>
                                            <CardImg
                                                width="80%"
                                                src={d.image}
                                                alt={d.title}
                                                style={{
                                                    height: "auto",
                                                    objectFit: "cover",
                                                    borderRadius: "10px"
                                                }}
                                            />
                                            <div className="custom-style">
                                                <p style={{
                                                    margin: '0',
                                                    fontFamily: "DiodrumBold",
                                                    fontSize: window.innerWidth < 768 ? '11px' : '16px'
                                                }}>{d.title}</p>
                                                <p style={{
                                                    margin: '0',
                                                    fontFamily: "DiodrumRegular",
                                                    fontSize: window.innerWidth < 768 ? '9px' : '10px'
                                                }}>{d.title2}</p>
                                            </div>
                                        </div>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </div>
                </Col>
                <Col xl={1} md={1} sm={1} xs={1} style={{textAlign: 'left', margin: "0", padding: "0"}}>
                    <Button onClick={nextSlide} className="ml-2"
                            style={{backgroundColor: 'transparent', border: 'none', margin: "0", padding: "0"}}>
                        <img src={rightArrow} alt="Next" className="navigationArrows"/>
                    </Button>
                </Col>
            </Row>
        </div>
    );
};

export default NewImageSlider;
