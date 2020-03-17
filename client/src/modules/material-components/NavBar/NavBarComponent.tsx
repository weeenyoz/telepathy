/* eslint-disable react/prop-types */
import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { AppBarProps } from '@material-ui/core/AppBar';

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

interface NavBarProps extends AppBarProps {
    appTitle: { title: string; orientation: 'left' | 'right' };
}

const NavBarComponent: React.FC<NavBarProps> = (props: NavBarProps) => {
    const classes = useStyles();
    const { appTitle, children, ...rest } = props;

    const { title, orientation } = appTitle;

    const renderAppTitle = (orientation: 'left' | 'right') => {
        return (
            <Typography variant="h5" style={{ fontWeight: 600, flex: 1, textAlign: orientation }}>
                {title}
            </Typography>
        );
    };

    return (
        <div className={classes.root}>
            <AppBar position="static" {...rest}>
                <Toolbar className={classes.toolbar}>
                    {orientation === 'left' && renderAppTitle(orientation)}
                    {children}
                    {orientation === 'right' && renderAppTitle(orientation)}
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default NavBarComponent;
