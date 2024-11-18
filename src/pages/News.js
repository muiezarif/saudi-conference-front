import {Base} from "../component/Base";
import {Card, CardBody, CardText, Col, Row} from "reactstrap";
import calendar from "../asset/NewPageImages/ic_calander.png";
import micImage from "../asset/NewPageImages/ic_mic_long.png";

const data = [
    {date: "22 ديسمبر 2024", text: "يكتب نص الخبر المختصر هنا", calendarImage: calendar, micImage: micImage},
    {date: "22 ديسمبر 2024", text: "يكتب نص الخبر المختصر هنا", calendarImage: calendar, micImage: micImage},
    {date: "22 ديسمبر 2024", text: "يكتب نص الخبر المختصر هنا", calendarImage: calendar, micImage: micImage}
]

export function News() {
    return (
        <Base>
            <div className="media-center-container mt-5 px-5">
                <h2 className="custom-text text-end">Arabic</h2>
                <Row className="gy-4">
                    {data.map((item, index) => (
                        <Col key={index} xxl={4} xl={4} lg={6} md={12} sm={12}>
                            <Card className="text-center custom-card">
                                <CardBody className="d-flex flex-column justify-content-center align-items-center">
                                    {/*<img src={item.image} alt="Media" className="media-image" width={item.width}/>*/}
                                    <CardText>{item.text}</CardText>
                                </CardBody>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>

            {/*<div className="news-card">*/}
            {/*    <div className="news-header">*/}
            {/*        <span>22 ديسمبر 2024</span>*/}
            {/*        <i className="calendar-icon"></i>*/}
            {/*    </div>*/}
            {/*    <div className="news-body">*/}
            {/*        <p>*/}
            {/*            يكتب نص الخبر المختصر هنا*/}
            {/*            <br/>*/}
            {/*            يكتب نص الخبر المختصر هنا*/}
            {/*            <br/>*/}
            {/*            يكتب نص الخبر المختصر هنا*/}
            {/*            <br/>*/}
            {/*            يكتب نص الخبر المختصر هنا*/}
            {/*            <br/>*/}
            {/*            يكتب نص الخبر المختصر هنا*/}
            {/*        </p>*/}
            {/*    </div>*/}
            {/*    <div className="news-footer">*/}
            {/*        <i className="mic-icon"></i>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </Base>
    )
}