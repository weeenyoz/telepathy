import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Box, Link, Typography } from '@material-ui/core';
import { UserInterface, TweetInterface } from '../typings/Tweet';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            textAlign: 'left',
        },
        link: {
            fontWeight: 'bold',
        },
    }),
);

interface TimelineProps {
    data: {
        user: UserInterface;
        title: TweetInterface['title'];
    };
}

const Timeline: React.FC<TimelineProps> = (props: TimelineProps) => {
    const classes = useStyles();

    const { user, title } = props.data;

    const { url, name } = user;

    const linkHandler = () => {
        window.open('')?.location.replace(url);
    };

    return (
        <Box className={classes.root}>
            <Typography variant="h6">
                <Box className={classes.link}>
                    <Link href="#" onClick={linkHandler}>
                        {name}
                    </Link>
                </Box>
            </Typography>
            <Typography variant="body2" component="p">
                {title}
            </Typography>
        </Box>
    );
};

export default Timeline;
