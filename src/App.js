import { BrowserRouter as Router } from "react-router"

import Header from "./components/Header"
import HeaderRoutes from "./components/HeaderRoutes"

export default function App()
{
    return (<>
        <Router>
            <Header />
            <HeaderRoutes />
        </Router>
    </>)
}
