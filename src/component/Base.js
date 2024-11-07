import CustomFooter from "./CustomFooter";
import CustomNavbar from "./CustomNavbar";

export const Base = ({title = "Welcome to our website", children}) => {
    return (
        <div className="p-0">
            {/*  Header  */}
            <CustomNavbar/>
            {children}
            {/*  CustomFooter  */}
            <CustomFooter/>
        </div>
    );
};