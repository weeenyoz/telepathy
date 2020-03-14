/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/camelcase */
import React, { useState, ReactNode } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Card, CardContent, Grid } from '@material-ui/core/';
import AvatarComponent from '../Avatar/AvatarComponent';
import { TweetInterface } from '../../typings/Tweet';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            margin: theme.spacing(0, 12.5, 5, 12.5),
            '&:hover': {
                cursor: 'pointer',
                backgroundColor: theme.palette.primary.light,
            },
        },
        avatar: {
            alignSelf: 'center',
            paddingLeft: theme.spacing(1.75),
        },
    }),
);

interface CardComponentProps {
    data: TweetInterface;
    children?: ReactNode;
}

const CardComponent: React.FC<CardComponentProps> = (props: CardComponentProps) => {
    const classes = useStyles();

    const { data, children } = props;

    const { user, url } = data;

    const cardActionHandler = () => {
        window.open('')?.location.replace(url);
    };

    return (
        <React.Fragment>
            <Card className={classes.root}>
                <CardContent onClick={cardActionHandler}>
                    <Grid container>
                        <Grid item xs={1} className={classes.avatar}>
                            <AvatarComponent src={user.profileImageUrl} />
                        </Grid>
                        <Grid item xs={11}>
                            {children}
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </React.Fragment>
    );
};

export default CardComponent;
