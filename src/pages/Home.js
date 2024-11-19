import React, {useEffect, useState} from "react";
import {Base} from "../component/Base";
import {Button, Card, Col, Row} from "reactstrap";
import personImage from "../asset/bannerBottomImage.png";
import mobileImage from "../asset/mobileViewPerson@4x.png";
import "../style/fonts.css";
import "../style/HomeCompSecOne.css";
import icon1 from "../asset/icon_mm.png";
import icon2 from "../asset/icon_mic.png";
import icon3 from "../asset/icon_calendar.png";
import leftArrow from "../asset/socialMedia/leftArrow.png";
import rightArrow from "../asset/socialMedia/rightArrow.png";
import HomeComponentSecTwo from "../component/HomeComponentSecTwo";
import NewImageSlider from "../component/NewImageSlider";
import {HomeComponentSecThree} from "../component/HomeComponentSecThree";
import LogoPage from "./LogoPage";
import image1 from "../asset/SliderImage/1.png";
import image2 from "../asset/SliderImage/2.png";
import image3 from "../asset/SliderImage/3.png";
import image4 from "../asset/SliderImage/4.png";
import image5 from "../asset/SliderImage/5.png";
import {useLocation} from "react-router-dom";
import {scroller} from "react-scroll";
import ConferenceBanner from "../testing/ConferenceBanner";


