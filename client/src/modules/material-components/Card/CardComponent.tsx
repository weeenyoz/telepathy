/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/camelcase */
import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Card, CardActionArea, CardContent, Typography, Grid, Box, Link } from '@material-ui/core/';
import AvatarComponent from '../Avatar/AvatarComponent';
import { TweetInterface } from '../../typings/Tweet';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            margin: theme.spacing(0, 12.5, 5, 12.5),
        },
        avatar: {
            alignSelf: 'center',
            paddingLeft: theme.spacing(1.75),
        },
    }),
);

interface CardComponentProps {
    data: TweetInterface;
}

const CardComponent: React.FC<CardComponentProps> = (props: CardComponentProps) => {
    const classes = useStyles();

    const { data } = props;

    const { title, user, url } = data;

    const clickHandler = () => {
        window.open('')?.location.replace(url);
    };

    return (
        <React.Fragment>
            <Card className={classes.root}>
                <CardActionArea onClick={clickHandler}>
                    <CardContent>
                        <Grid container>
                            <Grid item xs={1} className={classes.avatar}>
                                <AvatarComponent src={user.profileImageUrl} />
                            </Grid>
                            <Grid item xs={11}>
                                <Box style={{ textAlign: 'left' }}>
                                    <Typography gutterBottom variant="h6">
                                        <Box fontWeight="fontWeightBold">
                                            <Link href={user.url}>{user.name}</Link>
                                        </Box>
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {title}
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </CardContent>
                </CardActionArea>
            </Card>
        </React.Fragment>
    );
};

export default CardComponent;
