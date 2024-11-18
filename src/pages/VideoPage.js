import React, {useEffect, useState} from 'react';
import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Base} from "../component/Base";


const VideoPage = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    // Update window width on resize
    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);

        // Add event listener
        window.addEventListener('resize', handleResize);

        // Clean up the event listener when the component is unmounted
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    const styles = {
        videoContainer: {
            position: 'relative',
            backgroundColor: '#666',
            width: '100%',
            height:  windowWidth <= 576 ? '200px' : '450px',
            margin: '0 auto',
        },
        playButton: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width:  windowWidth <= 576 ? '50px' : '80px',
            height: windowWidth <= 576 ? '50px' : '80px',
            backgroundColor: '#fff',
            clipPath: 'polygon(0 0, 100% 50%, 0 100%)',
            cursor: 'pointer',
        },
        textStyle :{
            fontFamily: "DiodrumRegular",
            textAlign: "right",
            fontSize: windowWidth <= 576 ? '10px' : '1.3rem',
        }

    };
    return (
        <Base>
            <Container className="text-center mt-5">
                <Row className= "justify-content-center">
                    <Col xs="11" sm="6" lg="12">
                        <p className="mb-4" style={{color: "#0c0c9c", fontFamily: "DiodrumBold", textAlign: "right",fontSize:'30px'}}>
                            الفيديو
                        </p>
                    </Col>
                </Row>
                <Row className="justify-content-center text-center">
                    <Col xs="11" sm="6" lg="12">
                        <div className="video-container" style={styles.videoContainer}>
                            <div style={styles.playButton}></div>
                        </div>
                    </Col>
                </Row>
                <Row className= "justify-content-center">
                    <Col xs="11" sm="6" lg="12">
                        <p className="mt-3" style={styles.textStyle}>
                            نبذة الفيديو تكتب هنا نبذة الفيديو تكتب هنا نبذة الفيديو تكتب هنا نبذة الفيديو تكتب هنا نبذة الفيديو تكتب هنا نبذة الفيديو تكتب هنا نبذة الفيديو تكتب هنا
                        </p>
                    </Col>
                </Row>
            </Container>
        </Base>
    );
};

export default VideoPage;