export function Home() {
    const location = useLocation()
    useEffect(() => {
        // Check if there's a hash in the URL and scroll to that section
        const hash = location.hash.replace("#", ""); // Remove '#' from hash
        if (hash) {
            scroller.scrollTo(hash, {
                duration: 800,
                delay: 0,
                smooth: "easeInOutQuart",
            });
        }
    }, [location.hash]);

    const [imageSrc, setImageSrc] = useState(personImage);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 950) {
                setImageSrc(mobileImage); // Mobile image
            } else {
                setImageSrc(personImage); // Default image
            }
        };

        // Initial check
        handleResize();

        // Add resize listener
        window.addEventListener('resize', handleResize);

        // Cleanup listener on unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const data = [
        {
            title: "ﻳُﺴﻬﻢ",
            subtitle: " ﻓﻲ ﺇﺑﺮﺍﺯ ﺃﻫﻢ ﻣﺴﺘﺠﺪﺍﺕ ﻭﺗﻄﻮﺭﺍﺕ ﻗﻄﺎﻉ ﺍﻟﻤﺤﺎﻣﺎﺓ ﻭﺍﻻﺳﺘﺸﺎﺭﺍﺕ ﺍﻟﻘﺎﻧﻮﻧﻴﺔ، ﻭﺍﻟﺪﻭﺭ ﺍﻟﻤﻬﻨﻲ ﻭﺍﻟﺘﺤﻮﻻﺕ ﺍﻟﺮﻗﻤﻴﺔ ﻭﺃﺛﺮﻫﺎ ﻋﻠﻰ ﺍﻟﺨﺪﻣﺎﺕ ﺍﻟﻘﺎﻧﻮﻧﻴﺔ، ﻟﻠﻬﻴﺌﺔ ﺍﻟﺴﻌﻮﺩﻳﺔ ﻟﻠﻤﺤﺎﻣﻴﻦ ﻓﻲ ﺗﻄﻮﻳﺮ ﺍﻟﻘﻄﺎﻉ، ﻭﺣﺼﺮ ﺍﻟﺘﺤﺪﻳﺎﺕ ﻭﺍﻟﻔﺮﺹ ﺍﻟﻤﻬﻨﻴﺔ ﻟﻠﻤﻨﺸﺂﺕ ﺍﻟﻘﺎﻧﻮﻧﻴﺔ؛ ﻣﻤﺎ ﻳﺆﺛﺮ ﺇﻳﺠﺎﺑًﺎ ﻓﻲ ﺯﻳﺎﺩﺓ ﻣﻮﺛﻮﻗﻴﺔ ﺍﻟﺘﺄﻫﻴﻞ ﺍﻟﻤﻬﻨﻲ، ﻭﻳﻌﺰﺯ ﺗﻤﻜﻴﻦ ﺍﻟﻤﻬﻦ ﺍﻟﻘﺎﻧﻮﻧﻴﺔ ﻭﻗﻄﺎﻉ ﺍﻷﻋﻤﺎﻝ ﻭﺍﻻﺳﺘﺜﻤﺎﺭ، ﻭﻳﺤﻘﻖ ﻣﺴﺘﻬﺪﻓﺎﺕ ﺭﺅﻳﺔ المملكة (٢٠٣٠)",
            img: icon1
        },
        {
            title: "ﻳﻨﺎﻗﺶ",
            subtitle: " ﺍﻟﻤﺆﺗﻤﺮ ﻋﺪﺩًﺍ ﻣﻦ ﺍﻟﻤﺤﺎﻭﺭ ﺫﺍﺕ ﺍﻟﻌﻼﻗﺔ ﺍﻟﻤﻤﻠﻜﺔ ﻭﺃﺛﺮﻫﺎ ﺍﻹﻳﺠﺎﺑﻲ ﻋﻠﻰ ﺑﻴﺌﺔ ﺍﻷﻋﻤﺎﻝ ﻭﺍﻻﺳﺘﺜﻤﺎﺭ ﺑﺘﻄﻮﺭﺍﺕ ﻗﻄﺎﻉ ﺍﻟﻤﺤﺎﻣﺎﺓ ﻭﺍﻻﺳﺘﺸﺎﺭﺍﺕ ﺍﻟﻘﺎﻧﻮﻧﻴﺔ ﻓﻲ ﺍﻟﻤﻬﻨﻴﺔ، ﻭﺗﻌﺰﻳﺰ ﺍﻟﺘﺄﻫﻴﻞ ﻭﺍﻟﺘﻤﻜﻴﻦ ﻟﻠﻤﻤﺎﺭﺱ ﺍﻟﻘﺎﻧﻮﻧﻲ. ﻓﻲ ﺍﻟﻤﻤﻠﻜﺔ ﻭﺫﻟﻚ ﺑﻬﺪﻑ ﺭﻓﻊ ﻣﺴﺘﻮﻯ ﺍﻟﻤﻤارسة المهنية.",
            img: icon2
        },
        {
            title: " ﻳﻨﻌﻘﺪ",
            subtitle: " ﻣﺆﺗﻤﺮ ﺍﻟﻤﺤﺎﻣﺎﺓ ﺍﻟﺴﻌﻮﺩﻱ ﻓﻲ ﺩﻳﺴﻤﺒﺮ 2024ﻡ ﺑﺘﻨﻈﻴﻢ ﻣﻦ ﺍﻟﻬﻴﺌﺔ ﺍﻟﺴﻌﻮﺩﻳﺔ ﻟﻠﻤﺤﺎﻣﻴﻦ ﻳﻮﻣﻲ 22 ﻭ 23 ﺩﻳﺴﻤﺒﺮ 2024ﻡ ﺑﻤﺪﻳﻨﺔ ﺍﻟﺮﻳﺎﺽ، ﺗﺤﺖ ﺷﻌﺎﺭ \"ﺗﻄﻮﺭﺍﺕ ﻗﻄﺎﻉ ﺍﻟﻤﺤﺎﻣﺎﺓ ﻭﺍﻻﺳﺘﺸﺎﺭﺍﺕ ﺍﻟﻘﺎﻧﻮﻧﻴﺔ",
            img: icon3
        },
    ];

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

    const [currentIndex, setCurrentIndex] = useState(data.length - 1);

    // Next Slide Function
    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === data.length - 1 ? 0 : prevIndex + 1
        );
    };

    // Previous Slide Function
    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? data.length - 1 : prevIndex - 1
        );
    };

    return (
        <Base>
            {/* Person Container */}
            <ConferenceBanner/>
            <div style={{marginTop: "-20px"}} className="mainDiv">
                <HomeComponentSecTwo/>
                <NewImageSlider/>
                <HomeComponentSecThree/>
                <LogoPage/>
            </div>
        </Base>
    )
}