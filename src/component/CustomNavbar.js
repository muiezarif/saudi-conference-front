'use client'

import React, {useRef, useState} from 'react'
import {Dialog, DialogPanel} from '@headlessui/react'
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline'
import {Button, Card, Col, Container, NavItem, NavLink, Row} from "reactstrap";
import {NavLink as ReactLink, useLocation} from "react-router-dom";
import "../style/NavBar.css";
import Logo from "../asset/HeaderLogo.png";
import "../style/fonts.css";
import img7 from "../asset/socialMedia/location.png";
import img8 from "../asset/icon_calender.png";
import img9 from "../asset/timeicon.png";
import img6 from "../asset/socialMedia/img6.png";
import img5 from "../asset/socialMedia/img5.png";
import img4 from "../asset/socialMedia/img4.png";
import img3 from "../asset/socialMedia/img3.png";
import img2 from "../asset/socialMedia/img2.png";
import img1 from "../asset/socialMedia/img1.png";
import {ArrowDown} from "react-bootstrap-icons";
import BackGroundImage from "../asset/bannerImage.png";
import bannerLogo from "../asset/Logo.png";
import { scroller } from 'react-scroll';


// const navigation = [
//     // {name: 'المتحدثين', href: '/#speakersection'},
//     {name: 'المتحدثين', href: '/#'},
//     // {name: 'التسجيل', href: '/reg3'},
//     {name: 'التسجيل', href: '/#'},
//     {name: 'الرعايات', href: '/sponsorships'},
//     // {name: 'الجهات والرعاة', href: '/#logosection'},
//     {name: 'الجهات والرعاة', href: '/#'},
//     // {name: 'المركز الإعلامي', href: '/media'},
//     {name: 'المركز الإعلامي', href: '/#'},
//     // {name: 'الأجندة وورش العمل', href: '/workshops'},
//     {name: 'الأجندة وورش العمل', href: '/#'},
//     {name: 'عن المؤتمر', href: '/'},
// ]

const navigation = [
   
    {name: 'المركز الإعلامي', href: '/#'},
    {name: 'التسجيل', href: '/#'},
    {name: 'الرعايات', href: '/sponsorships'},
    {name: 'الجهات المشاركة', href: '/#'},
    {name: 'الجلسات الحوارية وورش العمل', href: '/workshops'},
    {name: 'الأجندة', href: '/#'},
    {name: 'عن المؤتمر', href: '/'},
]

// const navigation2 = [
//     {name: 'عن المؤتمر', href: '/'},
//     // {name: 'الأجندة وورش العمل-قريبًا', href: '/workshops'},
//     {name: 'الأجندة وورش العمل-قريبًا', href: '/'},
//     // {name: 'المركز الإعلامي-قريبًا', href: '/media'},
//     {name: 'المركز الإعلامي-قريبًا', href: '/'},
//     // {name: 'الجهات والرعاة-قريبًا', href: '/#logosection'},
//     {name: 'الرعايات', href: '/sponsorships'},
//     // {name: 'التسجيل-قريبًا', href: '/reg3'},
//     {name: 'التسجيل-قريبًا', href: '/'},
//     // {name: 'المتحدثين-قريبًا', href: '/#speakersection'},
//     {name: 'المتحدثين-قريبًا', href: '/'},
// ]

const navigation2 = [
    {name: 'المركز الإعلامي', href: '/#'},
    {name: 'التسجيل', href: '/#'},
    {name: 'الرعايات', href: '/sponsorships'},
    {name: 'الجهات المشاركة', href: '/#'},
    {name: 'الجلسات الحوارية وورش العمل', href: '/workshops'},
    {name: 'الأجندة', href: '/#'},
    {name: 'عن المؤتمر', href: '/'},
]


