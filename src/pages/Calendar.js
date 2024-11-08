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
        firstHeading: "اليوم الأول",
        secondHeading: "اليوم الثاني"
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
                    <Col xs={12} md={6} lg={10} xl={10} className="d-flex justify-content-center flex-wrap gap-4">
                        {data.map(item => (
                            <div style={{
                                backgroundColor: "#5f00b8",
                                width: "300px",
                                height: "250px",
                                alignContent: "center",
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
                            height: "250px",
                            alignContent: "center",
                            textAlign: "center",
                            color: "white"
                        }}>
                            <p style={{fontFamily: "DiodrumBold", fontSize: "55px"}}>1</p>
                            <p style={{fontFamily: "DiodrumRegular", fontSize: "25px"}}>Hello</p>
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
                    <Col xs={12} md={6} lg={10} xl={10} className="d-flex justify-content-center flex-wrap gap-4">
                        {data2.map(item => (
                            <div style={{
                                backgroundColor: "#0c0c9c",
                                width: "300px",
                                height: "250px",
                                alignContent: "center",
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
                            height: "250px",
                            alignContent: "center",
                            textAlign: "center",
                            color: "white"
                        }}>
                            <p style={{fontFamily: "DiodrumBold", fontSize: "55px"}}>1</p>
                            <p style={{fontFamily: "DiodrumRegular", fontSize: "25px"}}>Hello</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Base>
    );
};
export default Calendar