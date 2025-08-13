import { BrowserRouter as Router } from "react-router"

import Header from "./components/Header/Header"
import HeaderRoutes from "./components/Header/HeaderRoutes"

export default function App()
{
    return (<>
        <Router>
            <Header />
            <HeaderRoutes />
        </Router>
    </>)
}
