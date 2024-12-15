import React, {useEffect, useState} from 'react';
import {Button, Card, CardImg, Col, Container, Row} from 'reactstrap';
import image1 from "../asset/SliderImage/sliderImg1.png";
import image2 from "../asset/SliderImage/sliderImg2.png";
import image3 from "../asset/SliderImage/sliderImg3.png";
import image4 from "../asset/SliderImage/sliderImg4.png";
import image5 from "../asset/SliderImage/C.png";
import rightArrow from "../asset/socialMedia/rightArrow.png";
import leftArrow from "../asset/socialMedia/leftArrow.png";
import "../style/NewImageSlider.css";
import {Element} from 'react-scroll';
import folder1_image1 from '../asset/Folder1/A1.png'
import folder1_image2 from '../asset/Folder1/A2.png'
import folder1_image3 from '../asset/Folder1/A3.png'
import folder1_image4 from '../asset/Folder1/A4.png'
import folder1_image5 from '../asset/Folder1/A5.png'
import folder1_image6 from '../asset/Folder1/A6.png'
import folder1_image7 from '../asset/Folder1/A7.png'
import folder1_image8 from '../asset/Folder1/A8.png'
import folder1_image9 from '../asset/Folder1/A9.png'
import folder1_image10 from '../asset/Folder1/A10.png'
import folder1_image11 from '../asset/Folder1/A11.png'
import folder1_image12 from '../asset/Folder1/A12.png'
import folder1_image13 from '../asset/Folder1/A13.png'
import folder1_image14 from '../asset/Folder1/A14.png'

import folder2_image1 from '../asset/Folder2/A1.png'
import folder2_image2 from '../asset/Folder2/A2.png'
import folder2_image3 from '../asset/Folder2/A3.png'
import folder2_image4 from '../asset/Folder2/A4.png'
import folder2_image5 from '../asset/Folder2/A5.png'
import folder2_image6 from '../asset/Folder2/A6.png'
import folder2_image7 from '../asset/Folder2/A7.png'
import folder2_image8 from '../asset/Folder2/A8.png'
import folder2_image9 from '../asset/Folder2/A9.png'
import folder2_image10 from '../asset/Folder2/A10.png'
import folder2_image11 from '../asset/Folder2/A11.png'

import folder3_image1 from '../asset/Folder3/A1.png'
import folder3_image2 from '../asset/Folder3/A2.png'
import folder3_image3 from '../asset/Folder3/A3.png'
import folder3_image4 from '../asset/Folder3/A4.png'
import folder3_image5 from '../asset/Folder3/A5.png'

