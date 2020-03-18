import React from 'react';
import axios from 'axios';
import IconButton from '@material-ui/core/IconButton';
import { FaRetweet } from 'react-icons/fa';
import useGetTimeline from '../hooks/useGetTimeline';

interface ButtonComponentProps {
    idStr?: string;
}

const Button: React.FC<ButtonComponentProps> = (props: ButtonComponentProps) => {
    const { idStr } = props;
    const { setTimeline, getTimeline } = useGetTimeline();

    const retweetHandler = async () => {
        const result = await axios.post('/api/tweeter/retweet', { id: idStr });
        result && console.log('result %%: ', result);
        if (result.status === 204) {
            const data = await getTimeline();
            setTimeline(data);
        }
    };

    return (
        <React.Fragment>
            <IconButton onClick={retweetHandler}>
                <FaRetweet />
            </IconButton>
        </React.Fragment>
    );
};

export default Button;
