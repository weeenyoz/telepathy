import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Typography } from '@material-ui/core';

type LoginPageProps = RouteComponentProps;

const LoginPage: React.FC<LoginPageProps> = props => {
    return (
        <React.Fragment>
            <Typography variant="h4" color="primary">
                Login Page
            </Typography>
            <a className="link-styles" href="http://localhost:5000/api/user/login">
                Sign in with Twitter
            </a>
        </React.Fragment>
    );
};

export default LoginPage;
