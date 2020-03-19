import React, { useState, useContext } from 'react';
import IconButton from '@material-ui/core/IconButton';
import { FaRetweet } from 'react-icons/fa';
import { HomeContext } from '../Home/context';
import usePostRetweet from '../hooks/usePostRetweet';

interface ButtonComponentProps {
    idStr?: string;
    retweetCount?: number;
}

const Button: React.FC<ButtonComponentProps> = (props: ButtonComponentProps) => {
    const { idStr, retweetCount } = props;

    const [isRetweeted, toggleIsRetweet] = useState(false);

    const { handleRetweet } = useContext(HomeContext);

    const { retweet } = usePostRetweet();

    const retweetHandler = async () => {
        try {
            const result = await retweet(idStr);
            if (result?.status === 204) {
                handleRetweet(true);
                toggleIsRetweet(true);
            }
            handleRetweet(false);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <React.Fragment>
            <IconButton onClick={retweetHandler}>
                <FaRetweet />
            </IconButton>
            <span style={isRetweeted ? { color: 'green' } : { color: 'unset' }}>
                {retweetCount}
            </span>
        </React.Fragment>
    );
};

export default Button;
