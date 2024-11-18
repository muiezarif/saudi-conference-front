import {Base} from "../component/Base";
import {Card, CardBody, CardText, Col, Label, Row} from "reactstrap";
import micImage from "../asset/icon_mic.png";


const data = [
    {micImage: micImage, text: 'Text here'},
    {micImage: micImage, text: 'Text here'},
    {micImage: micImage, text: 'Text here'}
]

export function MediaCenter() {
    return (
        <Base>
            <Row className="d-flex justify-content-center align-items-center">
                <Label>Arabic</Label>
                <Col xxl={4} xl={4} lg={4} md={4} sm={4} xs={4}
                     className="d-flex justify-content-center align-items-center gap-3"
                     style={{width: '100%', height: "100%"}}>
                    {data.map(data => (
                        <Card>
                            <CardBody>
                                <img src={data.micImage} alt=""/>
                                <CardText>{data.text}</CardText>
                            </CardBody>
                        </Card>
                    ))}
                </Col>
            </Row>
        </Base>
    )
}