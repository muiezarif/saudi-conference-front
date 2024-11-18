import React from "react";
import { Container, Row, Col, Card, CardImg, CardBody, CardText } from "reactstrap";
import imageLibrary1 from "../asset/NewPageImages/image_library1.png"
import imageLibrary2 from "../asset/NewPageImages/image_library2.png"
import imageLibrary3 from "../asset/NewPageImages/image_library3.png"
import "bootstrap/dist/css/bootstrap.min.css";
import {Base} from "../component/Base";

const ImageLibrary = () => {
    const style = {
        cardFontStyle: {
            textAlign: 'right',
            fontFamily: 'DiodrumRegular',
            fontSize: '25px',
            marginTop: '-6px',
        },
        cardImageStyle: {
            objectFit: "cover",
            objectPosition: "top",
            height: "200px",
            width: "100%",
            borderRadius: 0
        }
    };
    return (
       <Base>
           <Container className="my-5">
               <Row className= "justify-content-center">
                   <Col xs="11" sm="6" lg="12">
                       <p className="mb-4" style={{color: "#0c0c9c", fontFamily: "DiodrumBold", textAlign: "right",fontSize:'30px'}}>
                           مكتبة الصور
                       </p>
                   </Col>
               </Row>

               <Row className=' d-flex justify-content-center' style={{marginTop:'-10px'}}>
                   {/* Image Card 1 */}
                   <Col xs="11" sm="6" lg="4" className="mb-4">
                       <Card>
                           <CardImg
                               src={imageLibrary1} // Replace with actual image URL
                               alt="Image 1"
                               style={style.cardImageStyle}
                           />
                           <CardBody style={{ backgroundColor: "#5f02b7", color: "#fff" }}>
                               <CardText style={style.cardFontStyle}>
                                   تكتب هنا نبذة عن الصورة
                               </CardText>
                           </CardBody>
                       </Card>
                   </Col>

                   {/* Image Card 2 */}
                   <Col xs="11" sm="6" lg="4" className="mb-4">
                       <Card className="h-100">
                           <CardImg
                               src={imageLibrary2} // Replace with actual image URL
                               alt="Image 2"
                               style={style.cardImageStyle}
                           />
                           <CardBody  style={{ backgroundColor: "#5f02b7", color: "#fff" }}>
                               <CardText style={style.cardFontStyle}>تكتب هنا نبذة عن الصورة</CardText>
                           </CardBody>
                       </Card>
                   </Col>

                   {/* Image Card 3 */}
                   <Col xs="11" sm="6" lg="4" className="mb-4">
                       <Card className="h-100">
                           <CardImg
                               src={imageLibrary3} // Replace with actual image URL
                               alt="Image 3"
                               style={style.cardImageStyle}
                           />
                           <CardBody  style={{ backgroundColor: "#5f02b7", color: "#fff" }}>
                               <CardText style={style.cardFontStyle}>تكتب هنا نبذة عن الصورة</CardText>
                           </CardBody>
                       </Card>
                   </Col>
               </Row>
           </Container>
       </Base>
    );
};

export default ImageLibrary;
