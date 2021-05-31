import { BrowserRouter as Router } from "react-router-dom";

import Footer from "./Footer";
import Main from "./Main";
import Navigation from "./Navigation";

interface LayoutProps {
    children: React.ReactNode;
}

const index: React.FC<LayoutProps> = ({ children }) => {
    return (
        <Router>
            <div className="wrapper">
                <Navigation />
                <Main>
                    {children}
                </Main>
            </div>

            <Footer />
        </Router>
    )
}

export default index
