import {Base} from "../component/Base";
import {HomeComponentSecOne} from "../component/HomeComponentSecOne";
import {ImageSliderForTesting} from "../testing/ImageSliderForTesting";


export function Home() {
    return (
        <Base>
            {/*<MainPage/>*/}
            <HomeComponentSecOne/>
            <ImageSliderForTesting/>
        </Base>
    )
}