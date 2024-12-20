import React, {useEffect, useState} from 'react';
import {Col, Container, Row} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Base} from "../component/Base";
import iconSit from "../asset/icon_sit.png";
import iconCal from "../asset/icon_calender.png";
import iconClock from "../asset/icon_clock.png";
import iconWrite from "../asset/icon_write.png";
import image1 from '../asset/one.png'
import image2 from '../asset/two.png'

import '../style/Calendar.css';


const Calendar = () => {
    const headingData = {
        firstHeading: "ﺍﻷﺟﻨﺪﺓ",
        secondHeading: "ﻭﺭﺵ ﺍﻟﻌﻤﻞ"
    }
    const data = [
        {
            title: 'عنوان الجلسة',
            titleIcon: iconSit,
            date: '2024/12/23',
            dateIcon: iconCal,
            time: '9 - 10 صباحًا',
            timeIcon: iconClock
        },
        {
            title: 'عنوان الجلسة',
            titleIcon: iconSit,
            date: '2024/12/23',
            dateIcon: iconCal,
            time: '9 - 10 صباحًا',
            timeIcon: iconClock
        },
        {
            title: 'عنوان الجلسة',
            titleIcon: iconSit,
            date: '2024/12/23',
            dateIcon: iconCal,
            time: '9 - 10 صباحًا',
            timeIcon: iconClock
        }
    ]

    const data2 = [
        {
            title: 'عنوان الجلسة',
            titleIcon: iconWrite,
            date: '2024/12/23',
            dateIcon: iconCal,
            time: '9 - 10 صباحًا',
            timeIcon: iconClock
        },
        {
            title: 'عنوان الجلسة',
            titleIcon: iconWrite,
            date: '2024/12/23',
            dateIcon: iconCal,
            time: '9 - 10 صباحًا',
            timeIcon: iconClock
        },
        {
            title: 'عنوان الجلسة',
            titleIcon: iconWrite,
            date: '2024/12/23',
            dateIcon: iconCal,
            time: '9 - 10 صباحًا',
            timeIcon: iconClock
        }
    ]

    const [isMobile, setIsMobile] = useState("300px");
    const [height, setHeight] = useState("auto");
    const [minHeight, setMinHeight] = useState("798px");
    const [background, setBackground] = useState("#5f00b8");
    const [margin, setMargin] = useState("85px");
    const [rightColMargin, setRightColMargin] = useState("15px");
    const [gap, setGap] = useState("gap-4");
    const [customCardHeight, setCustomCardHeight] = useState("250px");
    const [padding, setPadding] = useState("0 180px 0 0 ");
    const [customFont, setCustomFont] = useState("25px")


    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;

            if (width >= 1000) {
                setIsMobile("260px");
                setHeight("250px");
                setMinHeight("auto");
                setMargin("0");
                // setBackground("orange");
                setRightColMargin("0");
            } else if (width >= 768 && width < 1000) {
                setIsMobile("250px");
                setHeight("250px");
                setMinHeight("auto");
                setMargin("85px");
                // setBackground("pink");
                setRightColMargin("0");
            } else if (width >= 768 && width < 800) {
                setIsMobile("250px");
                setHeight("798px");
                setMinHeight("auto");
                setMargin("95px");
                // setBackground("yellow");
                setRightColMargin("20px");
            } else if (width >= 410 && width < 768) {
                setIsMobile("250px");
                setHeight("526px");
                setMinHeight("auto");
                setMargin("85px");
                setPadding("0 20px 0 0");
                // setBackground("#D7B26D");
                setRightColMargin("35px");
                setCustomCardHeight("170px")
                setGap("gap-2");
                setCustomFont("18px")
            } else if (width >= 380 && width < 410) {
                setIsMobile("250px");
                setHeight("526px");
                setMinHeight("auto");
                setMargin("85px");
                // setBackground("red");
                setPadding("0 10px 0 0");
                setCustomCardHeight("170px")
                setRightColMargin("23px");
                setGap("gap-2");
                setCustomFont("18px")
            } else if (width < 380) {
                setIsMobile("250px");
                setHeight("526px");
                setMinHeight("auto");
                setMargin("85px");
                // setBackground("#AA5486");
                setCustomCardHeight("170px")
                setRightColMargin("10px");
                setGap("gap-2");
                setPadding("0");
                setCustomFont("18px")
            }
        };

        // Run initially to set values based on the current window size
        handleResize();

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <Base>
            <Container>
            <Row style={{display: "flex", justifyContent: "center"}}>
            <Col className={`d-flex justify-content-center flex-wrap`}>
            <img src={image1} className='imgBar'/>

            </Col>
            </Row>
            <Row style={{display: "flex", justifyContent: "center"}}>
            <Col className={`d-flex justify-content-center flex-wrap`}>
            <img src={image2} className='imgBar'/>

            </Col>
            </Row>

                {/* <h1 style={{
                    textAlign: "right",
                    fontFamily: "DiodrumBold",
                    marginBottom: "25px",
                    marginTop: "13rem",
                    color: "#0c0c9c",
                    padding: padding
                }}>{headingData.firstHeading}</h1>

                <Row style={{display: "flex", justifyContent: "center"}}>
                    <Col className={`d-flex justify-content-center flex-wrap ${gap}`}>
                        {data.map(item => (
                            <div style={{
                                backgroundColor: background,
                                width: isMobile,
                                height: customCardHeight,
                                alignContent: "center",
                                marginRight: margin,
                                fontFamily: 'DiodrumMedium',
                                fontSize: customFont
                            }}
                                 className="custom-card-text">
                                <div className="d-flex justify-content-center align-items-center gap-2 mb-2">
                                    <p className="text-white" style={{width:150,textAlign:"right",paddingRight:2}}>{item.title}</p>
                                    <img src={item.titleIcon} alt="" style={{width: "30px", height: "30px"}}/>
                                </div>
                                <div className="d-flex justify-content-center align-items-center gap-2 mb-2">
                                    <p className="text-white" style={{width:150,textAlign:"right",paddingRight:2}}>{item.date}</p>
                                    <img src={item.dateIcon} alt="" style={{width: "30px", height: "30px"}}/>
                                </div>
                                <div className="d-flex justify-content-center align-items-center gap-2">
                                    <p className="text-white" style={{width:150,textAlign:"right",paddingRight:2}}>{item.time}</p>
                                    <img src={item.timeIcon} alt="" style={{width: "30px", height: "30px"}}/>
                                </div>
                            </div>
                        ))
                        }
                        <div style={{
                            backgroundColor: "#00b4b2",
                            width: "80px",
                            height: height, 
                            minHeight: minHeight, 
                            alignContent: "center",
                            textAlign: "center",
                            color: "white",
                            position: window.innerWidth <= 768 ? "absolute" : "static",
                            right: window.innerWidth <= 768 ? 0 : "auto",
                            marginRight: rightColMargin,
                        }}>
                            <p style={{fontFamily: "DiodrumBold", fontSize: "55px"}}>1</p>
                            <p style={{fontFamily: "DiodrumMedium", fontSize: "25px", marginTop: "-3rem"}}>اليوم
                                الأول</p>
                        </div>
                    </Col>
                </Row>

                <h1 style={{
                    textAlign: "right",
                    marginTop: "50px",
                    fontFamily: "DiodrumBold",
                    marginBottom: "25px",
                    color: "#0c0c9c",
                    padding: padding
                }}>{headingData.secondHeading}</h1>
                <Row style={{display: "flex", justifyContent: "center"}}>
                    <Col className={`d-flex justify-content-center flex-wrap ${gap}`}>
                        {data2.map(item => (
                            <div style={{
                                backgroundColor: "#0c0c9c",
                                width: isMobile,
                                height: customCardHeight,
                                alignContent: "center",
                                marginRight: margin,
                                fontFamily: 'DiodrumMedium',
                                fontSize: customFont
                            }}>
                                <div className="d-flex justify-content-center  align-items-center gap-2 mb-2">
                                    < p className="text-white" style={{width:150,textAlign:"right",paddingRight:2}}>{item.title}</p>
                                    <img src={item.titleIcon} alt="" style={{width: "30px", height: "30px"}}/>
                                </div>
                                <div className="d-flex justify-content-center  align-items-center gap-2 mb-2">
                                    <p className="text-white" style={{width:150,textAlign:"right",paddingRight:2}}>{item.date}</p>
                                    <img src={item.dateIcon} alt="" style={{width: "30px", height: "30px"}}/>
                                </div>
                                <div className="d-flex justify-content-center  align-items-center gap-2">
                                    <p className="text-white" style={{width:150,textAlign:"right",paddingRight:2}}>{item.time}</p>
                                    <img src={item.timeIcon} alt="" style={{width: "30px", height: "30px"}}/>
                                </div>
                            </div>
                        ))
                        }
                        <div style={{
                            backgroundColor: "#00b4b2",
                            width: "80px",
                            height: height, // Responsive height
                            minHeight: minHeight, // Mobile view minHeight
                            alignContent: "center",
                            textAlign: "center",
                            color: "white",
                            position: window.innerWidth <= 768 ? "absolute" : "static", // Position change on mobile
                            right: window.innerWidth <= 768 ? 0 : "auto",
                            marginRight: rightColMargin,
                        }}>
                            <p style={{fontFamily: "DiodrumBold", fontSize: "55px"}}>2</p>
                            <p style={{fontFamily: "DiodrumMedium", fontSize: "25px", marginTop: "-3rem"}}>اليوم
                                الثاني</p>
                        </div>
                    </Col>
                </Row> */}

            </Container>
        </Base>
    );
};
export default Calendar