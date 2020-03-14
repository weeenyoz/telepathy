/* eslint-disable react/prop-types */
import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            marginBottom: theme.spacing(8.75),
        },
        toolbar: {
            padding: theme.spacing(0, 12.5),
        },
    }),
);

const NavBarComponent: React.FC = props => {
    const classes = useStyles();
    const { children } = props;

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar className={classes.toolbar}>
                    <Typography variant="h6">Telepathweet</Typography>
                </Toolbar>
                {children}
            </AppBar>
        </div>
    );
};

export default NavBarComponent;
