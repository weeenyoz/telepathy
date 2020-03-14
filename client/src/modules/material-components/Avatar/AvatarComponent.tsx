import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Avatar, { AvatarProps } from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            marginRight: theme.spacing(2),
        },
    }),
);

type AvatarComponentProps = AvatarProps;

const AvatarComponent: React.FC<AvatarComponentProps> = (props: AvatarComponentProps) => {
    const classes = useStyles();
    const { ...rest } = props;
    return <Avatar className={classes.root} {...rest} />;
};

export default AvatarComponent;
