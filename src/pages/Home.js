import React, {useEffect, useState} from "react";
import {Base} from "../component/Base";
import {Button, Card, Col, Row} from "reactstrap";
import personImage from "../asset/bannerBottomImage.png";
import mobileImage from "../asset/mobileViewPerson@4x.png";
import "../style/fonts.css";
import "../style/HomeCompSecOne.css";
import icon1 from "../asset/icon_mm.png";
import icon2 from "../asset/icon_mic.png";
import icon3 from "../asset/icon_calendar.png";
import leftArrow from "../asset/socialMedia/leftArrow.png";
import rightArrow from "../asset/socialMedia/rightArrow.png";
import HomeComponentSecTwo from "../component/HomeComponentSecTwo";
import NewImageSlider from "../component/NewImageSlider";
import {HomeComponentSecThree} from "../component/HomeComponentSecThree";
import LogoPage from "./LogoPage";
import image1 from "../asset/SliderImage/1.png";
import image2 from "../asset/SliderImage/2.png";
import image3 from "../asset/SliderImage/3.png";
import image4 from "../asset/SliderImage/4.png";
import image5 from "../asset/SliderImage/5.png";
import {useLocation} from "react-router-dom";
import {scroller} from "react-scroll";


export function Home() {
    const location = useLocation()
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const calculateTimeLeft = () => {
            const now = new Date();
            const difference = new Date("2024-12-22T00:00:00") - now;

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / (1000 * 60)) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                });
            } else {
                clearInterval(timer);
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        };

        const timer = setInterval(calculateTimeLeft, 1000);

        return () => clearInterval(timer); // Cleanup on unmount
    }, ["2024-12-22T00:00:00"]);
    useEffect(() => {

        window.scrollTo(0, 0);

        // Check if there's a hash in the URL and scroll to that section
        const hash = location.hash.replace("#", ""); // Remove '#' from hash
        if (hash) {
            scroller.scrollTo(hash, {
                duration: 800,
                delay: 0,
                smooth: "easeInOutQuart",
            });
        }
    }, [location.hash]);

    const [imageSrc, setImageSrc] = useState(personImage);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 950) {
                setImageSrc(mobileImage); // Mobile image
            } else {
                setImageSrc(personImage); // Default image
            }
        };

        // Initial check
        handleResize();

        // Add resize listener
        window.addEventListener('resize', handleResize);

        // Cleanup listener on unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const data = [
        {
            title: "ﻳُﺴﻬﻢ",
            subtitle: " في إبراز أهم مستجدات وتطورات قطاع المحاماة والاستشارات القانونية، والدور المهني للهيئة السعودية للمحامين في تطوير القطاع، وحصر التحديات والفرص المهنية للمنشآت القانونية، مما يؤثر إيجابًا في موثوقية التأهيل المهني، ويعزز تمكين المهن القانونية وقطاعي الأعمال والاستثمار، ويحقق رؤية المملكة (2030)",
            img: icon1
        },
        {
            title: "ﻳﻨﺎﻗﺶ",
            subtitle: " المؤتمر عددًا من المحاور ذات العلاقة بتطورات قطاع المحاماة والاستشارات القانونية في المملكة وأثرها الإيجابي على بيئة الأعمال والاستثمار، وتعزيز التأهيل والتمكين للممارس القانونية في المملكة بهدف رفع مستوى الممارسة المهنية",
            img: icon2
        },
        {
            title: " ﻳﻨﻌﻘﺪ",
            subtitle: " ﻣﺆﺗﻤﺮ ﺍﻟﻤﺤﺎﻣﺎﺓ ﺍﻟﺴﻌﻮﺩﻱ ﻓﻲ ﺩﻳﺴﻤﺒﺮ 2024ﻡ ﺑﺘﻨﻈﻴﻢ ﻣﻦ ﺍﻟﻬﻴﺌﺔ ﺍﻟﺴﻌﻮﺩﻳﺔ ﻟﻠﻤﺤﺎﻣﻴﻦ ﻳﻮﻣﻲ 22 ﻭ 23 ﺩﻳﺴﻤﺒﺮ 2024ﻡ ﺑﻤﺪﻳﻨﺔ ﺍﻟﺮﻳﺎﺽ، في فندق الفيرمونت، ﺗﺤﺖ ﺷﻌﺎﺭ\"ﺗﻄﻮﺭﺍﺕ ﻗﻄﺎﻉ ﺍﻟﻤﺤﺎﻣﺎﺓ ﻭﺍﻻﺳﺘﺸﺎﺭﺍﺕ ﺍﻟﻘﺎﻧﻮﻧﻴﺔ",
            img: icon3
        },
    ];

    const cardData = [
        {
            title: "أ. إبتسام محمد الناصر",
            text: "المسمى الوظيفي 1",
            image: image1,
            buttonText: "اعرف المزيد"
        },
        {
            title: "أ. ناهد فهد ابراهيم",
            text: "المسمى الوظيفي 2",
            image: image2,
            buttonText: "اعرف المزيد"
        },
        {
            title: "أ. صالح خالد الفيصل",
            text: "المسمى الوظيفي 3",
            image: image3,
            buttonText: "اعرف المزيد"
        },
        {
            title: "أ. فهد فلاح العجمي",
            text: "المسمى الوظيفي 4",
            image: image4,
            buttonText: "اعرف المزيد"
        },
        {
            title: "أ. شخص جديد",
            text: "المسمى الوظيفي 5",
            image: image5,
            buttonText: "اعرف المزيد"
        }
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

    return (
        <Base>
            {/* Person Container */}
            <section id="firstsectionone">

            <div className="customDiv">
                <Row className="d-flex">
                    {/* Mobile-only Column */}
                    <Col xs={12} className="text-center mb-5 d-block d-lg-none">
                        <div className="d-flex justify-content-center gap-2">
                            {/* {['ﺍﻻﻳﺎﻡ', 'ﺍﻟﺴﺎﻋﺎﺕ', 'ﺍﻟﺪﻗﺎﺋﻖ', 'ﺍﻟﺜﻮﺍﻧﻲ'].map((text, index) => (
                                <div
                                    key={index}
                                    className={`mobileViewCard ${index === 0 ? 'mobileViewCardLeft' : ''} ${index === 3 ? 'mobileViewCardRight' : ''}`}
                                >
                                    <h6 className="mobileViewCardHeading">00</h6>
                                    <p className="mobileViewCardSubHeading">{text}</p>
                                </div>
                            ))} */}

                                <div
                                    className={`mobileViewCard mobileViewCardLeft`}
                                >
                                    <h6 className="mobileViewCardHeading">{timeLeft.days}</h6>
                                    <p className="mobileViewCardSubHeading">الأيام</p>
                                </div>
                                <div
                                    className={`mobileViewCard `}
                                >
                                    <h6 className="mobileViewCardHeading">{timeLeft.hours}</h6>
                                    <p className="mobileViewCardSubHeading">ﺍﻟﺴﺎﻋﺎﺕ</p>
                                </div>
                                <div
                                    className={`mobileViewCard `}
                                >
                                    <h6 className="mobileViewCardHeading">{timeLeft.minutes}</h6>
                                    <p className="mobileViewCardSubHeading">ﺍﻟﺪﻗﺎﺋﻖ</p>
                                </div>
                                <div
                                    className={`mobileViewCard mobileViewCardRight`}
                                >
                                    <h6 className="mobileViewCardHeading">{timeLeft.seconds}</h6>
                                    <p className="mobileViewCardSubHeading">ﺍﻟﺜﻮﺍﻧﻲ</p>
                                </div>
                        </div>
                    </Col>

                    {/* Image Column */}
                    <Col xl={5} lg={5} md={8} sm={12} xs={12} className="mb-3">
                        <img src={imageSrc} className="img-fluid image" alt="Person"/>
                    </Col>

                    {/* Content Column - Displayed on larger screens only */}
                    <Col xl={7} lg={7} md={4} sm={12} xs={12} className="customCard">
                        <div className="d-inline-flex flex-wrap text-end gap-3 d-none d-lg-flex justify-content-end">
                            {/* {['ﺍﻻﻳﺎﻡ', 'ﺍﻟﺴﺎﻋﺎﺕ', 'ﺍﻟﺪﻗﺎﺋﻖ', 'ﺍﻟﺜﻮﺍﻧﻲ'].map((text, index) => (
                                <div
                                    key={index}
                                    className={`cardBase ${index === 0 ? 'cardLeft' : ''} ${index === 3 ? 'cardRight' : ''}`}
                                >
                                    <h6 className="cardHeading">00</h6>
                                    <p className="cardSubHeading">{text}</p>
                                </div>
                            ))} */}

                                <div
                                    className={`cardBase cardLeft`}
                                >
                                    <h6 className="cardHeading">{timeLeft.days}</h6>
                                    <p className="cardSubHeading">الأيام</p>
                                </div>
                                <div
                                    className={`cardBase`}
                                >
                                    <h6 className="cardHeading">{timeLeft.hours}</h6>
                                    <p className="cardSubHeading">ﺍﻟﺴﺎﻋﺎﺕ</p>
                                </div>
                                <div
                                    className={`cardBase`}
                                >
                                    <h6 className="cardHeading">{timeLeft.minutes}</h6>
                                    <p className="cardSubHeading">ﺍﻟﺪﻗﺎﺋﻖ</p>
                                </div>
                                <div
                                    className={`cardBase cardRight`}
                                >
                                    <h6 className="cardHeading">{timeLeft.seconds}</h6>
                                    <p className="cardSubHeading">ﺍﻟﺜﻮﺍﻧﻲ</p>
                                </div>
                        </div>

                        <div className="paragraphAlignment">
                            <p className="paragraph">
                                ﺑﺮﻋﺎﻳﺔ ﻣﻌﺎﻟﻲ ﻭﺯﻳﺮ ﺍﻟﻌﺩﻝ ﺭﺋﻴﺲ ﻣﺠﻠﺲ<br/>
                                ﺇﺩﺍﺭﺓ ﺍﻟﻬﻴﺌــــﺔ ﺍﻟﺴﻌـــﻮﺩﻳﺔ ﻟﻠﻤﺤﺎﻣﻴـــﻦ
                            </p>
                            <p className="heading">ﺩ. ﻭﻟﻴﺪ ﺑﻦ ﻣﺤﻤﺪ ﺍﻟﺼﻤﻌﺎﻧﻲ</p>
                            <p className="subHeading">ﻋـﻦ ﺍﻟﻤﺆﺗﻤـﺮ</p>
                        </div>
                    </Col>
                </Row>
            </div>
                                </section>
            <div style={{marginTop: "-20px"}} className="mainDiv">
                <Row className="justify-content-center align-items-center">

                    <Col xs={12} md={10} lg={11} className="d-flex justify-content-between">
                        <Card className="customBox">

                            {/* Content */}
                            <Row style={{width: "85%"}}>
                                <Col xs={3} md={4} lg={4} className="mb-2 custom_slider_img_p">
                                    <img className="custom_slider_img" src={data[currentIndex].img} alt="" width={300}/>
                                </Col>
                                <Col xs={9} md={8} lg={8}
                                     className="d-flex justify-content-center align-items-center align-content-center">
                                <span className="custom_slider_text">
                                    <span
                                        style={{
                                            fontFamily: "DiodrumBold",
                                            color: "#2c318b"
                                        }}>
                                        {data[currentIndex].title}
                                    </span>
                                    {data[currentIndex].subtitle}
                                </span>
                                </Col>
                            </Row>

                            {/* Pagination Dots */}
                            <div className="absolute-center">
                                {data.map((_, index) => (
                                    <span
                                        key={index}
                                        className={`navigationDots ${currentIndex === index ? 'active' : ''}`}
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
                                    justifyContent: 'center', // Center the buttons horizontally
                                    padding: '0 10px',
                                    gap: '200px'
                                }}
                            >
                                <Button onClick={prevSlide} style={{backgroundColor: 'transparent', border: 'none'}}>
                                    <img src={leftArrow} alt="Previous" className="navigationButtons"/>
                                </Button>
                                <Button onClick={nextSlide} style={{backgroundColor: 'transparent', border: 'none'}}>
                                    <img src={rightArrow} alt="Next" className="navigationButtons"/>
                                </Button>
                            </div>
                        </Card>
                    </Col>
                </Row>
                
                <HomeComponentSecTwo/>
                <NewImageSlider/>
                <HomeComponentSecThree/>
                <LogoPage/>
            </div>
        </Base>
    )
}