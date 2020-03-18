/* eslint-disable react/prop-types */
import React, { useState, useEffect, useContext } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import axios from 'axios';
import NavBarComponent from '../material-components/NavBar/NavBarComponent';
import { AppContext } from '../../context';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        landingNavBar: {
            boxShadow: 'unset',
            color: theme.palette.primary.main,
            backgroundColor: 'white',
            paddingTop: 5,
        },
    }),
);

const Layout: React.FC = props => {
    const classes = useStyles();
    const { children } = props;

    const [customClasses, setCustomClasses] = useState('');
    const { layoutHandler, isAuthenticated } = useContext(AppContext);

    useEffect(() => {
        if (!isAuthenticated) {
            setCustomClasses(classes.landingNavBar);
        } else {
            setCustomClasses('');
        }
    }, [isAuthenticated]);

    const logoutHandler = async () => {
        const result = await axios.get('/api/user/logout');

        if (result.status === 200) {
            layoutHandler(false);
        }
    };

    return (
        <React.Fragment>
            <NavBarComponent
                className={customClasses}
                appTitle={{ title: 'Telepathweet', orientation: 'left' }}
            >
                {isAuthenticated && <button onClick={logoutHandler}>Logout</button>}
            </NavBarComponent>
            {children}
        </React.Fragment>
    );
};

export default Layout;
