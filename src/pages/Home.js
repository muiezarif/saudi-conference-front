import {Base} from "../component/Base";
import {HomeComponentOne} from "../component/HomeComponentOne";
import ConferenceSection from "./ConferenceSection";
import LogoPage from "./LogoPage";

export function Home() {
    return (
        <Base>
            <HomeComponentOne/>
            <ConferenceSection/>
            <LogoPage/>
        </Base>
    )
}