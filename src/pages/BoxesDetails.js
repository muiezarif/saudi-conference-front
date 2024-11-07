import React from 'react';
import {Container, Row, Col, Card, CardBody} from 'reactstrap';
import { FaCalendarAlt, FaClock ,FaUserFriends} from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Base} from "../component/Base";


const boxesDetails = () => {
    const cardData = [
        { number: '+20', name: 'شريك',  },
        { number: '+2000', name: 'زائر'},
        { number: '6', name: 'جلسة حوارية'},
        { number: '20', name: 'ورشة عمل' },
        { number: '+30', name: 'متحدث' },
    ];
    const cardData2 = [
        {name: 'ﻓﺌــــــــــــــــــــﺔ',name1: 'الإعلاميين', cur: 'ﺭﻳــــــــــﺎﻝ',number:'0'},
        { name: ' الفئــــــــــــــــــــﺔ',name1: 'الفضية',cur: 'ﺭﻳــــــــــﺎﻝ',number:'500'},
        {name: 'الفئــــــــــــــــــــﺔ',name1: 'الذهبية', cur: 'ﺭﻳــــــــــﺎﻝ',number:'1000'},
        {name: 'ﻓﺌــــــــــــــــــــﺔ',name1: 'VIP', cur: 'ﺭﻳــــــــــﺎﻝ' ,number:'2600'},
    ];
    const cardData3 = [
        {name: 'ﺍﻟﻔﻀــــــــــﻲ',cur: 'ﺭﻳﺎﻝ',number:'100,000'},
        { name: ' ﺍﻟﺬﻫﺒـــــــــﻲ',cur: 'ﺭﻳﺎﻝ',number:'200,000'},
        {name: 'ﺍﻟﺒﻼﺗﻴﻨـــــــﻲ',cur: 'ﺭﻳﺎﻝ',number:'500,000'},
        {name: 'ﺍﻻﺳﺘﺮﺍﺗﻴﺠﻲ',cur: 'ﺭﻳﺎﻝ' ,number:'800,000'},
    ];
    const workshops2 = [
        { title: 'عنوان الجلسة 1', date: '2024/12/23', time: '9 - 10 صباحًا'},
        { title: 'عنوان الجلسة 2', date: '2024/12/23', time: '11 - 12 صباحًا' },
        { title: 'عنوان الجلسة 3', date: '2024/12/23', time: '1 - 2 صباحًا' },
    ];
    const style = {
        card:{
            height: '180px',
            border: 'none',
            backgroundColor: 'transparent',
            display: 'flex',
            alignItems: 'center',
            textAlign:'center',
            justifyContent: 'center',
            marginTop:'25px'
        },
        firstCard: {
            borderTopLeftRadius: '15px',
            borderBottomLeftRadius: '15px',
        },
        lastCard: {
            borderTopRightRadius: '15px',
            borderBottomRightRadius: '15px',
        }
    }
    return (
       <Base>
           <Container className="my-5">
               <Row className='mt-5'>
                   <Col className="text-center">
                       <h2 style={{color: '#0b1a8a', textAlign: 'right', fontWeight: 'bold'}}>ﺃﺭﻗﺎﻡ ﺍﻟﻤﺆﺗﻤﺮ</h2>
                   </Col>
               </Row>
               <Row className='mt-3' style={{ columnGap: '26px' }}>
                   {cardData.map((data, index) => (
                       <Col
                           key={index}
                           md="3"
                           style={{
                               background: "#0b1a8a",
                               width: '18%',
                               ...(
                                   index === 0
                                       ? style.firstCard
                                       : index === cardData.length - 1
                                           ? style.lastCard
                                           : {}
                               )
                           }}
                       >
                           <Card className="" style={style.card}>
                               <CardBody>
                                   <strong style={{ fontSize: '40px', color: '#02b4b2' }}>{data.number}</strong>
                                   <p style={{ fontSize: '25px', color: 'white' }}>{data.name}</p>
                               </CardBody>
                           </Card>
                       </Col>
                   ))}
               </Row>

               {/*2nd boxes  */}
               <Row className='mt-5'>
                   <Col className="text-center">
                       <h2 style={{color: '#0b1a8a', textAlign: 'right', fontWeight: 'bold'}}>فئات التذاكر</h2>
                   </Col>
               </Row>
               <Row className='mt-3' style={{ columnGap: '26px' }}>
                   {cardData2.map((data, index) => (
                       <Col
                           key={index}
                           md="4"
                           style={{
                               background: "#6002b8",
                               width: '23%',
                               ...(
                                   index === 0
                                       ? style.firstCard
                                       : index === cardData2.length - 1
                                           ? style.lastCard
                                           : {}
                               )
                           }}
                       >
                           <Card className="" style={style.card}>
                               <CardBody>
                                   <div style={{color: 'white'}}>
                                       <p style={{fontSize: '25px', margin: '0'}}>{data.name}</p>
                                       <p style={{fontSize: '45px', margin: '0', fontWeight: 'bold'}}>{data.name1}</p>
                                       <div style={{display: 'flex',paddingLeft:'40px',gap:'2px'}}>
                                           <strong style={{margin: '0', fontWeight: 'bold'}}>{data.cur}</strong>
                                           <strong style={{margin: '0', fontWeight: 'bold'}}>{data.number}</strong>
                                       </div>
                                   </div>
                               </CardBody>
                           </Card>
                       </Col>
                   ))}
               </Row>

               {/*3nd boxes  */}
               <Row className='mt-5'>
                   <Col className="text-center">
                       <h2 style={{color: '#0b1a8a', textAlign: 'right', fontWeight: 'bold'}}>الرعايات</h2>
                   </Col>
               </Row>
               <Row className='mt-3' style={{ columnGap: '26px' }}>
                   {cardData3.map((data, index) => (
                       <Col
                           key={index}
                           md="4"
                           style={{
                               background: "#0b1a8a",
                               width: '23%',
                               ...(
                                   index === 0
                                       ? style.firstCard
                                       : index === cardData3.length - 1
                                           ? style.lastCard
                                           : {}
                               )
                           }}
                       >
                           <Card className="" style={style.card}>
                               <CardBody>
                                   <div style={{color: 'white'}}>
                                       <p style={{fontSize: '30px', margin: '0', fontWeight: 'bold'}}>{data.name}</p>
                                       <div style={{display: 'flex',paddingLeft:'40px',gap:'2px'}}>
                                           <strong style={{margin: '0', fontWeight: 'bold'}}>{data.cur}</strong>
                                           <strong style={{margin: '0', fontWeight: 'bold'}}>{data.number}</strong>
                                       </div>
                                   </div>
                               </CardBody>
                           </Card>
                       </Col>
                   ))}
               </Row>

           </Container>
       </Base>
    );
}
export default boxesDetails;