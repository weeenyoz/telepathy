import React from 'react';
import './login.scss';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { RouteComponentProps } from 'react-router-dom';
import { Grid, Box, Typography, CardMedia } from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import NavBarComponent from '../material-components/NavBar/NavBarComponent';

type LoginPageProps = RouteComponentProps;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        content: {
            margin: 'auto',
        },
        banner: {
            margin: '0 20%',
            textAlign: 'left',
        },
        navBar: {
            boxShadow: 'unset',
            color: theme.palette.primary.main,
            backgroundColor: 'white',
            paddingTop: 5,
        },
    }),
);

const LoginPage: React.FC<LoginPageProps> = props => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <NavBarComponent className={classes.navBar} title="Telepathweet" />
            <Grid container>
                <Grid item xs={12} md={6} className={classes.content}>
                    <Box className={classes.banner}>
                        <Typography variant="h4" color="primary">
                            Lorem Culpa animiq elit Dolorem Aliquip Voluptas
                        </Typography>
                        <Typography variant="subtitle2" style={{ marginTop: '20px' }}>
                            Exercitation anim enim reprehenderit aliquip reprehenderit voluptate do
                            dolor voluptate reprehenderit dolor aliqua eiusmod labore.
                        </Typography>
                        <button className="twitter-login-link">
                            <a href="http://localhost:5000/api/user/login">
                                <TwitterIcon color="primary" />
                                Sign in with Twitter
                            </a>
                        </button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <CardMedia image={require('./landing.png')} component="img" />
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default LoginPage;
