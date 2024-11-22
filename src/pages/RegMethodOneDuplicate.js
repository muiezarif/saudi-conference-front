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

    const countries = [
        "أفغانستان",
        "ألبانيا",
        "الجزائر",
        "أندورا",
        "أنغولا",
        "أنتيغوا وبربودا",
        "الأرجنتين",
        "أرمينيا",
        "أستراليا",
        "النمسا",
        "أذربيجان",
        "جزر البهاما",
        "البحرين",
        "بنغلاديش",
        "بربادوس",
        "بيلاروس",
        "بلجيكا",
        "بليز",
        "بنين",
        "بوتان",
        "بوليفيا",
        "البوسنة والهرسك",
        "بوتسوانا",
        "البرازيل",
        "بروناي",
        "بلغاريا",
        "بوركينا فاسو",
        "بوروندي",
        "كابو فيردي",
        "كمبوديا",
        "الكاميرون",
        "كندا",
        "تشاد",
        "تشيلي",
        "الصين",
        "كولومبيا",
        "جزر القمر",
        "الكونغو",
        "كوستاريكا",
        "كرواتيا",
        "كوبا",
        "قبرص",
        "التشيك",
        "الدنمارك",
        "جيبوتي",
        "دومينيكا",
        "جمهورية الدومينيكان",
        "تيمور الشرقية",
        "الإكوادور",
        "مصر",
        "السلفادور",
        "غينيا الاستوائية",
        "إريتريا",
        "إستونيا",
        "إسواتيني",
        "إثيوبيا",
        "فيجي",
        "فنلندا",
        "فرنسا",
        "الغابون",
        "غامبيا",
        "جورجيا",
        "ألمانيا",
        "غانا",
        "اليونان",
        "غرينادا",
        "غواتيمالا",
        "غينيا",
        "غينيا بيساو",
        "غيانا",
        "هايتي",
        "هندوراس",
        "المجر",
        "آيسلندا",
        "الهند",
        "إندونيسيا",
        "إيران",
        "العراق",
        "أيرلندا",
        "إسرائيل",
        "إيطاليا",
        "ساحل العاج",
        "جامايكا",
        "اليابان",
        "الأردن",
        "كازاخستان",
        "كينيا",
        "كيريباتي",
        "كوريا الشمالية",
        "كوريا الجنوبية",
        "الكويت",
        "قيرغيزستان",
        "لاوس",
        "لاتفيا",
        "لبنان",
        "ليسوتو",
        "ليبيريا",
        "ليبيا",
        "ليختنشتاين",
        "ليتوانيا",
        "لوكسمبورغ",
        "مدغشقر",
        "مالاوي",
        "ماليزيا",
        "جزر المالديف",
        "مالي",
        "مالطا",
        "جزر مارشال",
        "موريتانيا",
        "موريشيوس",
        "المكسيك",
        "ميكرونيسيا",
        "مولدوفا",
        "موناكو",
        "منغوليا",
        "الجبل الأسود",
        "المغرب",
        "موزمبيق",
        "ميانمار",
        "ناميبيا",
        "ناورو",
        "نيبال",
        "هولندا",
        "نيوزيلندا",
        "نيكاراغوا",
        "النيجر",
        "نيجيريا",
        "النرويج",
        "عمان",
        "باكستان",
        "بالاو",
        "فلسطين",
        "بنما",
        "بابوا غينيا الجديدة",
        "باراغواي",
        "بيرو",
        "الفلبين",
        "بولندا",
        "البرتغال",
        "قطر",
        "رومانيا",
        "روسيا",
        "رواندا",
        "سانت كيتس ونيفيس",
        "سانت لوسيا",
        "سانت فنسنت وجزر غرينادين",
        "ساموا",
        "سان مارينو",
        "ساو تومي وبرينسيب",
        "السعودية",
        "السنغال",
        "صربيا",
        "سيشيل",
        "سيراليون",
        "سنغافورة",
        "سلوفاكيا",
        "سلوفينيا",
        "جزر سليمان",
        "الصومال",
        "جنوب أفريقيا",
        "إسبانيا",
        "سريلانكا",
        "السودان",
        "سورينام",
        "السويد",
        "سويسرا",
        "سوريا",
        "طاجيكستان",
        "تنزانيا",
        "تايلاند",
        "توغو",
        "تونغا",
        "ترينيداد وتوباغو",
        "تونس",
        "تركيا",
        "تركمانستان",
        "توفالو",
        "أوغندا",
        "أوكرانيا",
        "الإمارات",
        "المملكة المتحدة",
        "الولايات المتحدة",
        "أوروغواي",
        "أوزبكستان",
        "فانواتو",
        "الفاتيكان",
        "فنزويلا",
        "فيتنام",
        "اليمن",
        "زامبيا",
        "زيمبابوي"
    ];

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
                <iframe src="https://www.cognitoforms.com/f/3y87W470q0-ctEtVkRfdMw/258" allow="payment" style={{border:0,width:"100%"}} height="1027"></iframe>
                    
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