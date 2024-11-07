import React, {useState} from 'react';
import {
    Button,
    Card,
    CardBody,
    CardImg,
    CardText,
    CardTitle,
    Carousel,
    CarouselControl,
    CarouselItem,
    Col,
    Container,
    Row
} from 'reactstrap';
import image1 from '../asset/SliderImage/1.png';
import image2 from '../asset/SliderImage/2.png';
import image3 from '../asset/SliderImage/3.png';
import image4 from '../asset/SliderImage/4.png';
import image5 from '../asset/SliderImage/5.png';
import 'bootstrap/dist/css/bootstrap.min.css';

const ConferenceSection = () => {
    const cardData = [
        {
            title: "أ. إبتسام محمد الناصر",
            text: "المسمى الوظيفي 1",
            image: image1,
            buttonText: "اعرف المزيد"
        },
        {
            title: "أ. ناهد فهد ابراهيم",
            text: "المسمى الوظيفي 2",
            image: image2,
            buttonText: "اعرف المزيد"
        },
        {
            title: "أ. صالح خالد الفيصل",
            text: "المسمى الوظيفي 3",
            image: image3,
            buttonText: "اعرف المزيد"
        },
        {
            title: "أ. فهد فلاح العجمي",
            text: "المسمى الوظيفي 4",
            image: image4,
            buttonText: "اعرف المزيد"
        },
        {
            title: "أ. شخص جديد",
            text: "المسمى الوظيفي 5",
            image: image5,
            buttonText: "اعرف المزيد"
        }
    ];

    // State for active index of the carousel
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    // Functions for navigating through the carousel
    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === cardData.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? cardData.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    const slides = cardData.map((card, index) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={index}
            >
                <Row className="d-flex justify-content-center">
                    <Col md={4} className="mb-4"> {/* md=4 for 3 cards per row */}
                        <Card>
                            <CardImg top width="100%" src={card.image} alt={card.title}/>
                            <CardBody>
                                <CardTitle tag="h5">{card.title}</CardTitle>
                                <CardText>{card.text}</CardText>
                                <Button>{card.buttonText}</Button>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </CarouselItem>
        );
    });

    const style = {
        mainHeading: {
            fontFamily: "DiodrumBold",
        },
        cardHeading: {
            fontFamily: "DiodrumBold",
            color: 'rgb(2,180,178)',
        },
        cardParagraph: {
            fontFamily: "DiodrumRegular",
            color: "rgb(96,96,96)"
        },
        description: {
            background: 'rgb(237,237,237)',
            textAlign: 'right',
            borderRight: '10px solid rgb(2,180,178)',
            borderLeft: '10px solid rgb(2,180,178)',
            minHeight: "170px",
        }
    };

    return (
        <Container className="my-5">
            {/* Title Section */}
            <Row className="mb-4" style={{textAlign: 'right', color: "rgb(13,13,157)"}}>
                <Col>
                    <h2 style={style.mainHeading}>ركائز مؤتمر المحاماة السعودي</h2>
                </Col>
            </Row>
            <Row style={style.description}>
                <Col md={6} className="mt-3">
                    <h3 style={style.cardHeading}>مهني</h3>
                    <p style={style.cardParagraph}>
                        تمكين المهن القانونية وتعزيز قطاع الأعمال، مع التركيز على دور الهيئة السعودية للمحامين في ضبط
                        المخالفات وزيادة الموثوقية،
                        واستعراض التطورات القانونية والتقنية وتوطين المهن، إضافة إلى فرص الشراكات المهنية داخل المملكة.
                    </p>
                </Col>
                <Col md={6} className="mt-3">
                    <h3 style={style.cardHeading}>تأهيلي</h3>
                    <p style={style.cardParagraph}>
                        تطوير المحامين المتدربين من خلال مناقشة ضوابط التسجيل، التزاماتهم المهنية، التحديات التي
                        تواجههم، وساعات التدريب الإلزامية،
                        مع التأكيد على أهمية التطوير المهني المستمر ودور الملتقيات والمبادرات القانونية في تأهيل
                        الكفاءات الشابة.
                    </p>
                </Col>
            </Row>

            {/* Speakers Section */}
            <Row className="mb-4" style={{textAlign: 'right', color: "rgb(13,13,157)"}}>
                <Col>
                    <h3>المتحدثين</h3>
                </Col>
            </Row>
            <Container className="my-5">
                {/* Title Section */}
                <Row className="mb-4" style={{textAlign: 'right', color: "rgb(13,13,157)"}}>
                    <Col>
                        <h2>ركائز مؤتمر المحاماة السعودي</h2>
                    </Col>
                </Row>

                {/* Carousel for the cards */}
                <Carousel activeIndex={activeIndex} next={next} previous={previous} style={{color: 'black'}}>
                    {slides}
                    <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous}
                                     style={{color: 'black'}}/>
                    <CarouselControl direction="next" directionText="Next" onClickHandler={next}
                                     style={{color: 'black'}}/>
                </Carousel>
            </Container>
        </Container>
    );
};

export default ConferenceSection;
