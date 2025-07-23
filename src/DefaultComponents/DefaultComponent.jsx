import { Children } from "react";
import HeaderPage from "../pages/HeaderPage/HeaderPage";

export const DefaultComponent = ({children})=>{
    return (
        <div>
            <HeaderPage/>
            {children}
        </div>
    )
}