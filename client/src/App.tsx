import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import './App.scss';
import theme from './theme';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './modules/Login/LoginPage';
import Home from './modules/Home/HomeComponent';
import Layout from './modules/Layout/LayoutComponent';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <Router>
                    <Switch>
                        <Route exact path="/" render={props => <LoginPage {...props} />} />
                        <Layout>
                            <Route exact path="/home/" render={props => <Home {...props} />} />
                        </Layout>
                    </Switch>
                </Router>
            </div>
        </ThemeProvider>
    );
}

export default App;