const NewImageSlider = () => {
    const data = [
        {title: "أ. إبتسام محمد الناصر", title2: 'المسمى الوظيفي', image: image1},
        {title: "أ. ناهد فهد ابراهيم", title2: 'المسمى الوظيفي', image: image2},
        {title: "أ. صالح خالد الفيصل", title2: 'المسمى الوظيفي', image: image3},
        {title: "أ. فهد فلاح العجمي", title2: 'المسمى الوظيفي', image: image4},
        {title: "أ. فهد فلاح العجمي", title2: 'المسمى الوظيفي', image: image5},
    ];

    const folder1 = [
        {src: folder1_image1}, {src: folder1_image2}, {src: folder1_image3}, {src: folder1_image4}, {src: folder1_image5},
        {src: folder1_image6}, {src: folder1_image7}, {src: folder1_image8}, {src: folder1_image9}, {src: folder1_image10},
        {src: folder1_image11}, {src: folder1_image12}, {src: folder1_image13}, {src: folder1_image14}];

    const folder2 = [
        {src: folder2_image1}, {src: folder2_image2}, {src: folder2_image3}, {src: folder2_image4}, {src: folder2_image5},
        {src: folder2_image6}, {src: folder2_image7}, {src: folder2_image8}, {src: folder2_image9}, {src: folder2_image10},
        {src: folder2_image11}];

    const folder3 = [
        {src: folder3_image1}, {src: folder3_image2}, {src: folder3_image3}, {src: folder3_image4}, {src: folder3_image5},
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [FOneCurrentIndex, setFOneCurrentIndex] = useState(0);
    const [FThreeCurrentIndex, setFThreeCurrentIndex] = useState(0);
    const [itemsToShow, setItemsToShow] = useState(window.innerWidth < 768 ? 1 : 4);

    useEffect(() => {
        const handleResize = () => {
            setItemsToShow(window.innerWidth < 768 ? 1 : 4)
            setCurrentIndex(0);  // Reset to the first item to avoid overflow
            setFOneCurrentIndex(0);  // Reset to the first item to avoid overflow
            setFThreeCurrentIndex(0);  // Reset to the first item to avoid overflow
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const nextSlide = () => {
        if (currentIndex < folder1.length - itemsToShow) {
            setCurrentIndex(currentIndex + 1);
        } else {
            setCurrentIndex(0);
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        } else {
            setCurrentIndex(folder1.length - itemsToShow);
        }
    };

    const folder2NextSlide = () => {
        if (FOneCurrentIndex < folder2.length - itemsToShow) {
            setFOneCurrentIndex(FOneCurrentIndex + 1);
        } else {
            setFOneCurrentIndex(0);
        }
    };

    const folder2PrevSlide = () => {
        if (FOneCurrentIndex > 0) {
            setFOneCurrentIndex(FOneCurrentIndex - 1);
        } else {
            setFOneCurrentIndex(folder2.length - itemsToShow);
        }
    };

    const folder3NextSlide = () => {
        if (FThreeCurrentIndex < folder3.length - itemsToShow) {
            setFThreeCurrentIndex(FThreeCurrentIndex + 1);
        } else {
            setFThreeCurrentIndex(0);
        }
    };

    const folder3PrevSlide = () => {
        if (FThreeCurrentIndex > 0) {
            setFThreeCurrentIndex(FThreeCurrentIndex - 1);
        } else {
            setFThreeCurrentIndex(folder3.length - itemsToShow);
        }
    };

    return (
        <Element name='speakersection'>
            <Container className="mt-2">
                <h2 className='mb-5 custom-heading'>المتحدثين</h2>
                <Row className="justify-content-center align-items-center p-0 mb-5">
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
                                {folder1.map((d, index) => (
                                    <div key={index} style={{flex: `0 0 ${100 / itemsToShow}%`, padding: '0 10px'}}>
                                        <Card
                                            className="bg-transparent border-0 justify-content-center text-center text-white"
                                        >
                                            <div style={{position: "relative", textAlign: "center"}}>
                                                <CardImg
                                                    width="80%"
                                                    src={d.src}
                                                    alt="Image here"
                                                    style={{
                                                        height: "auto",
                                                        objectFit: "cover",
                                                        borderRadius: "10px"
                                                    }}
                                                />
                                            </div>
                                        </Card>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Col>
                    <Col xl={1} md={1} sm={1} xs={1} style={{margin: "0", padding: "0"}}>
                        <Button onClick={nextSlide} className="ml-2"
                                style={{backgroundColor: 'transparent', border: 'none', margin: "0", padding: "0"}}>
                            <img src={rightArrow} alt="Next" className="navigationArrows"/>
                        </Button>
                    </Col>
                </Row>
                <Row className="justify-content-center align-items-center p-0 mb-5">
                    <Col xl={1} md={1} sm={1} xs={1} style={{textAlign: 'right', margin: "0", padding: "0"}}>
                        <Button onClick={folder2PrevSlide} className="mr-2"
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
                                    transform: `translateX(-${FOneCurrentIndex * 100 / itemsToShow}%)`,
                                }}
                            >
                                {folder2.map((d, index) => (
                                    <div key={index} style={{flex: `0 0 ${100 / itemsToShow}%`, padding: '0 10px'}}>
                                        <Card
                                            className="bg-transparent border-0 justify-content-center text-center text-white"
                                        >
                                            <div style={{position: "relative", textAlign: "center"}}>
                                                <CardImg
                                                    width="80%"
                                                    src={d.src}
                                                    alt="Image here"
                                                    style={{
                                                        height: "auto",
                                                        objectFit: "cover",
                                                        borderRadius: "10px"
                                                    }}
                                                />
                                            </div>
                                        </Card>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Col>
                    <Col xl={1} md={1} sm={1} xs={1} style={{margin: "0", padding: "0"}}>
                        <Button onClick={folder2NextSlide} className="ml-2"
                                style={{backgroundColor: 'transparent', border: 'none', margin: "0", padding: "0"}}>
                            <img src={rightArrow} alt="Next" className="navigationArrows"/>
                        </Button>
                    </Col>
                </Row>
                <Row className="justify-content-center align-items-center p-0 m-0">
                    <Col xl={1} md={1} sm={1} xs={1} style={{textAlign: 'right', margin: "0", padding: "0"}}>
                        <Button onClick={folder3PrevSlide} className="mr-2"
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
                                    transform: `translateX(-${FThreeCurrentIndex * 100 / itemsToShow}%)`,
                                }}
                            >
                                {folder3.map((d, index) => (
                                    <div key={index} style={{flex: `0 0 ${100 / itemsToShow}%`, padding: '0 10px'}}>
                                        <Card
                                            className="bg-transparent border-0 justify-content-center text-center text-white"
                                        >
                                            <div style={{position: "relative", textAlign: "center"}}>
                                                <CardImg
                                                    width="80%"
                                                    src={d.src}
                                                    alt="Image here"
                                                    style={{
                                                        height: "auto",
                                                        objectFit: "cover",
                                                        borderRadius: "10px"
                                                    }}
                                                />
                                            </div>
                                        </Card>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Col>
                    <Col xl={1} md={1} sm={1} xs={1} style={{margin: "0", padding: "0"}}>
                        <Button onClick={folder3NextSlide} className="ml-2"
                                style={{backgroundColor: 'transparent', border: 'none', margin: "0", padding: "0"}}>
                            <img src={rightArrow} alt="Next" className="navigationArrows"/>
                        </Button>
                    </Col>
                </Row>
            </Container>
        </Element>
    );
};

export default NewImageSlider;
