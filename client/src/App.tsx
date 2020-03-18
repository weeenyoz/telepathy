import React, { useState, useEffect } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter as Router, Route, Switch, Redirect, useHistory } from 'react-router-dom';
import LoginPage from './modules/Login/LoginPage';
import Home from './modules/Home/HomeComponent';
import Layout from './modules/Layout/LayoutComponent';
import { AppContext } from './context';
import './App.scss';
import theme from './theme';

const App = () => {
    const [isAuthenticated, toggleIsAuthenticated] = useState(false);

    const layoutHandler = (authenticated: boolean): void => {
        toggleIsAuthenticated(authenticated);
    };

    const context = {
        layoutHandler,
        isAuthenticated,
    };

    const getRedirect = () => {
        return <Redirect to="/" />;
    };

    useEffect(() => {
        if (!isAuthenticated) {
            getRedirect();
        }
    }, [isAuthenticated]);

    return (
        <ThemeProvider theme={theme}>
            <AppContext.Provider value={context}>
                <div className="App">
                    <Layout>
                        <Router>
                            <Switch>
                                <Route exact path="/" render={props => <LoginPage />} />
                                <Route exact path="/home/" render={props => <Home {...props} />} />
                            </Switch>
                        </Router>
                    </Layout>
                </div>
            </AppContext.Provider>
        </ThemeProvider>
    );
};

export default App;
