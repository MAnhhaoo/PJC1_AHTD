import { Children } from "react";
import HeaderPage from "../pages/HeaderPage/HeaderPage";
import FooterPage from "../pages/FooterPage/FooterPage";

export const DefaultComponent = ({children})=>{
    return (
        <div>
            <HeaderPage/>
            {children}
            <FooterPage/>
        </div>
    )
}