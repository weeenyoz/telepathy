import React, { ReactNode } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Card, CardContent, Grid } from '@material-ui/core/';
import AvatarComponent from '../Avatar/AvatarComponent';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            margin: theme.spacing(0, 12.5, 5, 12.5),
        },
        timeline: {
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
    data: { url?: string; image: string };
    children?: ReactNode;
}

const CardComponent: React.FC<CardComponentProps> = (props: CardComponentProps) => {
    const classes = useStyles();

    const { data, children } = props;

    const { url, image } = data;

    const cardActionHandler = () => {
        if (url) window.open('')?.location.replace(url);
    };

    const classNames = url ? `${classes.root} ${classes.timeline}` : `${classes.root}`;

    return (
        <React.Fragment>
            <Card className={classNames}>
                <CardContent onClick={cardActionHandler}>
                    <Grid container>
                        <Grid item xs={1} className={classes.avatar}>
                            <AvatarComponent src={image} />
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
