import {Col, Container, Row} from "reactstrap";
import personImage from '../asset/Person.png';
import "../style/fonts.css";

export function HomeComponentOne() {
    const styles = {
        customFont: {fontFamily: "DiodrumMedium"},
        cardBase: {
            backgroundColor: "rgb(78,10,171)",
            color: "white",
            width: "125px",
            height: "100px",
            textAlign: "center",
            display: "flex",
            flexDirection: "column", // Aligns items vertically
            justifyContent: "center",
            alignItems: "center",
        },
        cardLeft: {borderTopLeftRadius: "15px", borderBottomLeftRadius: "15px"},
        cardRight: {borderTopRightRadius: "15px", borderBottomRightRadius: "15px"},
        cardHeading: {
            paddingTop: "13px",
            fontSize: "33px",
            fontFamily: "DiodrumBold"
        },
        cardSubHeading: {
            marginTop: "-13px",
            fontSize: "26px",
            fontFamily: "DiodrumRegular"
        },
        paragraph: {
            color: "rgb(96,96,96)",
            marginTop: "30px",
            textAlign: "right",
            fontSize: '36px'
        },
        heading: {
            color: "rgb(80,177,177)",
            fontFamily: "DiodrumBold",
            textAlign: "right",
            fontSize: "50px",
        },
        subHeading: {
            fontFamily: "DiodrumBold",
            textAlign: "right",
            fontSize: "70px",
            color: "rgb(12,12,150)",
        }
    };

    return (
        <Container style={styles.customFont}>
            <Row className="d-flex justify-content-between">
                <Col xl={4} md={4} sm={4}>
                    <img src={personImage} alt="Person"/>
                </Col>
                <Col xl={6} md={6} sm={6} style={{textAlign: "right"}}>
                    <div className="d-inline-flex gap-4">
                        {['ﺍﻻﻳﺎﻡ', 'ﺍﻟﺴﺎﻋﺎﺕ', 'ﺍﻟﺪﻗﺎﺋﻖ', 'ﺍﻟﺜﻮﺍﻧﻲ'].map((text, index) => (
                            <div
                                key={index}
                                style={{
                                    ...styles.cardBase,
                                    ...(index === 0 ? styles.cardLeft : index === 3 ? styles.cardRight : {})
                                }}
                            >
                                <h6 style={styles.cardHeading}>00</h6>
                                <p style={styles.cardSubHeading}>{text}</p>
                            </div>
                        ))}
                    </div>
                    <div>
                        <p style={styles.paragraph}>
                            ﺑﺮﻋﺎﻳﺔ ﻣﻌﺎﻟﻲ ﻭﺯﻳﺮ ﺍﻟﻌﺪﻝ ﺭﺋﻴﺲ ﻣﺠﻠﺲ
                            ﺇﺩﺍﺭﺓ ﺍﻟﻬﻴﺌــــﺔ ﺍﻟﺴﻌـــﻮﺩﻳﺔ ﻟﻠﻤﺤﺎﻣﻴـــﻦ
                        </p>
                        <p style={styles.heading}>ﺩ. ﻭﻟﻴﺪ ﺑﻦ ﻣﺤﻤﺪ ﺍﻟﺼﻤﻌﺎﻧﻲ</p>
                        <p style={styles.subHeading}>ﻋـﻦ ﺍﻟﻤﺆﺗﻤـﺮ</p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}