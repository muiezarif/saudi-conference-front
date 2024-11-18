import {Base} from "../component/Base";
import {Card, CardBody, CardText, Col, Row} from "reactstrap";
import micImage from "../asset/NewPageImages/ic_mic.png";
import galleryImage from "../asset/NewPageImages/ic_gallery.png";
import videoImage from "../asset/NewPageImages/ic_video.png";
import "../style/MediaCenter.css";

const data = [
    {image: videoImage, text: "Video Content", width: '80px'},
    {image: galleryImage, text: "Gallery Content", width: '80px'},
    {image: micImage, text: "Mic Content", width: '45px'},
];

export function MediaCenter() {
    return (
        <Base>
            <div className="media-center-container mt-5 px-5">
                <h2 className="custom-text text-end">المركز الإعلامي</h2>
                <Row className="gy-4">
                    {data.map((item, index) => (
                        <Col key={index} xxl={4} xl={4} lg={6} md={12} sm={12}>
                            <Card className="text-center custom-card">
                                <CardBody className="d-flex flex-column justify-content-center align-items-center">
                                    <img src={item.image} alt="Media" className="media-image" width={item.width}/>
                                    <CardText>{item.text}</CardText>
                                </CardBody>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </Base>
    );
}
