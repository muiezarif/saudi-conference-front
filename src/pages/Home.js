import {Base} from "../component/Base";
import {HomeComponentOne} from "../component/HomeComponentOne";
import ConferenceSection from "./ConferenceSection";
import LogoPage from "./LogoPage";
import {HomeComponentSecOne} from "../component/HomeComponentSecOne";
import HomeComponentSecTwo from "../component/HomeComponentSecTwo";
import HomeComponentSecThree from "../component/HomeComponentSecThree";

export function Home() {
    return (
        <Base>
            <HomeComponentOne/>
            <ConferenceSection/>
            <LogoPage/>
            {/*<HomeComponentSecOne/>*/}
            {/*<HomeComponentSecTwo/>*/}
            <HomeComponentSecThree/>
        </Base>
    )
}