import React from 'react';
import {Col, Container, Row} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Base} from "../component/Base";
import iconSit from "../asset/icon_sit.png";
import iconCal from "../asset/icon_calender.png";
import iconClock from "../asset/icon_clock.png";
import iconWrite from "../asset/icon_write.png";


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
    const isMobile = window.innerWidth <= 768;
    return (
        <Base>
            <Container>
                <h1 style={{
                    textAlign: "right",
                    fontFamily: "DiodrumBold",
                    marginBottom: "25px",
                    marginTop: "13rem",
                    color: "#0c0c9c"
                }}>{headingData.firstHeading}</h1>
                <Row style={{display: "flex", justifyContent: "center"}}>
                    <Col className="d-flex justify-content-center flex-wrap gap-4">
                        {data.map(item => (
                            <div style={{
                                backgroundColor: "#5f00b8",
                                width: "300px",
                                height: "250px",
                                alignContent: "center",
                                marginRight: isMobile ? '85px' : '0px',
                            }}>
                                <div className="d-flex justify-content-center gap-2 mb-2">
                                    < p className="text-white">{item.title}</p>
                                    <img src={item.titleIcon} alt="" style={{width: "30px", height: "30px"}}/>
                                </div>
                                <div className="d-flex justify-content-center gap-2 mb-2">
                                    <p className="text-white">{item.date}</p>
                                    <img src={item.dateIcon} alt="" style={{width: "30px", height: "30px"}}/>
                                </div>
                                <div className="d-flex justify-content-center gap-2">
                                    <p className="text-white">{item.time}</p>
                                    <img src={item.timeIcon} alt="" style={{width: "30px", height: "30px"}}/>
                                </div>
                            </div>
                        ))
                        }
                        <div style={{
                            backgroundColor: "#00b4b2",
                            width: "80px",
                            height: window.innerWidth <= 768 ? "auto" : "250px", // Responsive height
                            minHeight: window.innerWidth <= 768 ? "798px" : "auto", // Mobile view minHeight
                            alignContent: "center",
                            textAlign: "center",
                            color: "white",
                            position: window.innerWidth <= 768 ? "absolute" : "static", // Position change on mobile
                            right: window.innerWidth <= 768 ? 0 : "auto",
                            marginRight: isMobile ? '15px' : '0px',
                        }}>
                            <p style={{fontFamily: "DiodrumBold", fontSize: "55px"}}>1</p>
                            <p style={{fontFamily: "DiodrumRegular", fontSize: "25px", marginTop: "-3rem"}}>اليوم
                                الأول</p>
                        </div>
                    </Col>
                </Row>

                <h1 style={{
                    textAlign: "right",
                    marginTop: "50px",
                    fontFamily: "DiodrumBold",
                    marginBottom: "25px",
                    color: "#0c0c9c"
                }}>{headingData.secondHeading}</h1>
                <Row style={{display: "flex", justifyContent: "center"}}>
                    <Col className="d-flex justify-content-center flex-wrap gap-4">
                        {data2.map(item => (
                            <div style={{
                                backgroundColor: "#0c0c9c",
                                width: "300px",
                                height: "250px",
                                alignContent: "center",
                                marginRight: isMobile ? '85px' : '0px',
                            }}>
                                <div className="d-flex justify-content-center gap-2 mb-2">
                                    < p className="text-white">{item.title}</p>
                                    <img src={item.titleIcon} alt="" style={{width: "30px", height: "30px"}}/>
                                </div>
                                <div className="d-flex justify-content-center gap-2 mb-2">
                                    <p className="text-white">{item.date}</p>
                                    <img src={item.dateIcon} alt="" style={{width: "30px", height: "30px"}}/>
                                </div>
                                <div className="d-flex justify-content-center gap-2">
                                    <p className="text-white">{item.time}</p>
                                    <img src={item.timeIcon} alt="" style={{width: "30px", height: "30px"}}/>
                                </div>
                            </div>
                        ))
                        }
                        <div style={{
                            backgroundColor: "#00b4b2",
                            width: "80px",
                            height: window.innerWidth <= 768 ? "auto" : "250px",
                            minHeight: window.innerWidth <= 768 ? "798px" : "auto",
                            alignContent: "center",
                            textAlign: "center",
                            color: "white",
                            position: window.innerWidth <= 768 ? "absolute" : "static",
                            right: window.innerWidth <= 768 ? 0 : "auto",
                            marginRight: isMobile ? '15px' : '0px',
                        }}>
                            <p style={{fontFamily: "DiodrumBold", fontSize: "55px"}}>2</p>
                            <p style={{fontFamily: "DiodrumRegular", fontSize: "25px", marginTop: "-3rem"}}>اليوم
                                الثاني</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Base>
    );
};
export default Calendar