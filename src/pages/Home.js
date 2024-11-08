import {Base} from "../component/Base";
import LogoPage from "./LogoPage";
import {HomeComponentSecOne} from "../component/HomeComponentSecOne";
import HomeComponentSecTwo from "../component/HomeComponentSecTwo";
import HomeComponentSecThree from "../component/HomeComponentSecThree";
import Slider from "../component/HomePageSecOneP1";

export function Home() {
    return (
        <Base>
            <HomeComponentSecOne/>
            {/*<Slider/>*/}
            <HomeComponentSecTwo/>
            <HomeComponentSecThree/>
            <LogoPage/>
        </Base>
    )
}