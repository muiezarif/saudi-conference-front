import {Base} from "../component/Base";
import LogoPage from "./LogoPage";
import {HomeComponentSecOne} from "../component/HomeComponentSecOne";
import HomeComponentSecTwo from "../component/HomeComponentSecTwo";
import HomeComponentSecThree from "../component/HomeComponentSecThree";
import MainPage from '../component/MainPage'

export function Home() {
    return (
        <Base>
            <MainPage/>
            <HomeComponentSecOne/>
            <HomeComponentSecTwo/>
            <HomeComponentSecThree/>
            <LogoPage/>
        </Base>
    )
}