import {Col, Container, Row} from "reactstrap";
import personImage from '../asset/bannerBottomImage.png';
import mobileImage from '../asset/mobileViewPerson@4x.png';
import "../style/fonts.css";
import "../style/HomeCompSecOne.css";
import {useEffect, useState} from "react";

export function HomeComponentSecOne() {

    const [imageSrc, setImageSrc] = useState(personImage);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 1190) {
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
            <Row className="d-flex justify-content-between">
                <Col xl={6} md={12} sm={12} xs={12} className="mb-3">
                    <img src={imageSrc} className="img-fluid image" alt="Person"/>
                </Col>
                <Col xl={6} md={12} sm={12} xs={12} className="customCard">
                    <div className="d-inline-flex flex-wrap justify-content-center gap-3">
                        {['ﺍﻻﻳﺎﻡ', 'ﺍﻟﺴﺎﻋﺎﺕ', 'ﺍﻟﺪﻗﺎﺋﻖ', 'ﺍﻟﺜﻮﺍﻧﻲ'].map((text, index) => (
                            <div
                                key={index}
                                className={`cardBase ${index === 0 ? 'cardLeft' : ''} ${index === 3 ? 'cardRight' : ''}`}
                            >
                                <h6 className="cardHeading">00</h6>
                                <p className="cardSubHeading">{text}</p>
                            </div>
                        ))}
                    </div>

                    <div className="paragraphAlignment">
                        <p className="paragraph">
                            ﺑﺮﻋﺎﻳﺔ ﻣﻌﺎﻟﻲ ﻭﺯﻳﺮ ﺍﻟﻌﺪﻝ ﺭﺋﻴﺲ ﻣﺠﻠﺲ
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