export default function CustomNavbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const location = useLocation();

    const scrollToSectionFirst = () => {
        const section = document.getElementById("firstsection");
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };
    // Reference for the second section
    const secondSectionRef = useRef(null);

        const handleScrollToSection = (section) => {
            const sectionMap = {
                'الجهات والرعاة': 'logosection',
                'المتحدثين': 'speakersection',
            };

            const targetSection = sectionMap[section];
            if (targetSection) {
                scroller.scrollTo(targetSection, {
                    duration: 800,
                    delay: 0,
                    smooth: 'easeInOutQuart',
                });
            }
        };

    const style = {
        logo: {
            width: "120px",
        },
        rowStyle: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // marginTop: "10rem"
        },
        button: {
            backgroundColor: 'white',
            color: 'rgb(12,12,150)',
            width: '250px',
            borderRadius: '30px',
            fontFamily: "DiodrumBold",
            border: "none"
        }
    }
    return (
        <Card style={{
            marginBottom: '8rem',
            fontFamily: "DiodrumRegular",
            // minHeight: "120vh",
            background: `url(${BackGroundImage})`,
            backgroundSize: 'cover',
            // height: "100vh",
            color: "white",
            padding: "0 0 30px 0",
            border: "none",
            borderRadius: "0"
        }}
        >
            <header className="absolute inset-x-0 top-0 z-50">
                <nav aria-label="Global"
                     className={`flex items-center justify-center p-6 lg:px-8 ${location.pathname !== '/' && location.pathname !== '/home' ? 'custom-navbar-bg' : ''}`}>
                    {/* Left section for mobile: Hamburger menu */}
                    <div className="flex lg:hidden w-full justify-between">
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(true)}
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="h-6 w-6"/>
                        </button>
                        {/* Right side logo for mobile */}
                        <NavLink tag={ReactLink} to="/"  className="-m-1.5 p-1.5">
                            <img src={Logo} alt="Logo" style={style.logo}/>
                        </NavLink>
                    </div>

                    {/* Centered navigation links for desktop */}
                    <div className="hidden lg:flex lg:gap-x-6 lg:flex-grow lg:justify-center">
                    {navigation.map((item) => (
    <NavItem key={item.name} className="nav-link">
        <NavLink
            tag={ReactLink}
            to={item.href}
            className={`text-sm font-semibold text-white leading-6 rounded-md px-1 py-3 transition-colors duration-300 custom-item ${
                location.pathname === item.href ? 'custom-active-bg' : ''
            }`}
            onClick={
                item.name === 'الجهات والرعاة' || item.name === 'المتحدثين'
                    ? () => handleScrollToSection(item.name)
                    : undefined
            }
        >
            {item.name}
        </NavLink>
    </NavItem>
))}
                    </div>

                    {/* Right side logo for desktop */}
                    <div className="hidden lg:flex lg:justify-end lg:flex-none">
                        <NavLink tag={ReactLink} to="/">
                            <img src={Logo} alt="Logo" style={style.logo}/>
                        </NavLink>
                    </div>
                </nav>
                <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                    <div className="fixed inset-0 z-50"/>
                    <DialogPanel
                        className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">

                        <div className="flex items-center justify-between">
                            <NavItem className="nav-link">
                                <NavLink tag={ReactLink} to="/" 
                                         className="-m-1.5 p-1.5">
                                    <span className="sr-only">Your Company</span>
                                </NavLink>
                            </NavItem>
                            <button
                                type="button"
                                onClick={() => setMobileMenuOpen(false)}
                                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon aria-hidden="true" className="h-6 w-6"/>
                            </button>
                        </div>

                        {/* Navigation items section */}
                        <div className="mt-6 flow-root text-right"> {/* Added 'text-right' here */}
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    {navigation2.map((item) => (
                                        <NavItem key={item.name} href={item.href}
                                                 className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                        >
                                            <NavLink tag={ReactLink} to={item.href} onClick={() => setMobileMenuOpen(false)}
                                                     className="text-sm font-semibold leading-6 text-gray-900">
                                                {item.name}
                                            </NavLink>
                                        </NavItem>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </DialogPanel>
                </Dialog>

            </header>

            {(location.pathname === "/" || location.pathname === "/home") && (
                <div className="bannerPage">
                    {/* Main Content Section */}
                    <Container className="text-center" style={{paddingTop: "10rem"}}>
                        <Row style={style.rowStyle}>
                            <Col className="d-flex justify-content-center" style={{textAlign: 'center'}}>
                                <img className="mb-2" src={bannerLogo} alt="Logo" style={{width: "80px"}}/>
                            </Col>
                        </Row>
                        <Row style={style.rowStyle}>
                            <Col className="d-flex justify-content-center" style={{textAlign: 'center'}}>
                                <h5>مؤتمر المحاماة السعودي</h5>
                            </Col>
                        </Row>
                        <Row style={style.rowStyle}>
                            <Col className="d-flex justify-content-center" style={{textAlign: 'center'}}>
                                <p>Saudi Lawyers Conference</p>
                            </Col>
                        </Row>

                        <Row className="justify-content-center">
                            <Col md="8">
                                <h1 className="display-4 mb-3 mt-4" style={{fontFamily: 'DiodrumBold'}}>تحت عنوان</h1>
                                <p className="display-4 lead mb-4"
                                   style={{fontFamily: "DiodrumMedium", marginTop: "-15px"}}>تطورات قطاع
                                    المحاماة والاستشارات
                                    القانونية</p>

                                <Button onClick={() => window.open('https://register.slc.sba.gov.sa', '_blank')} className="mb-5" style={style.button} size="lg">ﺳﺠـﻞ ﺍﻵﻥ </Button>
                            </Col>
                        </Row>

                        <Row className="mb-4">
                            <Col style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                                <p style={{margin: '0', padding: '0 10px', textAlign: "center"}}><a style={{margin: '0', padding: '0 10px', textAlign: "center",color:"white",textDecoration:"none"}} className='custom-font-size-nav-link' href='https://maps.app.goo.gl/mHifqS1R83RSMq8P9' target='_blank'>
                                الرياض، فندق الفيرمونت                                </a></p>
                                <img src={img7} style={{width: '15px', paddingTop: "10px"}} alt=""/>
                                <p style={{margin: '0', paddingLeft: "20px"}} className='custom-font-size-nav-link'>
                                    م
                                </p>
                                <p style={{margin: '0'}} className='custom-font-size-nav-link'>
                                    2024
                                </p>
                                <p style={{margin: '0', paddingLeft: "10px"}} className='custom-font-size-nav-link'>
                                    ديسمبر
                                </p>
                                <p style={{margin: '0'}} className='custom-font-size-nav-link'>
                                    23 - 22
                                </p>
                                <img src={img8} style={{width: '25px', paddingLeft: '5px', paddingTop: "8px"}} alt=""/>
                            </Col>
                            
                        </Row>
                        <Row className="mb-4">
                        <Col style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                                <p style={{margin: '0'}} className='custom-font-size-nav-link'>
                                    09:00 pm - 12:00 pm
                                </p>
                                <img src={img9} style={{width: '25px', paddingLeft: '5px', paddingTop: "8px"}} alt=""/>

                            </Col>
                        </Row>

                        {/* Horizontal icons */}
                        <Row className="d-flex justify-content-center d-lg-none d-md-none mt-5 mb-4">
                            <Col md="auto"
                                 className="d-flex flex-row align-items-start justify-content-center"> {/* Updated to 'flex-row' */}
                                {[
                                    // {href: "https://youtube.com/@saudi_sba?si=xI4j9j9kprnY9f58", img: img6, alt: "YouTube"},
                                    {href: "https://www.linkedin.com/showcase/105401716/admin/dashboard", img: img5, alt: "LinkedIn"},
                                    // {href: "https://www.snapchat.com/add/saudi_sba?share_id=YZt63zQ_Cdg&locale=en-US", img: img4, alt: "Snapchat"},
                                    {href: "https://www.instagram.com/sba_conference/profilecard/?igsh=MW96a3liZHN2MXRhNg==", img: img3, alt: "Instagram"},
                                    {href: "https://www.facebook.com/share/1Aq29xi3rR/?mibextid=kFxxJD", img: img2, alt: "Facebook"},
                                    {href: "https://x.com/SBA_Conference ", img: img1, alt: "Twitter"},
                                ].map((item, index) => (
                                    <a key={index} href={item.href} target='_blank'
                                       className="text-white mb-3 mx-1"> {/* Added 'mx-1' for spacing */}
                                        <img
                                            src={item.img}
                                            alt={item.alt}
                                            style={{width: '30px', height: '30px'}}
                                        />
                                    </a>
                                ))}
                            </Col>
                        </Row>

                        {/* Vertical icons*/}
                        <Row className="mb-4 bottom_icons"
                             style={{
                                 bottom: "0",
                                 left: "4%",
                                 position: "absolute",
                             }}>
                            <Col md="auto" className="d-flex flex-column align-items-start">
                                {[
                                    // {href: "https://youtube.com/@saudi_sba?si=xI4j9j9kprnY9f58", img: img6, alt: "YouTube"},
                                    {href: "https://www.linkedin.com/showcase/105401716/admin/dashboard", img: img5, alt: "LinkedIn"},
                                    // {href: "https://www.snapchat.com/add/saudi_sba?share_id=YZt63zQ_Cdg&locale=en-US", img: img4, alt: "Snapchat"},
                                    {href: "https://www.instagram.com/sba_conference/profilecard/?igsh=MW96a3liZHN2MXRhNg==", img: img3, alt: "Instagram"},
                                    {href: "https://www.facebook.com/share/1Aq29xi3rR/?mibextid=kFxxJD", img: img2, alt: "Facebook"},
                                    {href: "https://x.com/SBA_Conference ", img: img1, alt: "Twitter"},
                                ].map((item, index) => (
                                    <a key={index} href={item.href} target='_blank' className="text-white mb-3">
                                        <img
                                            src={item.img}
                                            alt={item.alt}
                                            style={{width: '30px', height: '30px'}}
                                        />
                                    </a>
                                ))}
                            </Col>
                        </Row>

                        <Row
                            className="d-flex justify-content-center align-content-center align-items-center">
                            <Col xxl={12} xl={12} lg={12} md={12} sm={12}
                                 className="d-flex justify-content-center align-content-center align-items-center">
                                <Button
                                    color="link"
                                    href="/#firstsectionone"
                                    
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        textDecoration: 'none',
                                        color: '#000'
                                    }}>
                                    {/* ICON */}
                                    <div style={{
                                        width: '50px',
                                        height: '50px',
                                        borderRadius: '50%',
                                        backgroundColor: '#fff',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        boxShadow: '0px 2px 6px rgba(0,0,0,0.1)'
                                    }}>
                                        <ArrowDown color='rgb(12,12,150)' size={35}/>
                                    </div>
                                    <span style={{
                                        marginTop: '8px',
                                        color: 'white',
                                        fontSize: '20px',
                                        fontFamily: "DiodrumMedium"
                                    }}>عن المؤتمر</span>
                                </Button>
                            </Col>
                        </Row>
                    </Container>
                </div>
            )}
        </Card>
    )
}
