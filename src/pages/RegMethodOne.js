import {Base} from "../component/Base";
import {Col, Container, FormGroup, Input, Label, Row} from "reactstrap";

export function RegMethodOne() {

    const style = {
        heading: {
            color: "#0C0C9C",
            fontWeight: "bold"
        },
        subHeading: {
            color: "#00B4B2",
            fontWeight: "bold"
        },
        testField: {
            borderRadius: "5rem",
            backgroundColor: "rgb(237, 237, 237)",
            border: "none"
        }
    }
    return (
        <Base>
            <Container>
                <div style={{textAlign: "right", padding: "0", margin: "0"}}>
                    <h2 style={style.heading}>الرعايات</h2>
                    <h2 style={style.subHeading}>:مزايا الاستراتيجي</h2>
                    <Row className="p-0 m-0">
                        <Col>
                            <ul>
                                <li>تكتب الميزة هنا.</li>
                                <li>تكتب الميزة هنا.</li>
                                <li>تكتب الميزة هنا.</li>
                                <li>تكتب الميزة هنا.</li>
                            </ul>
                        </Col>
                        <Col>
                            <ul>
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
                                <Label>اسم الشركة</Label>
                                <Input style={style.testField}/>
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label>الاسم</Label>
                                <Input style={style.testField}/>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row className="p-0 m-0">
                        <Col>
                            <FormGroup>
                                <Label>رقم الجوال</Label>
                                <Input style={style.testField}/>
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label>البريد الإلكتروني</Label>
                                <Input style={style.testField}/>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <FormGroup>
                            <Label>إرفاق الملف التعريفي</Label>
                            <Input type="file" style={style.testField}/>
                        </FormGroup>

                        <div className="flex flex-col items-end">
                            {/* Label for file upload */}
                            <label className="text-gray-500 mb-2">إرفاق الملف التعريفي</label>
                            <div className="w-full h-20 bg-gray-200 rounded-lg flex justify-center items-center">
                                <input
                                    type="file"
                                    className="opacity-0 absolute w-full h-full cursor-pointer"
                                    style={{zIndex: 10}}
                                />
                                <div className="flex items-center justify-center absolute pointer-events-none">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-8 w-8 text-gray-400"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M3 12l9-9 9 9M12 3v18"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </Row>
                </div>
            </Container>
        </Base>
    )
}