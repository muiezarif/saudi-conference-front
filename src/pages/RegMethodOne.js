import {Base} from "../component/Base";
import {Col, Container, FormGroup, Input, Label, Row,Button} from "reactstrap";
import uploadingIcon from "../asset/uploadingIcon.png";
import { useState } from "react";
import axios from "axios";

export function RegMethodOne() {

    const [formData, setFormData] = useState({
        companyName: "",
        name: "",
        phone: "",
        email: "",
        file: null
    });

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
            border: "none",
            textAlign: 'right',
        },
        labelStyle: {
            fontFamily: "DiodrumBold",
            textAlign: "right",
            marginBottom: "1rem",
            color: "#606060"
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, file: e.target.files[0] });
    };

    // Use this encoded data in your axios call
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const response = await axios.post(
                'https://script.google.com/macros/s/AKfycbw0w2UYx_bwSu5WC4CjeYn3-Ue9-Z-UXJWeeYMlDUvtnwdBAEtexjFwWvJi_L-Nzxx6/exec',
                formData,
                {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                }
            );
    
            if (response.data.result === "success") {
                alert('Form submitted successfully!');
            } else {
                console.error('Server Error:', response);
                alert('Failed to submit the form. Server Error.');
            }
        } catch (error) {
            console.error('Submission Error:', error);
            alert('Failed to submit the form.');
        }
    };
    return (
        <Base>
            <Container style={{ marginTop: "13rem" }}>
                <div style={{ textAlign: "right", padding: "0", margin: "0" }}>
                    <h2 style={style.heading}>الرعايات</h2>
                    <h2 style={style.subHeading}>:مزايا الاستراتيجي</h2>
                    <Row className="p-0 m-0">
                        <Col>
                            <ul style={{ fontFamily: "DiodrumRegular" }}>
                                <li>تكتب الميزة هنا.</li>
                                <li>تكتب الميزة هنا.</li>
                                <li>تكتب الميزة هنا.</li>
                                <li>تكتب الميزة هنا.</li>
                            </ul>
                        </Col>
                        <Col>
                            <ul style={{ fontFamily: "DiodrumRegular" }}>
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
                                <Input
                                    name="companyName"
                                    value={formData.companyName}
                                    onChange={handleChange}
                                    style={style.testField}
                                />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label style={style.labelStyle}>الاسم</Label>
                                <Input
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    style={style.testField}
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row className="p-0 m-0">
                        <Col>
                            <FormGroup>
                                <Label style={style.labelStyle}>رقم الجوال</Label>
                                <Input
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    style={style.testField}
                                />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label style={style.labelStyle}>البريد الإلكتروني</Label>
                                <Input
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    style={style.testField}
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <div className="flex flex-col items-end">
                            <label className="text-gray-500 mb-4 mt-3" style={style.labelStyle}>
                                إرفاق الملف التعريفي
                            </label>
                            <div
                                className="w-full h-20 bg-gray-200 rounded-lg flex justify-center items-center"
                                style={{ padding: "70px" }}
                            >
                                <input
                                    type="file"
                                    className="opacity-0 absolute w-full cursor-pointer"
                                    style={{ zIndex: 10 }}
                                    onChange={handleFileChange}
                                />
                                <div className="flex items-center justify-center absolute pointer-events-none">
                                    <img src={uploadingIcon} alt="" style={{ width: "60px" }} />
                                </div>
                            </div>
                        </div>
                    </Row>
                    <Row>
                        <button onClick={handleSubmit} style={{ marginTop: "20px", padding: "10px 20px", borderRadius: "5px", backgroundColor: "#00B4B2", color: "#fff", border: "none" }}>
                            Submit
                        </button>
                    </Row>
                </div>
            </Container>
        </Base>
    )
}