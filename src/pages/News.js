import {Base} from "../component/Base";
import {Card, CardBody, CardText, Col, Row} from "reactstrap";
import calendar from "../asset/NewPageImages/ic_calander.png";
import micImage from "../asset/NewPageImages/ic_mic_long.png";
import "../style/News.css";
import React from "react";

const data = [
    {date: "22 ديسمبر 2024 م", text: "يكتب نص الخبر المختصر هنا", calendarImage: calendar, micImage: micImage},
    {date: "22 ديسمبر 2024 م", text: "يكتب نص الخبر المختصر هنا", calendarImage: calendar, micImage: micImage},
    {date: "sjhdbjha", text: "يكتب نص الخبر المختصر هنا", calendarImage: calendar, micImage: micImage}
]

export function News() {
    return (
        <Base>
            <div className="media-center-container mt-5 px-4">
                <h2 className="custom-text text-end">الأخبار</h2>
                <Row className="gy-4" >
                    {data.map((item, index) => (
                        <Col key={index} xxl={4} xl={4} lg={6} md={12} sm={12}>
                            <table border="2" className="m-0 p-0 custom-table">
                                <tbody>
                                <tr className="rowOne">
                                    <td className="dataOne">
                                        <p>22 ديسمبر 2024م</p>
                                    </td>
                                    <td className="dataTwo">
                                        <img src={calendar} alt="" width={30}/>
                                    </td>
                                </tr>
                                </tbody>
                                <tbody>
                                <tr className="rowTwo">
                                    <td className="dataThree">
                                        <p className="custom-para">يكتب نص الخبر المختصر هنا</p>
                                        <p className="custom-para">يكتب نص الخبر المختصر هنا</p>
                                        <p className="custom-para">يكتب نص الخبر المختصر هنا</p>
                                        <p className="custom-para">يكتب نص الخبر المختصر هنا</p>
                                        <p className="custom-para">يكتب نص الخبر المختصر هنا</p>
                                    </td>
                                    <td className="dataFour">
                                        <img className="micImage" src={micImage} alt="" width={25}/>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </Col>
                    ))}
                </Row>
            </div>
        </Base>
    )
}