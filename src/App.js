import './App.css';
import RegistrationForm from '../src/pages/RegistrationForm';
import RegistrationForm1 from '../src/pages/RegistrationForm1'
import RegistrationForm2 from '../src/pages/RegistrationForm2'
import BoxesDetails from './component/HomeComponentSecThree'
import Calendar from '../src/pages/Calendar'
import MainPage from './component/MainPage'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home";
import {RegMethodOne} from "./pages/RegMethodOne";
import RegistrationForm3 from "./pages/RegistrationForm3";
import {ImageSliderForTesting} from "./component/ImageSliderForTesting";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/reg" element={<RegistrationForm/>}/>
                <Route path="/reg1" element={<RegistrationForm1/>}/>
                <Route path="/reg2" element={<RegistrationForm2/>}/>
                <Route path="/reg3" element={<RegistrationForm3/>}/>
                <Route path="/box" element={<BoxesDetails/>}/>
                <Route path="/cal" element={<Calendar/>}/>
                <Route path="/regmethod" element={<RegMethodOne/>}/>
                <Route path="/main" element={<MainPage/>}/>
                {/*<Route path="/testing" element={<ImageSliderForTesting/>}/>*/}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
