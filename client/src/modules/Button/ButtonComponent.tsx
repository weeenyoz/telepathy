import React, { useContext } from 'react';
import axios from 'axios';
import IconButton from '@material-ui/core/IconButton';
import { FaRetweet } from 'react-icons/fa';
import { HomeContext } from '../Home/context';

interface ButtonComponentProps {
    idStr?: string;
    retweetCount?: number;
}

const Button: React.FC<ButtonComponentProps> = (props: ButtonComponentProps) => {
    const { idStr, retweetCount } = props;

    const { handleRetweet } = useContext(HomeContext);

    const retweetHandler = async () => {
        const result = await axios.post('/api/tweeter/retweet', { id: idStr });
        handleRetweet(true);
    };

    return (
        <React.Fragment>
            <IconButton onClick={retweetHandler}>
                <FaRetweet />
            </IconButton>
            {retweetCount}
        </React.Fragment>
    );
};

export default Button;
