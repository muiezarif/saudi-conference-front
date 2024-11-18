import {Base} from "../component/Base";
import {Card, CardBody, CardText, Col, Label, Row} from "reactstrap";
import micImage from "../asset/NewPageImages/ic_mic.png";
import galleryImage from "../asset/NewPageImages/ic_gallery.png";
import videoImage from "../asset/NewPageImages/ic_video.png";
import "../style/MediaCenter.css";


const data = [
    {image: micImage, text: 'Text here'},
    {image: galleryImage, text: 'Text here'},
    {image: videoImage, text: 'Text here'}
]

export function MediaCenter() {
    return (
        <Base>
            <Row className="d-flex justify-content-center align-items-center">
                <Label>Arabic</Label>
                <Col xxl={4} xl={4} lg={4} md={4} sm={4} xs={4}
                     className="d-flex justify-content-center align-items-center gap-3 col"
                     style={{width: '100%', height: "100%"}}>
                    {data.map(data => (
                        <Card style={{backgroundColor: "#5f00b8", width: "100%", height:"100%"}}>
                            <CardBody>
                                <img src={data.micImage} alt="" className="image"/>
                                <CardText>{data.text}</CardText>
                            </CardBody>
                        </Card>
                    ))}
                </Col>
            </Row>
        </Base>
    )
}