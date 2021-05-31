import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./sass/style.scss";
import Layout from './components/Layout';
import Home from './pages/Home';
import News from './pages/News';
import Contact from './pages/Contact'; 


const App: React.FC = () => (
    <Router>
        <Layout>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/news">
                    <News />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
            </Switch> 
        </Layout>
    </Router>
);

export default App;