import { FC } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import Layout from './Components/Layout';
import PublicServer from './Components/PublicServer';

const App : FC = () => (
    <Router>
        <Layout>
            <Switch>
                <Route exact path="/public-server">
                    <PublicServer />
                </Route>
                <Route exact path="/">
                    <Home />
                </Route>
            </Switch>
        </Layout>
    </Router>
);

export default App;