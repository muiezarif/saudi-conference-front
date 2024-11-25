import {Col, Row} from "reactstrap";
import personImage from '../asset/bannerBottomImage.png';
import mobileImage from '../asset/mobileViewPerson@4x.png';
import "../style/fonts.css";
import "../style/HomeCompSecOne.css";
import {useEffect, useState} from "react";
import { Element } from "react-scroll";
 


export function HomeComponentSecOne({secondSectionRef}) {
    const [imageSrc, setImageSrc] = useState(personImage);
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
        const handleResize = () => {
            if (window.innerWidth <= 985) {
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

    return (
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
                                    <p className="mobileViewCardSubHeading">ﺍﻻﻳﺎﻡ</p>
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
                <Col xl={5} lg={5} md={8} sm={6} xs={12} className="mb-3">
                    <img src={imageSrc} className="img-fluid image" alt="Person"/>
                </Col>

                {/* Content Column - Displayed on larger screens only */}
                <Col xl={7} lg={7} md={4} sm={6} xs={12} className="customCard">
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
                                    <p className="cardSubHeading">ﺍﻻﻳﺎﻡ</p>
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


        
    );
}
