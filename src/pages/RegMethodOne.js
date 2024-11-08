import {Base} from "../component/Base";
import {Col, Container, FormGroup, Input, Label, Row} from "reactstrap";
import uploadingIcon from "../asset/uploadingIcon.png";

export function RegMethodOne() {

    const style = {
        heading: {
            color: "#0C0C9C",
            fontFamily: "DiodrumBold"
        },
        subHeading: {
            color: "#00B4B2",
            fontFamily: "DiodrumBold"
        },
        testField: {
            borderRadius: "5rem",
            backgroundColor: "rgb(237, 237, 237)",
            border: "none"
        },
        labelStyle: {
            fontFamily: "DiodrumBold",
            textAlign: "right",
            marginBottom: "1rem",
            color: "black"
        }
    }
    return (
        <Base>
            <Container style={{marginTop: "13rem"}}>
                <div style={{textAlign: "right", padding: "0", margin: "0"}}>
                    <h2 style={style.heading}>الرعايات</h2>
                    <h2 style={style.subHeading}>:مزايا الاستراتيجي</h2>
                    <Row className="p-0 m-0">
                        <Col>
                            <ul style={{fontFamily: "DiodrumRegular"}}>
                                <li>تكتب الميزة هنا.</li>
                                <li>تكتب الميزة هنا.</li>
                                <li>تكتب الميزة هنا.</li>
                                <li>تكتب الميزة هنا.</li>
                            </ul>
                        </Col>
                        <Col>
                            <ul style={{fontFamily: "DiodrumRegular"}}>
                                <li>تكتب الميزة هنا.</li>
                                <li>تكتب الميزة هنا.</li>
                                <li>تكتب الميزة هنا.</li>
                                <li>تكتب الميزة هنا.</li>
                            </ul>
                        </Col>
                    </Row>
                    <Row className="p-0 m-0">
                        <Col>
                            <FormGroup>
                                <Label style={style.labelStyle}>اسم الشركة</Label>
                                <Input style={style.testField}/>
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label style={style.labelStyle}>الاسم</Label>
                                <Input style={style.testField}/>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row className="p-0 m-0">
                        <Col>
                            <FormGroup>
                                <Label style={style.labelStyle}>رقم الجوال</Label>
                                <Input style={style.testField}/>
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label style={style.labelStyle}>البريد الإلكتروني</Label>
                                <Input style={style.testField}/>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <div className="flex flex-col items-end">
                            {/* Label for file upload */}
                            <label className="text-gray-500 mb-4 mt-3" style={style.labelStyle}>إرفاق الملف
                                التعريفي</label>
                            <div className="w-full h-20 bg-gray-200 rounded-lg flex justify-center items-center"
                                 style={{padding: "70px"}}>
                                <input
                                    type="file"
                                    className="opacity-0 absolute w-full h-full cursor-pointer"
                                    style={{zIndex: 10}}
                                />
                                <div className="flex items-center justify-center absolute pointer-events-none">
                                    <img src={uploadingIcon} alt="" style={{width: "60px"}}/>
                                </div>
                            </div>
                        </div>
                    </Row>
                </div>
            </Container>
        </Base>
    )
}