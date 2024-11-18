import { useEffect } from "react";
import {Base} from "../component/Base";
import {HomeComponentSecOne} from "../component/HomeComponentSecOne";
import {ImageSliderForTesting} from "../testing/ImageSliderForTesting";
import { useLocation } from "react-router-dom";
import { scroller } from "react-scroll";


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
    return (
        <Base>
            {/*<MainPage/>*/}
            <HomeComponentSecOne/>
            <ImageSliderForTesting/>
        </Base>
    )
}