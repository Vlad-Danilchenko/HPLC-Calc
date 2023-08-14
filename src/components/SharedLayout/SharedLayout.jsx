import { render } from "react-dom";
import { Outlet } from "react-router-dom";
import { Header } from "../../layouts/Header/Header";
import { Main } from "../../layouts/Main/Main";

export const SharedLayout = () => {
    return(
        <>
            <Header />
            <Main> 
                <Outlet/>
            </Main>
        </>
    )
}

