import {Base} from "../component/Base";
import LogoPage from "./LogoPage";
import {HomeComponentSecOne} from "../component/HomeComponentSecOne";
import HomeComponentSecTwo from "../component/HomeComponentSecTwo";
import HomeComponentSecThree from "../component/HomeComponentSecThree";

export function Home() {
    return (
        <Base>
            <HomeComponentSecOne/>
            <HomeComponentSecTwo/>
            <HomeComponentSecThree/>
            <LogoPage/>
        </Base>
    )
}