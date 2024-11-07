import {Base} from "../component/Base";
import {HomeComponentOne} from "../component/HomeComponentOne";
import ConferenceSection from "./ConferenceSection";

export function Home() {
    return (
        <Base>
            <HomeComponentOne/>
            <ConferenceSection/>
        </Base>
    )
}