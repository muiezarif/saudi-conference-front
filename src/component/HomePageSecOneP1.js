// import React, { useState } from 'react';
// import {
//     Carousel,
//     CarouselItem,
//     CarouselControl,
//     CarouselIndicators,
//     CarouselCaption,
// } from 'reactstrap';
// import img1 from "../asset/MainSliderImages/sliderImg1.png";
// import img2 from "../asset/MainSliderImages/sliderImg2.png";
// import img3 from "../asset/MainSliderImages/sliderImg3.png";
//
// const items = [
//     {
//         src: img1,
//         altText: 'Slide 1',
//         caption: 'Slide 1',
//         key: 1,
//     },
//     {
//         src: img2,
//         altText: 'Slide 2',
//         caption: 'Slide 2',
//         key: 2,
//     },
//     {
//         src: img3,
//         altText: 'Slide 3',
//         caption: 'Slide 3',
//         key: 3,
//     },
// ];
//
// function Slider(args) {
//     const [activeIndex, setActiveIndex] = useState(0);
//     const [animating, setAnimating] = useState(false);
//
//     const next = () => {
//         if (animating) return;
//         const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
//         setActiveIndex(nextIndex);
//     };
//
//     const previous = () => {
//         if (animating) return;
//         const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
//         setActiveIndex(nextIndex);
//     };
//
//     const goToIndex = (newIndex) => {
//         if (animating) return;
//         setActiveIndex(newIndex);
//     };
//
//     const slides = items.map((item) => {
//         return (
//             <CarouselItem
//                 onExiting={() => setAnimating(true)}
//                 onExited={() => setAnimating(false)}
//                 key={item.src}
//             >
//                 <img src={item.src} alt={item.altText}  style={{width:"100px"}}/>
//                 <CarouselCaption
//                     captionText={item.caption}
//                     captionHeader={item.caption}
//                 />
//             </CarouselItem>
//         );
//     });
//
//     return (
//         <Carousel
//             activeIndex={activeIndex}
//             next={next}
//             previous={previous}
//             {...args}
//         >
//             <CarouselIndicators
//                 items={items}
//                 activeIndex={activeIndex}
//                 onClickHandler={goToIndex}
//             />
//             {slides}
//             <CarouselControl
//                 direction="prev"
//                 directionText="Previous"
//                 onClickHandler={previous}
//             />
//             <CarouselControl
//                 direction="next"
//                 directionText="Next"
//                 onClickHandler={next}
//             />
//         </Carousel>
//     );
// }
//
// export default Slider;