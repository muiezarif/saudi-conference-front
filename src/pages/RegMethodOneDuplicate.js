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
            padding: "7px 0",
            color: "#00B4B2",
        }
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    };

    const handleFileChange = (e) => {
        console.log(e.target.files)
        setFormData({...formData, file: e.target.files[0]});
    };

    const fileToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader(); // Create a new FileReader instance
            reader.readAsDataURL(file); // Read the file as a data URL
            reader.onload = () => {
                const base64String = reader.result.split(',')[1]; // Extract Base64 string
                resolve(base64String); // Resolve the promise with the Base64 string
            };
            reader.onerror = (error) => {
                reject(error); // Reject the promise with an error if reading fails
            };
        });
    };

    // Use this encoded data in your axios call
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData.file)

        const url = 'https://www.cognitoforms.com/api/forms/258/entries'; // Replace 256 with your Form ID
        const apiKey = 'eyJhbGciOiJIUzI1NiIsImtpZCI6Ijg4YmYzNWNmLWM3ODEtNDQ3ZC1hYzc5LWMyODczMjNkNzg3ZCIsInR5cCI6IkpXVCJ9.eyJvcmdhbml6YXRpb25JZCI6IjI5ODJjNjlmLWYzNzctNDQ5Ny05YmRkLWNhYWMwOWIzYmUzYyIsImludGVncmF0aW9uSWQiOiIxN2NlNzczZS03NDY2LTRmMDQtODZmNy00NmM0ZTgxNWFiM2MiLCJjbGllbnRJZCI6IjNkZTNmODMwLWNiYzctNDZlNi1iOTZlLTVmMDE2NzcyMTgzMCIsImp0aSI6Ijg4YjljNWU3LTU2YjctNDM5OC1iMzE0LWFjYzBkMGNiM2Q0MCIsImlhdCI6MTczMjE5MTkyNSwiaXNzIjoiaHR0cHM6Ly93d3cuY29nbml0b2Zvcm1zLmNvbS8iLCJhdWQiOiJhcGkifQ.EcvsXafkPVJjps0Wg_7Q17B5_-SyEksje3AhopIRO40'; // Replace with your actual API key

        // Convert file to Base64
        const base64File = await fileToBase64(formData.file);

        // Build the file object
        const fileObject = [
            {
                File: base64File,
                ContentType: formData.file.type, // MIME type (e.g., "application/pdf")
                Id: '', // Leave blank unless specified
                IsEncrypted: false, // Update based on your form settings
                Name: formData.file.name, // File name with extension
                Size: formData.file.size, // File size in bytes
                StorageUrl: null, // Not required for local uploads
            },
        ];

        // Build the complete payload
        const payload = {
            Entry: {
                Action: 'Submit',
                Role: 'Public',
            },
            Name: formData.name,
            Email: formData.email,
            Phone: formData.phone,
            Message: formData.message,
            FileOne: fileObject, // Assuming the field name is "FileOne"
        };

        try {
            const response = await axios.post(url, payload, {
                headers: {
                    Authorization: `Bearer ${apiKey}`,
                    'Content-Type': 'application/json',
                },
            });
            console.log('Form submitted successfully:', response.data);
        } catch (error) {
            console.error('Error submitting form:', error.response?.data || error.message);
            console.error('Full error:', error); // Log the full error object
        }
    };


    return (
        <Base>
            <Container style={{marginTop: "13rem"}}>
                <div style={{textAlign: "right", padding: "0", margin: "0"}}>
                    <h2 style={style.heading}>نموذج طلب رعاية </h2>
                    <Row>
                        <Col>
                            <FormGroup>
                                <Label style={style.mainHeading}>تنزيل كتيب الرعاية</Label>
                                {/*<Input*/}
                                {/*    name="name"*/}
                                {/*    value={formData.name}*/}
                                {/*    onChange={handleChange}*/}
                                {/*    style={style.testField}*/}
                                {/*/>*/}
                            </FormGroup>
                        </Col>
                    </Row>
                    <h2 style={style.heading}>بيانات الجهة</h2>
                    <Row className="p-0 m-0">
                        <Col>
                            <FormGroup>
                                <Label style={style.labelStyle}>نشاط الجهة</Label>
                                <Dropdown
                                    options={["قطاع حكومي", "قطاع خاص", "قطاع غير ربحي", "منشأة قانونية / شركة مهنية"]}/>
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label style={style.labelStyle}>اسم الجهة</Label>
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
                                <Label style={style.labelStyle}>الدولة</Label>
                                <Dropdown options={["بريد الكتروني", "اتصال هاتفي", "واتساب"]}/>
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label style={style.labelStyle}>الموقع الالكتروني</Label>
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
                    <h2 style={style.heading}>بيانات مقدم الطلب</h2>
                    <Row className="p-0 m-0">
                        <Col>
                            <FormGroup>
                                <Label style={style.labelStyle}>المسمى الوظيفي</Label>
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
                                <Label style={style.labelStyle}>البريد الالكتروني</Label>
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
                                <Label style={style.labelStyle}>رقم التواصل</Label>
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
                                <Label style={style.labelStyle}>نوع الرعاية</Label>
                                <Dropdown options={["راعي استراتيجي", "راعي بلاتينيؤ", " راعي ذهبي", "راعي فضي"]}/>
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label style={style.labelStyle}>الوسيلة المناسبة للتواصل</Label>
                                <Dropdown options={["البريد الالكتروني", "الاتصال", "الواتس", "كل ماسبق"]}/>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <div className="flex flex-col items-end">
                            <label className="text-gray-500 mb-4 mt-3" style={style.labelStyle}>
                                الهدف من الرعاية
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
                    <Row>
                        <Col xs={12} className="text-center">

                            <Button onClick={handleSubmit} style={{
                                borderRadius: '10px',
                                background: 'linear-gradient(135deg, #0c0c9c, #4132A1, #5f00b8)',
                                border: 'none',
                                paddingBottom: 10,
                                width: "100%"
                            }} className="">
                                إرسال
                            </Button>
                        </Col></Row>
                </div>
            </Container>
        </Base>
    )
}

export function Dropdown({options}) {
    const [selectedOption, setSelectedOption] = useState("");


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
                أتعهد بصحة البيانات المرفقة
            </label>
        </div>
    );
}