import {Base} from "../component/Base";
import {
    Col,
    Container,
    FormGroup,
    Input,
    Label,
    Row,
    Button,
    DropdownItem,
    UncontrolledDropdown,
    DropdownToggle, DropdownMenu
} from "reactstrap";
import uploadingIcon from "../asset/uploadingIcon.png";
import {useState} from "react";
import axios from "axios";

export function RegMethodOneDuplicate() {

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
        },
        mainHeading: {
            borderRadius: "5rem",
            backgroundColor: "rgb(237, 237, 237)",
            border: "none",
            textAlign: 'center',
            width: "100%",
            padding:"7px 0",
            color: "#00B4B2",
        }
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    };

    const handleFileChange = (e) => {
        setFormData({...formData, file: e.target.files[0]});
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
            <Container style={{marginTop: "13rem"}}>
                <div style={{textAlign: "right", padding: "0", margin: "0"}}>
                    <h2 style={style.heading}>الرعايات</h2>
                    <Row>
                        <Col>
                            <FormGroup>
                                <Label style={style.mainHeading}>الاسم</Label>
                                {/*<Input*/}
                                {/*    name="name"*/}
                                {/*    value={formData.name}*/}
                                {/*    onChange={handleChange}*/}
                                {/*    style={style.testField}*/}
                                {/*/>*/}
                            </FormGroup>
                        </Col>
                    </Row>
                    <h2 style={style.heading}>الرعايات</h2>
                    <Row className="p-0 m-0">
                        <Col>
                            <FormGroup>
                                <Label style={style.labelStyle}>اسم الشركة</Label>
                                <Dropdown/>
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
                                <Dropdown/>
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
                                style={{padding: "70px"}}
                            >
                                <input
                                    type="file"
                                    className="opacity-0 absolute w-full cursor-pointer"
                                    style={{zIndex: 10}}
                                    onChange={handleFileChange}
                                />
                                <div className="flex items-center justify-center absolute pointer-events-none">
                                    <img src={uploadingIcon} alt="" style={{width: "60px"}}/>
                                </div>
                            </div>
                        </div>
                    </Row>
                </div>
                <div style={{textAlign: "right", padding: "0", margin: "50px 0"}}>
                    <h2 style={style.heading}>الرعايات</h2>
                    <Row className="p-0 m-0">
                        <Col>
                            <FormGroup>
                                <Label style={style.labelStyle}>اسم الشركة</Label>
                                <Input
                                    name="name"
                                    value={formData.name}
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
                                <Label style={style.labelStyle}>اسم الشركة</Label>
                                <Input
                                    name="name"
                                    value={formData.name}
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
                                <Dropdown/>
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label style={style.labelStyle}>البريد الإلكتروني</Label>
                                <Dropdown/>
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
                                style={{padding: "70px"}}
                            >
                                <input
                                    type="file"
                                    className="opacity-0 absolute w-full cursor-pointer"
                                    style={{zIndex: 10}}
                                    onChange={handleFileChange}
                                />
                                <div className="flex items-center justify-center absolute pointer-events-none">
                                    <img src={uploadingIcon} alt="" style={{width: "60px"}}/>
                                </div>
                            </div>
                        </div>
                        <CheckboxWithLabel/>
                    </Row>
                </div>
            </Container>
        </Base>
    )
}

export function Dropdown() {
    const [selectedOption, setSelectedOption] = useState("");

    const options = ["بريد الكتروني", "اتصال هاتفي", "واتساب"];

    return (
        <div style={{direction: "rtl", textAlign: "right", position: "relative",}}>
            {/*<label*/}
            {/*    htmlFor="contact-method"*/}
            {/*    style={{fontSize: "14px", marginBottom: "8px", display: "block"}}*/}
            {/*>*/}
            {/*    الوسيلة المناسبة للتواصل*/}
            {/*</label>*/}
            <div style={{position: "relative"}}>
                <select
                    id="contact-method"
                    value={selectedOption}
                    onChange={(e) => setSelectedOption(e.target.value)}
                    style={{
                        width: "100%",
                        padding: "10px",
                        fontSize: "14px",
                        appearance: "none", // Hides the default dropdown arrow
                        background: "rgb(237, 237, 237)",
                        paddingRight: "30px", // Space for the custom icon
                        borderRadius: "5rem",
                        backgroundColor: "rgb(237, 237, 237)",
                        border: "transparent",
                    }}
                >
                    <option value="">
                        اختر وسيلة
                    </option>
                    {options.map((option, index) => (
                        <option key={index} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
                {/* Custom Dropdown Icon */}
                <div
                    style={{
                        position: "absolute",
                        right: "10px", // Adjust this value to control the icon position
                        top: "50%",
                        transform: "translateY(-50%)",
                        pointerEvents: "none", // Prevent interaction with the icon
                    }}
                >
                    ▼ {/* Replace this with any custom icon, like an SVG or FontAwesome */}
                </div>
            </div>
        </div>
    );
}

export function CheckboxWithLabel() {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div style={{direction: "rtl", textAlign: "right", marginTop: "20px"}}>
            <label style={{fontSize: "14px", display: "flex", alignItems: "center"}}>
                <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                    style={{
                        marginLeft: "10px",
                        width: "16px",
                        height: "16px",
                        cursor: "pointer",
                    }}
                />
                أتعهد بصحة البيانات المرفقة.
            </label>
        </div>
    );
}