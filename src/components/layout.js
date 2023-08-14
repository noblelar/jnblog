import Header from "./header";
import {Outlet} from "react-router-dom";

function Layout () {
    return(
        <main>
            <Header />
            <Outlet />
        </main>
    )
}
export default Layout;